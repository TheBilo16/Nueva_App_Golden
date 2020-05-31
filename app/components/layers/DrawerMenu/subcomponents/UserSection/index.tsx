import React, { FC } from "react";
import { View, Image, Text, ImageSourcePropType } from "react-native";
import styles from "./styles";

interface IProps {
    image : string,
    fullname : string,
    city : string
}

const UserProfile : FC<IProps> = (props) : JSX.Element => {
    const { fullname, city, image } = props;

    return <View style={styles.container_profile}>
        <View>
            <Image source={{ uri : image }} style={styles.image} />            
        </View>
        <View style={styles.container_text}>
            <Text style={styles.text_user}>{fullname}</Text>
            <Text style={styles.text_date}>{city}</Text>
        </View>
    </View>
}

export default UserProfile;