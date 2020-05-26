import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { DotIndicator } from "react-native-indicators";

//Context
import { AccountContext } from './context/AccountContext';
import { UserProvider } from './context/UserContext';
import { TravelProvider } from './context/TravelContext';

//Stacks Navigators
import LoginStack from "./routes/LoginStack";
import AppStack from "./routes/AppStack";

//Extras
import { Secondary } from '../config/colors';

const styles = StyleSheet.create({
    loading_screen : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center"
    }
});

const Main = () : JSX.Element => {
    const { isLoading, isLogged } = useContext(AccountContext);

    if(!isLoading){
        if(isLogged){
            return <UserProvider>
                <TravelProvider>
                    <AppStack />
                </TravelProvider>
            </UserProvider>
        }else 
            return <LoginStack />     
    }else{
        return <DotIndicator color={Secondary.text_link} />
    }
}

export { Main };