import React , { createContext, Component, FC, useState, useEffect, useContext } from "react";

//Context
import { DatabaseContext } from "../DatabaseContext";

//Extras
import { IContextSeatData } from "./interfaces";
import { ISeat } from "../../../interfaces/Travel";
import { UserContext } from "../UserContext";
import { AsyncStorage } from "react-native";
import { KEY_USER_ID } from "../../../config/system";

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
    const onPressAccept = () : void => {
        setLoadingInformation(true);
        AsyncStorage.getItem(KEY_USER_ID)
            .then(key => {
                database.firestore().collection("clients").doc(key).update({ seatSelected : true })
            })
            .catch(console.log)
    }

    useEffect(() => {
        //Traer asientos respecto al bus... (En proceso...)
        database!.firestore().collection("designSeat").doc("j0elH4BKgouq8VaE5CjM").onSnapshot(doc => {
            setSeatRows(doc.data().seats);
        })
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