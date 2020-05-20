import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import RutaScreen from "../../screens/Ruta";
import MapsScreen from "../../screens/Maps";

const Ruta = createStackNavigator();

function RutaStack() : JSX.Element{
    return <Ruta.Navigator screenOptions={{ headerShown : false }} >
        <Ruta.Screen name="Inicio" component={RutaScreen} />
        <Ruta.Screen name="Map" component={MapsScreen} />
    </Ruta.Navigator>
}

export default RutaStack;