import React , { createContext, FC, useState, useEffect, useContext } from "react";
import { firestore, auth } from "firebase";

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
    const [ seatNumber , setSeatNumber ] = useState<number>(-1);
    const [ activateSendButton , setActivateSendButton ] = useState<boolean>(false);
    const [ loadingSeatInformation , setLoadingSeatInformation ] = useState<boolean>(true);
    const [ sendInformation , setSendInformation ] = useState<boolean>(false);
    const [ seatInformation , setSeatInformation ] = useState<IStateSeat>();

    //Elegir Asiento
    const updateSeatNumber = (id : number) : void => {
        setSeatNumber(id);
        setActivateSendButton(true);
    }

    //Al presionar en el boton de elegir
    const onPressAccept = async () : Promise<void> => {
        setSendInformation(true);

        if(!seatInformation?.seats[seatNumber].client){
            var seatInformationCopy = seatInformation?.seats;
            seatInformationCopy![seatNumber].client = auth().currentUser?.uid!;

            const ref = firestore().collection(TRAVEL).doc(travelId);
            try{
                await ref.update({ seats : seatInformationCopy });
            }catch(e){
                console.log(e);
            }      
        }else{
            setSeatNumber(-1);
            setActivateSendButton(false);
            alert("Alguien mas ya esta ocupando este asiento.")
        }
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
        if(travelId){
            const ref = firestore().collection(TRAVEL);
            const eventTravel = ref.doc(travelId).onSnapshot(getSeatsTravel,console.log);

            return () => eventTravel();            
        }
    },[travelId]);

    return <SeatSelectionContext.Provider value={{
        seatNumber,
        activateSendButton,
        seatInformation,
        sendInformation,
        loadingSeatInformation,
        onPressAccept,
        updateSeatNumber
    }}>
        { props.children }
    </SeatSelectionContext.Provider>
}

export {
    SeatSelectionContext,
    SeatSelectionProvider
}