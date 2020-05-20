import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import ProfileScreen from "../../../components/screens/Profile";

const Profile = createStackNavigator();

function ProfileStack(){
    return <Profile.Navigator screenOptions={{ headerShown : false }}>
        <Profile.Screen name="Profile" component={ProfileScreen} />
    </Profile.Navigator>
}

export default ProfileStack;