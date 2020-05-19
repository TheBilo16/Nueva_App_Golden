import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Secondary } from "../../../config/colors";

const styles = StyleSheet.create({
    input_content : {
        width : "80%"
    },
    title_content : {
        flexDirection : "row",
        alignItems : "center"
    },
    title : {
        color : Secondary.text_dark,
        fontWeight : "bold",
        paddingLeft : 5
    },
    input : {
        width : "100%",
        height : 40,
        borderBottomColor : Secondary.borders,
        borderBottomWidth : 1,
        paddingHorizontal : 5,
        color : Secondary.text_light
    }
})

function InputProfile({ title , icon, defaultValue, margin, security }){
    const m = {
        marginBottom : margin ? 20 : 0
    }

    return <View style={[styles.input_content,m]}>
        <View style={styles.title_content}>
            <MaterialCommunityIcons name={icon}  color={Secondary.text_dark} size={14} />
            <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.container_input}>
            <TextInput
                style={styles.input} 
                defaultValue={defaultValue}
                secureTextEntry={security}
            />
        </View>
    </View>
}

InputProfile.defaultProps = {
    margin : true
}

export default InputProfile;