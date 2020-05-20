// import 'react-native-gesture-handler';
import React, { useContext } from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";

//Context
import { AccountContext } from './context/AccountContext';
import { UserProvider } from './context/UserContext';
import { ViajeProvider } from './context/ViajeContext';

//Stacks Navigators
import LoginStack from "./routes/LoginStack";
import AppStack from "./routes/AppStack";

//Extras
import { Secondary } from './config/colors';

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
                <ViajeProvider>
                    <AppStack />
                </ViajeProvider>
            </UserProvider>
        }else 
            return <LoginStack />     
    }else{
        return <View style={styles.loading_screen}>
            <ActivityIndicator size={60} color={Secondary.text_link}  />
        </View>
    }
}

export { Main };