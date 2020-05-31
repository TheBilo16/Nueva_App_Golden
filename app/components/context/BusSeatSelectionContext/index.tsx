import React , { createContext, Component, FC, useState, useEffect, useContext } from "react";

//Context
import { DatabaseContext } from "../DatabaseContext";

//Interfaces
import { IContextSeatData } from "./interfaces";
import { ISeat } from "../../../interfaces/Travel";

const BusSeatSelectionContext = createContext<Partial<IContextSeatData>>({});

const BusSeatSelectionProvider : FC = (props) : JSX.Element => {
    const { database } = useContext(DatabaseContext);

    const [ loadingInformation , setLoadingInformation ] = useState<boolean>(false);
    const [ seatRows , setSeatRows ] = useState<ISeat[]>([]);
    const [ selectedSeat , setSelectedSeat ] = useState<boolean>(false);

    const updateSelectedSeat = (value : boolean) : void => {
        setSelectedSeat(value);
    }
    
    //Al presionar en el boton de elegir
    const onPressAccept = async () : Promise<void> => {
        setLoadingInformation(true);
        const id = database!.auth().currentUser?.uid;
        const ref = database!.firestore().collection("clients").doc(id)
        ref.update({ seatSelected : true })
            .catch(console.log)
    }
    
    //Obtener los asientos si el usuario esta en un viaje
    const getSeats = async () : Promise<void> => {
        try{
            const id = database?.auth().currentUser?.uid;
            const ref = database?.firestore().collection("travel");
            ref!.where("clients","array-contains",id).onSnapshot(data => {
                if(data.size > 0){
                    data.forEach(v => setSeatRows(v.data().seats))                    
                }
                //Si no lo encontro entonces no puede acceder a la aplicacion
                // else{
                //     database?.auth().signOut();
                // }
            })
        }catch(e){
            console.log(e);
        }
    }

    useEffect(() => {
        getSeats();
    },[])

    return <BusSeatSelectionContext.Provider value={{
        seatRows,
        selectedSeat,
        loadingInformation,
        updateSelectedSeat,
        onPressAccept
    }}>
        { props.children }
    </BusSeatSelectionContext.Provider>
}

export {
    BusSeatSelectionContext,
    BusSeatSelectionProvider
}