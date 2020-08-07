import React, { useContext, FC } from "react";
import { View  } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";

//Components
import UserSection from "./subcomponents/UserSection";

//Utility
import { messageLogOut } from "../../../services/Utility";

//Context
import { UserContext } from "../../context/UserContext";

const DrawerMenu : FC<any> = (props) : JSX.Element =>{
    const { userInformation } = useContext(UserContext);

    return <View style={{ flex : 1 }}>
        <DrawerContentScrollView {...props} >
            <UserSection fullname={userInformation?.fullName!} image={userInformation?.profileImage.url!} city={userInformation?.city!} />
            <View style={styles.button}>
                <DrawerItem 
                    label="Inicio"
                    icon={({ color, size }) => <MaterialCommunityIcons name="home-outline" color={color} size={size} /> }
                    onPress={() => props.navigation.navigate("Home") }
                />                
            </View>
            <View style={styles.button}>
                <DrawerItem 
                    label="Paraderos"
                    icon={({ color, size }) => <MaterialCommunityIcons name="routes" color={color} size={size} /> }
                    onPress={() => props.navigation.navigate("Routes") }
                />                
            </View>
            <View style={styles.button}>
                <DrawerItem 
                    label="Mapa"
                    icon={({ color, size }) => <MaterialCommunityIcons name="map-outline" color={color} size={size} /> }
                    onPress={() => props.navigation.navigate("Map") }
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
                    label="Codigo QR"
                    icon={({ color, size }) => <MaterialCommunityIcons name="qrcode" color={color} size={size} /> }
                    onPress={() => props.navigation.navigate("QRCode") }
                />                
            </View>
        </DrawerContentScrollView>
        <View style={styles.button_fixed}>
            <DrawerItem 
                label="Cerrar Sesión"
                icon={({ color, size }) => <MaterialCommunityIcons name="logout" color={color} size={size} /> }
                onPress={messageLogOut}
            />              
        </View>
    </View>
}

export default DrawerMenu;