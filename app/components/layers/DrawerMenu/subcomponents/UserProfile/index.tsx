import React, { FC } from "react";
import { View, Image, Text } from "react-native";
import faker from "faker";
import styles from "./styles";

//Image
const UserImage = require("../../../assets/usuario.png");

const UserProfile :FC = () : JSX.Element => {
    return <View style={styles.container_profile}>
        <View>
            <Image source={UserImage} style={styles.image} />            
        </View>
        <View style={styles.container_text}>
            <Text style={styles.text_user}>{`${faker.name.firstName()} ${faker.name.lastName()}`}</Text>
            <Text style={styles.text_date}>Lima / Callao</Text>
        </View>
    </View>
}

export default UserProfile;