import React, { useContext, FC } from "react";
import { View , Alert } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";

//Components
import UserProfile from "./subcomponents/UserProfile";

//Extras
import { AccountContext } from "../../context/AccountContext";
import { MESSAGE_LOGOUT, MESSAGE_LOGOUT_OK, MESSAGE_LOGOUT_CANCEL } from "../../config/user";

const DrawerMenu : FC = (props : any) : JSX.Element =>{
    const { _clearAccountUser } = useContext(AccountContext);

    const logout_user = () => {
        Alert.alert("",MESSAGE_LOGOUT,[
            { text : MESSAGE_LOGOUT_OK, onPress : () => _clearAccountUser ? _clearAccountUser() : null},
            { text : MESSAGE_LOGOUT_CANCEL }
        ]);
    }

    return <View style={{ flex : 1 }}>
        <DrawerContentScrollView {...props} >
            <UserProfile />
            <View style={styles.button}>
                <DrawerItem 
                    label="Home"
                    icon={({ color, size }) => <MaterialCommunityIcons name="home-outline" color={color} size={size} /> }
                    onPress={() => props.navigation.navigate("Home") }
                />                
            </View>
            <View style={styles.button}>
                <DrawerItem 
                    label="Viaje"
                    icon={({ color, size }) => <MaterialCommunityIcons name="map-outline" color={color} size={size} /> }
                    onPress={() => props.navigation.navigate("Routes") }
                />                
            </View>
            <View style={styles.button}>
                <DrawerItem 
                    label="Perfil"
                    icon={({ color, size }) => <MaterialIcons name="person-outline" color={color} size={size} /> }
                    onPress={() => props.navigation.navigate("Profile") }
                />                
            </View>
            <View style={styles.button}>
                <DrawerItem 
                    label="Acerca de Nosotros"
                    icon={({ color, size }) => <MaterialCommunityIcons name="office-building" color={color} size={size} /> }
                    onPress={() => props.navigation.navigate("About") }
                />                
            </View>
        </DrawerContentScrollView>
        <View style={styles.button_fixed}>
            <DrawerItem 
                label="Log Out"
                icon={({ color, size }) => <MaterialCommunityIcons name="logout" color={color} size={size} /> }
                onPress={logout_user}
            />              
        </View>
    </View>
}

export default DrawerMenu;