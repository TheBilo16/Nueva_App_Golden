import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeSeatNotSelected from "../../screens/HomeSeatNotSelected";

const Stack = createStackNavigator();

const SeatNotSelectedStack : FC = () : JSX.Element => {
    return <NavigationContainer>
        <Stack.Navigator headerMode="none" >
            <Stack.Screen name="Home" component={HomeSeatNotSelected} />
        </Stack.Navigator>
    </NavigationContainer>
}

export default SeatNotSelectedStack;