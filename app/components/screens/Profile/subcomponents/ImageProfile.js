import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

//Extra
import UserDefault from "../../../assets/usuario.png";
import { Secondary } from "../../../config/colors";

const styles = StyleSheet.create({
    content_image : {
        paddingVertical : 35,
        alignItems : "center"
    },
    image : {
        width : 170,
        height : 170
    },
    name : {
        width : "60%",
        textAlign : "center",
        fontSize : 18,
        fontWeight : "bold",
        color: Secondary.text_dark,
        paddingTop : 35
    }
})

function ImageProfile({ username , image }){
    return <View style={styles.content_image}>
        <Image source={image} style={styles.image} />
        <Text style={styles.name}>{username}</Text>
    </View>
}

ImageProfile.defaultProps = {
    username : "Billy Alexander Paredes Aycho",
    image : UserDefault
}

export default ImageProfile;