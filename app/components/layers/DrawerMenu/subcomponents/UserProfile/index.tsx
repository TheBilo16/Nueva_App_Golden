import React, { FC } from "react";
import { View, Image, Text, ImageSourcePropType } from "react-native";
import styles from "./styles";

//Image
const UserImage : ImageSourcePropType = require("../../../../../assets/usuario.png");

const UserProfile :FC = () : JSX.Element => {
    return <View style={styles.container_profile}>
        <View>
            <Image source={UserImage} style={styles.image} />            
        </View>
        <View style={styles.container_text}>
            <Text style={styles.text_user}>Billy Paredes Aycho</Text>
            <Text style={styles.text_date}>Lima / Callao</Text>
        </View>
    </View>
}

export default UserProfile;