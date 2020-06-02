import React, { FC, useState, useEffect, useContext } from "react";
import { ActivityIndicator, View } from "react-native";
import { auth, firestore } from "firebase";

//Componentes
import SeatNotSelectedStack from "./Stacks/SeatNotSelectedStack";
import SelectedSeatStack from "./Stacks/SelectedSeatStack";
import { SeatSelectionProvider } from "../context/SeatSelectionContext";

//Context
import { UserContext } from "../context/UserContext";

//Extra
import { Secondary } from "../../config/colors";
import { TypeDocumentSnapshot } from "../../config/types";
import { TravelProvider } from "../context/TravelContext";

const Auth : FC = () : JSX.Element => {
    //Context
    const { updateUserInformation } = useContext(UserContext);

    //State
    const [ seatSelected, setSeatSelected ] = useState<boolean>(false);
    const [ isLoadingUserInformation , setLoadingUserInformation ] = useState<boolean>(true);

    //Verificar si el Asiento esta Seleccionado
    const checkSeatSelected = async () : Promise<void> => {
        try{
            const key = auth().currentUser?.uid;
            const ref = firestore().collection("clients").doc(key);
            ref.onSnapshot((doc : TypeDocumentSnapshot) => {
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
        return <SeatSelectionProvider>
            <SeatNotSelectedStack />
        </SeatSelectionProvider>
    }else{
        return <TravelProvider>
            <SelectedSeatStack />
        </TravelProvider>
    }
}

export default Auth;