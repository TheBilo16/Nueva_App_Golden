import 'react-native-gesture-handler';
import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Login from "../screens/Login";

const SN = createStackNavigator();

function LoginStack() : JSX.Element {
    return <NavigationContainer>
        <SN.Navigator initialRouteName="Login" headerMode="none" >
            <SN.Screen name="Login" component={Login} />
        </SN.Navigator>        
    </NavigationContainer>
}

export default LoginStack;