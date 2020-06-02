import React , { createContext, FC, useState, useEffect } from "react";
import { auth, firestore } from "firebase";

//Interfaces
import { IContextSeatData } from "./interfaces";
import { ISeat } from "../../../interfaces/Travel";

const SeatSelectionContext = createContext<Partial<IContextSeatData>>({});

const SeatSelectionProvider : FC = (props) : JSX.Element => {
    const [ loadingInformation , setLoadingInformation ] = useState<boolean>(false);
    const [ seatRows , setSeatRows ] = useState<ISeat[]>([]);
    const [ selectedSeat , setSelectedSeat ] = useState<boolean>(false);

    //Event
    var eventSeat : any = null;

    const updateSelectedSeat = (value : boolean) : void => {
        setSelectedSeat(value);
    }
    
    //Al presionar en el boton de elegir
    const onPressAccept = async (seatId : number) : Promise<void> => {
        setLoadingInformation(true);

        try{
            const id = auth().currentUser?.uid;
            const ref = firestore().collection("clients").doc(id);
            await ref.update({ seatSelected : true });
        }catch(e){
            console.log(e);
        }
    }
    
    //Obtener los asientos si el usuario esta en un viaje
    const getSeatsTravel = async () : Promise<void> => {
        try{
            const id = auth().currentUser?.uid;
            const ref = firestore().collection("travel");
            eventSeat = ref!.where("clients","array-contains",id).onSnapshot(data => {
                if(data.size > 0){
                    data.forEach(v => setSeatRows(v.data().seats))                  
                }
            });
        }catch(e){
            console.log(e);
        }
    }

    useEffect(() => {
        getSeatsTravel();

        return eventSeat ? eventSeat : () => {};
    },[])

    return <SeatSelectionContext.Provider value={{
        seatRows,
        selectedSeat,
        loadingInformation,
        updateSelectedSeat,
        onPressAccept
    }}>
        { props.children }
    </SeatSelectionContext.Provider>
}

export {
    SeatSelectionContext,
    SeatSelectionProvider
}