import React, { FC } from "react";
import { View, Image, Text, ImageSourcePropType } from "react-native";
import styles from "./styles";

//Images

interface IProps {
    username : string,
    image : ImageSourcePropType
}

const ImageProfile : FC<IProps> = (props) : JSX.Element =>{
    const { username , image } = props;

    return <View style={styles.content_image}>
        <Image source={image} style={styles.image} />
        <Text style={styles.name}>{username}</Text>
    </View>
}

export default ImageProfile;