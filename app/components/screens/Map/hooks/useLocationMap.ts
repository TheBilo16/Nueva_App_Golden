import { useState, useEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { requestPermissionsAsync, PermissionResponse } from "expo-location";
import { Region, LatLng } from "react-native-maps";

//Context
import { TravelContext } from "../../../context/TravelContext";

//Interfaces
import { IStateCoords, IMarkerData } from "../interfaces";

const useLocationMaps = () => {
    //Context
    const { busStopData , travelData } = useContext(TravelContext);
    
    //Hooks
    const navigation = useNavigation();

    //Variables
    const configPosition = { 
        enableHighAccuracy: true, 
        maximumAge: 1000 
    }
    
    //State
    const [ applicationPermits , setApplicationPermits ] = useState<boolean>(false);
    const [ locationPermits , setLocationPermits ] = useState<boolean>(true);
    const [ loadingCoords, setLoadingCoords ] = useState<boolean>(true);
    const [ coords , setCoords ] = useState<IStateCoords>();
    const [ markers , setMarkers ] = useState<IMarkerData[]>();
    const [ polyline , setPolyline ] = useState<LatLng[]>();
    
    //Events
    let geolocation : number;
    
    //Obtener Permisos
    const requestPermision = async () : Promise<void> => {
        try{
            const permission : PermissionResponse = await requestPermissionsAsync();

            if(permission.status === "granted") setApplicationPermits(true);
            else setApplicationPermits(false);
        }catch(e){
            console.log(e);
            setApplicationPermits(false);
        }
    }

    //Error al Obtener la Posicion
    const getPositionError = (err : PositionError) =>{ 
        setLocationPermits(false);
        setLoadingCoords(true);
    }

    //Obtener Posicion
    const getPosition = () => {
        geolocation = navigator.geolocation.watchPosition( (pos : Position) => {
            setLocationPermits(true);

            setCoords({
                latitude : pos.coords.latitude,
                longitude : pos.coords.longitude,        
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,   
            });

        },getPositionError,configPosition);
    }

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

            //Agregar Coordenadas del Destino
            const { name } = travelData!;
            mark.push({ name, coords : travelData?.coords , destiny : true });
            line.push({ latitude : travelData?.coords.U , longitude : travelData?.coords.k })
            
            const { latitude , longitude } = coords!;
        
            setMarkers(mark!);
            setPolyline([{ latitude , longitude }, ...line!]);
            setLoadingCoords(false);
        }
    }
  
    /**Effects**/

    // - PERMISOS / COORDENADAS
    useEffect(() => {
        requestPermision();  

        if(applicationPermits){
            getPosition();
            navigation.addListener("focus",getPosition);
            
            return () => {
                navigator.geolocation.clearWatch(geolocation);
                navigation.removeListener("focus",() => {});
            }         
        }
        
    }, [applicationPermits]);
    
    // - DATOS DE LOS PARADEROS
    useEffect(() => setMarkersData() ,[busStopData, coords]);

    return {
        loadingCoords,
        locationPermits,
        coords,
        markers,
        polyline,
        applicationPermits,
        requestPermision,
        getPosition
    }
}

export default useLocationMaps;