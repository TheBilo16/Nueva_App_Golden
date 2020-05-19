import React , { Component } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { Secondary, Base, Utilies } from "../../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//Extras
const { width , height } = Dimensions.get("screen");
const border_line = 3;
const styles = StyleSheet.create({
    container : {
        paddingVertical : 20,
    },
    box_draw : {
        width,
        alignItems : "center",
        paddingVertical : 15,
        position : "relative"
    },
    icon : {
        position : "absolute",
    },
    draw_line : {
        width : width * 0.8,
        height : 20,
        justifyContent : "center",
        position : "relative",
    },
    line : {
        width : "100%",
        height : border_line,
        backgroundColor : Secondary.text_dark
    },
    line_small : {
        width : border_line,
        height : "100%",
        position : "absolute",
        backgroundColor : Secondary.text_dark
    },
    container_text : {
        paddingVertical : 25,
    },
    text_double : {
        marginVertical : 4,
        flexDirection : "row",
        justifyContent : "center"
    },
    title : {
        color : Secondary.text_dark,
        fontWeight : "bold"
    },
    description : {
        color : Secondary.text_light,
        paddingLeft : 20
    }
});

const TextDouble = ({ title, description, especial }) => {
    return <View style={styles.text_double}>
        <Text style={styles.title}>{title}</Text>
        { especial ? 
            <Text style={[styles.description,{ color : Secondary.text_link }]}>{description}</Text> :
            <Text style={styles.description}>{description}</Text>
        }
    </View>
}

class BusLength extends Component{

    constructor(props){
        super(props);
        this.state = {
            mov : 0,
            porcentaje : 0,
        }
    }

    updatePositionMark = props => {
        const { paraderos_recorridos , paraderos_maximos } = props;

        if(paraderos_recorridos > 0){
            if(paraderos_recorridos < paraderos_maximos){
                let porcentaje = (paraderos_recorridos / paraderos_maximos);
                let movimiento = (porcentaje * width * 0.7) - 15;
                this.setState({
                    mov : movimiento,
                    porcentaje : Math.round(porcentaje * 100)
                });                 
            }
        }
    }

    UNSAFE_componentWillReceiveProps(props){
        this.updatePositionMark(props);
    }

    UNSAFE_componentWillMount(){
        this.updatePositionMark(this.props);
    }

    render(){
        const { porcentaje, mov } = this.state;
        const { paraderos_recorridos , paraderos_maximos } = this.props;

        return <View style={styles.container}>
            <View style={styles.box_draw}>
                <View style={styles.draw_line}>
                    <>
                        <View style={styles.line}></View>
                        <View style={[styles.line_small,{ left : 0 }]}></View>
                        <View style={[styles.line_small,{ right : 0 }]}></View>
                    </>
                    <>
                        <View style={[styles.icon, { left : mov + 5 , top : -12, zIndex : 2 }]}>
                            <MaterialCommunityIcons name="map-marker" color={Secondary.text_link} size={16} />
                        </View>
                        <View style={[styles.icon,{ right : 3, top : -20 , zIndex : 1 }]}>
                            <MaterialCommunityIcons name="home-map-marker" color={Secondary.text_dark} size={28} />
                        </View>                    
                    </>
                </View>
            </View>
            <View style={styles.container_text}>
                <TextDouble title="Estado del Viaje" especial description={`${porcentaje}% completado`} />
                <TextDouble title="Fecha de Salida" description="17 de Abril del 2020" />
                <TextDouble title="Fecha de Llegada" description="24 de Abril del 2020" />
                <TextDouble title="Paraderos" description={`${paraderos_recorridos} / ${paraderos_maximos}`} />
            </View>
        </View>        
    }

}

BusLength.defaultProps = {
    paraderos_recorridos : 8,
    paraderos_maximos : 10
}

export default BusLength;