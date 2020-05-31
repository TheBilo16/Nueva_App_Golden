import React, { FC } from "react";
import { View, Image, Text, ImageSourcePropType } from "react-native";
import styles from "./styles";

//Images

interface IProps {
    username : string,
    image : string,
    city : string
}

const ImageProfile : FC<IProps> = (props) : JSX.Element =>{
    const { username , image, city } = props;

    return <View style={styles.content_profile_head}>
        <View style={styles.container_image}>
            <Image source={{ uri : image }} style={styles.image} />
        </View>
        <View style={styles.name}>
            <Text style={[styles.text, styles.fullname]}>{username}</Text>
            <Text style={[styles.text, styles.city]}>{city}</Text>
        </View>
    </View>
}

export default ImageProfile;