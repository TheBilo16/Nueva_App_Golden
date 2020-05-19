import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import AboutScreen from "../../components/screens/About";

const About = createStackNavigator();

function AboutStack() : JSX.Element{
    return <About.Navigator screenOptions={{ headerShown : false }}>
        <About.Screen name="About" component={AboutScreen} />
    </About.Navigator>
}

export default AboutStack;