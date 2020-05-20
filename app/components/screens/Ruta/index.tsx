import React , { FC, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from "./styles";

//Components
import TitleScreen from './subcomponents/TitleScreen';
import BusLength from './subcomponents/BusGraphics';
import ButtonNavigation from './subcomponents/ButtonNavigation';
import HeaderMenu from '../../layers/HeaderMenu';

//Extra
import { Utilies, Secondary } from '../../config/colors';
import { IBus } from "./interfaces";

const Ruta : FC = (props) : JSX.Element => {
    const [ paraderosRecorridos, setParaderosRecorridos ] = useState<IBus>({
        paraderos_recorridos : 0,
        paraderos_maximos : 20
    });
    const navigation = useNavigation();

    const goToMaps = () => navigation.navigate("Maps");
    const goToRoutes = () => alert("...");

    return <HeaderMenu title="Ruta de Viaje">
        <View style={styles.container} >
            <ScrollView>
                <TitleScreen />
                <BusLength {...paraderosRecorridos} />
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