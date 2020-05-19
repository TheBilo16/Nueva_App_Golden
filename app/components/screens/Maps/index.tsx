import React, { FC, useState, useEffect } from "react";
import MapView, { Region } from "react-native-maps";
import { View, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { requestPermissionsAsync } from "expo-location";
import styles from "./styles";

//Components
import HeaderMenu from "../../layers/HeaderMenu";

//Extra
import { Secondary } from "../../config/colors";
import MapCustom from "./config/MapCustom.json";

interface IStateCoords extends Region {
    latitude: number,
    longitude: number,
}

const AppMaps : FC = () : JSX.Element => {
    const { goBack } = useNavigation();
    const [ loadingCoords, setLoadingCoords ] = useState<boolean>(true);
    const [ coords , setCoords ] = useState<IStateCoords>({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,        
    });

    const requestPermision = async () : Promise<void> => {
        try{
            await requestPermissionsAsync();
        }catch(e){
            console.log(e);
            goBack();
        }
    }

    useEffect(() => {
        requestPermision();

        var mapLoop = navigator.geolocation.watchPosition(
            pos => {
                console.log(pos.coords);
                setCoords({
                    ...coords,
                    latitude : pos.coords.latitude,
                    longitude : pos.coords.longitude
                })
                if(loadingCoords) setLoadingCoords(false);
            },
            err => goBack(),
            { enableHighAccuracy: true, maximumAge: 1000 }
        )
        
        return () => {
            if(mapLoop) navigator.geolocation.clearWatch(mapLoop);
        }
    }, [])

    if(!loadingCoords){
        return <HeaderMenu title="Mapa de Viaje" iconBack >
            <View style={styles.container}>
                <MapView 
                    style={styles.map} 
                    region={coords}
                    showsUserLocation={true}
                    customMapStyle={MapCustom}
                />
            </View> 
        </HeaderMenu>
    }else{
        return <View style={styles.container}>
            <ActivityIndicator size={50} color={Secondary.text_link} />
        </View>
    }
}

export default AppMaps;