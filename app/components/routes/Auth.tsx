import React, { FC, useState, useEffect, Fragment, useContext } from "react";
import { AsyncStorage, ActivityIndicator, View } from "react-native";

//Componentes
import SeatNotSelectedStack from "./Stacks/SeatNotSelectedStack";
import SelectedSeatStack from "./Stacks/SelectedSeatStack";
import { BusSeatSelectionProvider } from "../context/BusSeatSelectionContext";

//Extra
import { KEY_USER_ID } from "../../config/system";
import { DatabaseContext } from "../context/DatabaseContext";
import { UserContext } from "../context/UserContext";
import { IUserInformation } from "../../interfaces/User";
import { Secondary } from "../../config/colors";

const Auth : FC = () : JSX.Element => {
    const { database } = useContext(DatabaseContext);
    const { updateUserInformation, userInformation } = useContext(UserContext);
    const [ seatIsSelected, setSeatIsSelected ] = useState<boolean>(false);
    const [ isLoading , setLoading ] = useState<boolean>(true);

    const checkSeatSelected = async () : Promise<void> => {
        try{
            const key = await AsyncStorage.getItem(KEY_USER_ID);
            console.log(key);
            const ref = database!.firestore().collection("clients").doc(key);
            ref.onSnapshot(doc => {
                if(doc.exists){
                    let information : IUserInformation = doc.data();
                    updateUserInformation!(information);
                    setSeatIsSelected(information.seatSelected);
                }

                setLoading(false);
            });
            
            
            // const client = await ref.get();
            // if(client.exists){
            //     let information : IUserInformation = client.data();
            //     updateUserInformation!(information);
            //     setSeatIsSelected(information.seatSelected);
            // }
            // setLoading(false);
        }catch(e){
            console.log(e);
        }
    }

    useEffect(() => {
        checkSeatSelected();
    },[]);

    if(isLoading){
        return <View style={{ flex : 1, justifyContent : "center", alignItems : "center" }}>
            <ActivityIndicator color={Secondary.text_dark} size={40} />
        </View>
    }

    if(!seatIsSelected){
        return <BusSeatSelectionProvider>
            <SeatNotSelectedStack />
        </BusSeatSelectionProvider>
    }else{
        return <SelectedSeatStack />
    }
}

export default Auth;