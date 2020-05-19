import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import HomeScreen from "../../components/screens/Home/DataViaje";
import HomeElection from "../../components/screens/Home/Selection";

const Home = createStackNavigator();

function HomeStack() : JSX.Element{
    return <Home.Navigator screenOptions={{ headerShown: false }} >
        <Home.Screen name="Selection" component={HomeElection} />
        <Home.Screen name="Home" component={HomeScreen} />
    </Home.Navigator>
}

export default HomeStack;