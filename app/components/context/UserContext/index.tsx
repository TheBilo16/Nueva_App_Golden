import React, { createContext, FC, useContext, useState, useEffect } from "react";
import { auth, firestore } from "firebase";

//Interface
import IContext from "./interfaces";
import { IUserInformation } from "../../../interfaces/User";
import { TypeDocumentData } from "../../../config/types";
import { CLIENT } from "../../../config/Private/collections";

const UserContext = createContext<Partial<IContext>>({});

const UserProvider : FC = (props) : JSX.Element => {
    const [ userInformation , setUserInformation ] = useState<IUserInformation>();
    const [ seatSelected , setSeatSelected ] = useState<boolean>();
    const [ travelId, setTravelId ] = useState<string>();
    const [ travelDestiny , setTravelDestiny ] = useState<string>();

    const updateTravelId = (value : string) : void => setTravelId(value);
    const updateSeatSelected = (value : boolean) : void => setSeatSelected(value);
    const updateTravelDestiny = (value : string) : void => setTravelDestiny(value);

    //Obtener Datos del usuario
    const requestUserData = (client : TypeDocumentData) : void => setUserInformation(client.data());  

    useEffect(() => {
        if(seatSelected){
            const ref = firestore().collection(CLIENT);
            const key = auth().currentUser?.uid;
            const eventClient = ref.doc(key).onSnapshot(requestUserData,console.log);   
            
            return () => eventClient();
        }
    },[seatSelected])

    return <UserContext.Provider value={{ 
        userInformation,
        seatSelected,
        travelId, 
        travelDestiny,
        updateTravelId,
        updateSeatSelected,
        updateTravelDestiny
    }}>
        { props.children }
    </UserContext.Provider>
}

export {
    UserContext,
    UserProvider
}