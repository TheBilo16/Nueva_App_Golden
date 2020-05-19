import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Utilies, Secondary } from "../../../config/colors";

//Extras

function ButtonNavigation({ title, color , icon , action }){
    const styles = StyleSheet.create({
        box_container : {
            alignItems : "center"
        },
        rounded_box : {
            width : 45,
            height : 45,
            borderRadius : 45 / 2,
            backgroundColor : color,
            justifyContent : "center",
            alignItems : "center"
        },
        text_title : {
            paddingTop : 5,
            fontWeight : "bold",
            fontSize : 13,
        }
    });

    return <TouchableOpacity style={styles.box_container} onPress={action}>
        <View style={styles.rounded_box}>
            <MaterialIcons name={icon} size={22} color="#fff" />                
        </View>
        <Text style={[styles.text_title,{ color }]}>{title}</Text>
    </TouchableOpacity>
}

ButtonNavigation.defaultProps = {
    title : "Default",
    color : Utilies.map_icon_path.a,
    icon : "map"
}

export default ButtonNavigation;