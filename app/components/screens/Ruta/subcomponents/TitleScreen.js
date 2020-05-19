import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Secondary } from "../../../config/colors";

//Extras
const padding = 25;
const styles = StyleSheet.create({
    container : {
        width : "100%",
        alignItems : "center",
        paddingVertical : padding
    },
    title : {
        fontSize : 22,
        fontWeight : "bold",
        textTransform : "uppercase",
        color: Secondary.text_dark
    },
    text_bus : {
        fontSize : 12,
        paddingTop : 4,
        color: Secondary.text_light
    },
    icon : {
        paddingTop : 20
    }
});

function TitleScreen({ title, bus }){
    return <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text_bus}>{bus}</Text>
        <View style={styles.icon}>
            <MaterialCommunityIcons size={68} name="map-legend" color={Secondary.text_dark} />            
        </View>
    </View>
}

TitleScreen.defaultProps = {
    title : "San Juan De Miraflores",
    bus : "Bus Provincial N°2546"
}

export default TitleScreen;