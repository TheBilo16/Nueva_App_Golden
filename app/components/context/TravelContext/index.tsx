import React , { createContext, FC, useEffect, useState, useContext } from "react";
import { firestore } from "firebase";

//Interfaces
import { ITravelData, IBusStopData, IBusDateTimeData } from "../../../interfaces/Travel";
import { TypeDocumentData } from "../../../config/types";
import { UserContext } from "../UserContext";
import { TRAVEL, LOCATION } from "../../../config/Private/collections";

interface IContext {
    loadingTravelData : boolean,
    travelData : ITravelData,
    busDateTime : IBusDateTimeData,
    busStopData : IBusStopData[]
}

const TravelContext = createContext<Partial<IContext>>({});

const TravelProvider : FC = (props) : JSX.Element => {
    //Context
    const { travelId , travelDestiny } = useContext(UserContext);

    //State
    const [ loadingTravelData , setLoadingTravelData ] = useState<boolean>(true);
    const [ travelData , setTravelData ] = useState<ITravelData>();
    const [ busStopData , setBusStopData ] = useState<IBusStopData[]>();
    const [ busDateTime , setBusDateTime ] = useState<IBusDateTimeData>();

    //Obtener Datos del Viaje(Fechas / Paradas)
    const requestTravelData = (travel : TypeDocumentData) : void => {
        if(travel.exists){
            setBusStopData(travel.data().busStop);
            setBusDateTime({
                departureDate : travel.data().departureDate,
                arrivalDate : travel.data().arrivalDate
            });  
        }
    }

    //Obtener los datos del lugar destino
    const requestLocationDestiny = (location : TypeDocumentData) : void => {
        if(location.exists){
            setTravelData(location.data());
            setLoadingTravelData(false);
        }
    }

    useEffect(() => {
        if(travelId && travelDestiny){
            const refTravel = firestore().collection(TRAVEL);
            const refLocation = firestore().collection(LOCATION);

            const eventTravel = refTravel.doc(travelId).onSnapshot(requestTravelData);
            const eventLocation = refLocation.doc(travelDestiny).onSnapshot(requestLocationDestiny);

            return () => {  
                eventLocation();
                eventTravel();
            };            
        }
    },[travelId, travelDestiny])

    return <TravelContext.Provider value={{ travelData , loadingTravelData, busStopData, busDateTime }}>
        { props.children }
    </TravelContext.Provider>
}

export {
    TravelProvider,
    TravelContext
}