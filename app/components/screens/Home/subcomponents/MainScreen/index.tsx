import React , { FC, Fragment } from "react";
import { View } from "react-native";
import ActionsButtonFooter from "../../../../layers/ActionsButtonFooter";
import { useNavigation } from "@react-navigation/native";

const MainScreen : FC = () : JSX.Element => {
    const navigation = useNavigation();

    const onPressButton = () : void => navigation.navigate("Routes");
    const onPressMainButton = () : void => navigation.navigate("Map");

    return <View style={{ flex : 1, backgroundColor : "#fff" }}>
        <View style={{ flex : 1 }}>

        </View>
        <ActionsButtonFooter
            titleButton="Ver Rutas"
            titleMainButton="Ver Mapa"
            onPressButton={onPressButton} 
            onPressMainButton={onPressMainButton} 
        />
    </View>
}

export default MainScreen;