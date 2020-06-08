import { useState, useEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { requestPermissionsAsync } from "expo-location";
import { Region, LatLng } from "react-native-maps";

//Context
import { TravelContext } from "../../../context/TravelContext";

//Interfaces
interface IStateCoords extends Region {
    latitude: number,
    longitude: number,
}

interface IMarkerData {
    name : string,
    coords : LatLng
}

const useLocationMaps = () => {
    //Context
    const { busStopData } = useContext(TravelContext);
    
    //Hooks
    const navigation = useNavigation();
    
    //State
    // const [ permision , setPermision ] = useState<boolean>(false);
    const [ loadingCoords, setLoadingCoords ] = useState<boolean>(true);
    const [ coords , setCoords ] = useState<IStateCoords>();
    const [ markers , setMarkers ] = useState<IMarkerData[]>();
    const [ polyline , setPolyline ] = useState<LatLng[]>();
    
    //Events
    let geolocation : number;
    
    //Obtener Permisos
    const requestPermision = async () : Promise<void> => {
        try{
            await requestPermissionsAsync();
        }catch(e){
            console.log(e);
        }
    }

    //Obtener Posicion
    const getPosition = (pos : Position) => {
        // console.log(pos.coords);
        setCoords({
            latitude : pos.coords.latitude,
            longitude : pos.coords.longitude,        
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421, 
        })
    }

    //Error al Obtener la Posicion
    const getPositionError = (err : PositionError) => navigation.goBack()

    //Obtener las coordenadas de las rutas
    const setMarkersData = () => {
        if(busStopData && coords){
            let mark : IMarkerData[] = [];
            let line : LatLng[] = [];
        
            busStopData.forEach(v => {
                const { name , coords } = v;
                const { U , k } = coords;
  
                mark.push({ 
                    name, 
                    coords : { latitude : U, longitude : k }
                });
                
                line.push({ latitude : U, longitude : k });
            });
            
            const { latitude , longitude } = coords!;
        
            setMarkers(mark!);
            setPolyline([{ latitude , longitude }, ...line!]);
            setLoadingCoords(false);
        }
    }
  
    useEffect(() => {
        requestPermision();

        navigation.addListener("focus", () => {
            const configPosition = { enableHighAccuracy: true, maximumAge: 1000 }
            geolocation = navigator.geolocation.watchPosition(getPosition, getPositionError,configPosition);        
        })
        
        return () => {
            navigator.geolocation.clearWatch(geolocation!);
            navigation.removeListener("focus",() => {});
        }
    }, []);
    
    useEffect(() => setMarkersData() ,[busStopData, coords]);

    return {
        loadingCoords,
        coords,
        markers,
        polyline
    }
}

export default useLocationMaps;