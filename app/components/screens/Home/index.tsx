import React, { FC } from "react";
import { View } from "react-native";

//Components
import Selection from "./subcomponents/SelectionScreen";
import DataViaje from "./subcomponents/MainScreen";
import useSelection from "./hooks/useSelection";

const Home : FC = () : JSX.Element => {
    const { loading , asientoSeleccionado } = useSelection();

    if(loading) return <View></View>

    if(!asientoSeleccionado) 
        return <Selection />
    else 
        return <DataViaje />
}

export default Home;