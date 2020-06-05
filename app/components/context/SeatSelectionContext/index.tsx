import React , { createContext, FC, useState, useEffect, useContext } from "react";
import { firestore } from "firebase";

//Context
import { UserContext } from "../UserContext";

//Interfaces
import { IContextSeatData, IStateSeat } from "./interfaces";
import { TypeDocumentData } from "../../../config/types";
import { TRAVEL } from "../../../config/Private/collections";

const SeatSelectionContext = createContext<Partial<IContextSeatData>>({});

const SeatSelectionProvider : FC = (props) : JSX.Element => {
    //Context
    const { travelId } = useContext(UserContext);
    
    //States
    const [ loadingSeatInformation , setLoadingSeatInformation ] = useState<boolean>(true);
    const [ sendInformation , setSendInformation ] = useState<boolean>(false);
    const [ seatInformation , setSeatInformation ] = useState<IStateSeat>();

    //Al presionar en el boton de elegir
    const onPressAccept = async () : Promise<void> => {
        setSendInformation(true);
    }
    
    //Obtener los asientos si el usuario esta en un viaje
    const getSeatsTravel = (doc : TypeDocumentData) : void => {
        if(doc.exists){
            setSeatInformation({
                seatColumns : doc.data().seatColumns,
                seats : doc.data().seats
            })
            setLoadingSeatInformation(false);             
        }
    }

    useEffect(() => {
        if(travelId != ""){
            const ref = firestore().collection(TRAVEL);
            const eventTravel = ref.doc(travelId).onSnapshot(getSeatsTravel,console.log);

            return () => eventTravel();            
        }
    },[travelId]);

    return <SeatSelectionContext.Provider value={{
        seatInformation,
        sendInformation,
        loadingSeatInformation,
        onPressAccept
    }}>
        { props.children }
    </SeatSelectionContext.Provider>
}

export {
    SeatSelectionContext,
    SeatSelectionProvider
}