import React, { FC, useState, useEffect, Fragment, useContext } from "react";
import { AsyncStorage, ActivityIndicator, View } from "react-native";

//Componentes
import SeatNotSelectedStack from "./Stacks/SeatNotSelectedStack";
import SelectedSeatStack from "./Stacks/SelectedSeatStack";
import { BusSeatSelectionProvider } from "../context/BusSeatSelectionContext";

//Context
import { DatabaseContext } from "../context/DatabaseContext";
import { UserContext } from "../context/UserContext";

//Extra
import { Secondary } from "../../config/colors";
import {TypeDocumentSnapshopt, TypeDocumentData} from "../../config/types";

const Auth : FC = () : JSX.Element => {
    //Context
    const { database } = useContext(DatabaseContext);
    const { updateUserInformation } = useContext(UserContext);

    //State
    const [ seatSelected, setSeatSelected ] = useState<boolean>(false);
    const [ isLoadingUserInformation , setLoadingUserInformation ] = useState<boolean>(true);

    //Verificar si el Asiento esta Seleccionado
    const checkSeatSelected = async () : Promise<void> => {
        try{
            const key = database!.auth().currentUser?.uid;
            const ref = database!.firestore().collection("clients").doc(key);
            ref.onSnapshot((doc : TypeDocumentSnapshopt) => {
                if(doc.exists){
                    let information : any = doc.data()!;
                    updateUserInformation!(information);
                    setSeatSelected(information.seatSelected);
                }
                setLoadingUserInformation(false);
            });                
        }catch(e){
            console.log(e);
        }
    }

    useEffect(() => {
        checkSeatSelected();
    },[]);

    if(isLoadingUserInformation){
        return <View style={{ flex : 1, justifyContent : "center", alignItems : "center" }}>
            <ActivityIndicator color={Secondary.text_dark} size={40} />
        </View>
    }

    if(!seatSelected){
        return <BusSeatSelectionProvider>
            <SeatNotSelectedStack />
        </BusSeatSelectionProvider>
    }else{
        return <SelectedSeatStack />
    }
}

export default Auth;