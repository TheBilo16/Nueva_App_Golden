import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

//Components
import Home from "../screens/Home";
import TravelRoute from "../screens/TravelRoute";
import Map from "../screens/Map";

//Stacks
import ProfileStack from "./Stacks/ProfileStack";
import DrawerMenu from "../layers/DrawerMenu";
import About from "../screens/About";

const DN = createDrawerNavigator();

const AppStack : FC = () => {
    return <NavigationContainer>
        <DN.Navigator 
            initialRouteName="Home"
            drawerType="slide"
            keyboardDismissMode="none"
            drawerContent={ props => <DrawerMenu {...props} /> }
        >
            <DN.Screen name="Home" component={Home} />
            <DN.Screen name="Routes" component={TravelRoute} />
            <DN.Screen name="Map" component={Map} />
            <DN.Screen name="Profile" component={ProfileStack} />
            <DN.Screen name="About" component={About} />
        </DN.Navigator>
    </NavigationContainer>
}

export default AppStack;