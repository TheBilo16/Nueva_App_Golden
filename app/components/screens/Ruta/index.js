import React , { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

//Extra
import TitleScreen from './subcomponents/TitleScreen';
import BusLength from './subcomponents/BusLength';
import ButtonNavigation from './subcomponents/ButtonNavigation';
import { Utilies, Secondary } from '../../config/colors';
import HeaderMenu from '../../Global/HeaderMenu';

const styles = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor : "#fff",
    },
    content_buttons : {
        width : "100%",
        paddingVertical : 30,
        alignItems : "center",
    },
    container_buttons : {
        width : "70%",
        flexDirection : "row",
        justifyContent : "space-around"
    }
})

class Ruta extends Component{
    constructor(props){
        super(props);
        this.state = {
            paraderos_recorridos : 0,
            paraderos_maximos : 20
        }
    }

    goToScreen = (screen, options = {} ) => this.props.navigation.navigate(screen,options);

    goToMaps = () => {
        this.goToScreen("Map", { screen : "data" });
    }

    goToRoutes = () => {
        this.goToScreen("Map", { screen : "routes" });
    }

    render(){
        return <HeaderMenu title="Ruta de Viaje">
            <View style={styles.container} >
                <ScrollView>
                    <TitleScreen />
                    <BusLength {...this.state} />
                    <View style={styles.content_buttons}>
                        <View style={styles.container_buttons}>
                            <ButtonNavigation 
                                title="Ver Mapa" 
                                icon="location-on" 
                                color={Utilies.map_icon_path.a} 
                                action={this.goToMaps} 
                            />
                            <ButtonNavigation 
                                title="Ver Paraderos" 
                                icon="map" 
                                color={Secondary.text_link} 
                                action={this.goToRoutes}
                            />
                        </View>                
                    </View>
                </ScrollView>
            </View>  
        </HeaderMenu>       
    }
}

export default Ruta;