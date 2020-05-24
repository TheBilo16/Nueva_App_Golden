import React , { FC, useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation , StackActions } from '@react-navigation/native';
import styles from "./styles";

//Components
import TitleScreen from './subcomponents/TitleScreen';
import BusGraphics from './subcomponents/BusGraphics';
import ButtonNavigation from './subcomponents/ButtonNavigation';
import HeaderMenu from '../../layers/HeaderMenu';

//Extra
import { Utilies, Secondary } from '../../../config/colors';
import { IBus } from "./interfaces";

const Ruta : FC = () : JSX.Element => {
    const [ paraderosRecorridos, setParaderosRecorridos ] = useState<IBus>({
        paraderos_recorridos : 0,
        paraderos_maximos : 20
    });

    // DEBUG MODE
    // useEffect(() => {
    //     setTimeout(() => {
    //         setParaderosRecorridos({ 
    //             paraderos_recorridos : paraderosRecorridos.paraderos_recorridos + 1, 
    //             paraderos_maximos : 20 
    //         })
    //     },1000)
    // },[paraderosRecorridos])

    const navigation = useNavigation();

    const goToMaps = () => navigation.dispatch(StackActions.push("Map"));
    const goToRoutes = () => alert("...");

    return <HeaderMenu title="Ruta de Viaje">
        <View style={styles.container} >
            <ScrollView>
                <TitleScreen title="San Juan De Miraflores" bus="Bus Provincial N°2546" />
                <BusGraphics {...paraderosRecorridos} />
                <View style={styles.content_buttons}>
                    <View style={styles.container_buttons}>
                        <ButtonNavigation 
                            title="Ver Mapa" 
                            icon="location-on" 
                            color={Utilies.map_icon_path.a} 
                            action={goToMaps} 
                        />
                        <ButtonNavigation 
                            title="Ver Paraderos" 
                            icon="map" 
                            color={Secondary.text_link} 
                            action={goToRoutes}
                        />
                    </View>                
                </View>
            </ScrollView>
        </View>  
    </HeaderMenu>
}

export default Ruta;