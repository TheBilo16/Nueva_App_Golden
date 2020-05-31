import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

//Components
import HomeSelectedSeat from "../../screens/HomeSelectedSeat";
import TravelRoute from "../../screens/TravelRoute";
import Map from "../../screens/Map";
import UserProfile from "../../screens/UserProfile";
import About from "../../screens/About";

//Menu
import DrawerMenu from "../../layers/DrawerMenu";

const DN = createDrawerNavigator();

const SelectedSeatStack : FC = () => {
    return <NavigationContainer>
        <DN.Navigator 
            initialRouteName="Home"
            drawerType="slide"
            keyboardDismissMode="none"
            drawerContent={ props => <DrawerMenu {...props} /> }
        >
            <DN.Screen name="Home" component={HomeSelectedSeat} />
            <DN.Screen name="Routes" component={TravelRoute} />
            <DN.Screen name="Map" component={Map} />
            <DN.Screen name="Profile" component={UserProfile} />
            <DN.Screen name="About" component={About} />
        </DN.Navigator>
    </NavigationContainer>
}

export default SelectedSeatStack;