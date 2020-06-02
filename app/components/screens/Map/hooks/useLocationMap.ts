import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { requestPermissionsAsync } from "expo-location";
import { Region } from "react-native-maps";

interface IStateCoords extends Region {
    latitude: number,
    longitude: number,
}

const useLocationMaps = () => {
    const navigation = useNavigation();
    const [ loadingCoords, setLoadingCoords ] = useState<boolean>(true);
    const [ coords , setCoords ] = useState<IStateCoords>();
    var mapLoop : any = null;

    const requestPermision = async () : Promise<void> => {
        try{
            await requestPermissionsAsync();
        }catch(e){
            console.log(e);
        }
    }

    useEffect(() => {
        requestPermision();
        mapLoop = navigator.geolocation.watchPosition(
            pos => {
                // console.log(pos.coords);
                setCoords({
                    latitude : pos.coords.latitude,
                    longitude : pos.coords.longitude,        
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421, 
                })

                if(loadingCoords){
                    setLoadingCoords(false);
                }
            },
            err => {
                navigation.goBack();
            },
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