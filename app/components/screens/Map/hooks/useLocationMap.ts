import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { requestPermissionsAsync } from "expo-location";
import { Region } from "react-native-maps";

interface IStateCoords extends Region {
    latitude: number,
    longitude: number,
}

const useLocationMaps = () => {
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
    }, []);

    return {
        loadingCoords,
        coords
    }
}

export default useLocationMaps;