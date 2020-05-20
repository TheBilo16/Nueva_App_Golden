import React , { Component, FC } from "react";
import { View, Text, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";

//Components
import TextCenter from "../TextCenter";

//Extras
import { IBus } from "../../interfaces";
import { Secondary } from "../../../../config/colors";

const { width } = Dimensions.get("screen");

interface IStateBus {
    movimiento : number,
    porcentaje : number
}

class BusGraphics extends Component<IBus,IStateBus>{
    constructor(props : IBus){
        super(props);
        this.state = {
            movimiento : 0,
            porcentaje : 0,
        }
    }

    updatePositionMark = (props : IBus) => {
        const { paraderos_recorridos , paraderos_maximos } = props;

        if(paraderos_recorridos > 0){
            if(paraderos_recorridos < paraderos_maximos){
                let porcentaje_paraderos = (paraderos_recorridos / paraderos_maximos);
                let movimiento = (porcentaje_paraderos * width * 0.7) - 15;

                this.setState({
                    movimiento,
                    porcentaje : Math.round(porcentaje_paraderos * 100)
                });                 
            }
        }
    }

    UNSAFE_componentWillReceiveProps(props : IBus){
        this.updatePositionMark(props);
    }

    UNSAFE_componentWillMount(){
        this.updatePositionMark(this.props);
    }

    render(){
        const { porcentaje, movimiento } = this.state;
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
                        <View style={[styles.icon, { left : movimiento + 5 , top : -12, zIndex : 2 }]}>
                            <MaterialCommunityIcons name="map-marker" color={Secondary.text_link} size={16} />
                        </View>
                        <View style={[styles.icon,{ right : 3, top : -20 , zIndex : 1 }]}>
                            <MaterialCommunityIcons name="home-map-marker" color={Secondary.text_dark} size={28} />
                        </View>                    
                    </>
                </View>
            </View>
            <View style={styles.container_text}>
                <TextCenter title="Estado del Viaje" especial description={`${porcentaje}% completado`} />
                <TextCenter title="Fecha de Salida" description="17 de Abril del 2020" />
                <TextCenter title="Fecha de Llegada" description="24 de Abril del 2020" />
                <TextCenter title="Paraderos" description={`${paraderos_recorridos} / ${paraderos_maximos}`} />
            </View>
        </View>        
    }

}

export default BusGraphics;