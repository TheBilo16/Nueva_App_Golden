import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

//Components
import HomeStack from './Stacks/HomeStack';
import RutaStack from "./Stacks/RutaStack";
import ProfileStack from "./Stacks/ProfileStack";
import DrawerMenu from "../layers/DrawerMenu";
import AboutStack from "./Stacks/AboutStack"

const DN = createDrawerNavigator();

const AppStack : FC = () => {
    return <NavigationContainer>
        <DN.Navigator 
            initialRouteName="Home"
            drawerType="slide"
            keyboardDismissMode="none"
            drawerContent={ props => <DrawerMenu {...props} /> }
        >
            <DN.Screen name="Home" component={HomeStack} />
            <DN.Screen name="Routes" component={RutaStack} />
            <DN.Screen name="Profile" component={ProfileStack} />
            <DN.Screen name="About" component={AboutStack} />
        </DN.Navigator>
    </NavigationContainer>
}

export default AppStack;