import React , { useState, FC } from "react";
import { View, Image, ActivityIndicator, ImageSourcePropType, TouchableOpacity } from "react-native";
import styles from "./styles";

//Extra
import { Secondary } from "../../../../../config/colors";

interface IProps {
    image : ImageSourcePropType,
    onPress : any
}

const ImageCustom : FC<IProps> = (props) =>{
    const { image, onPress } = props;
    const [ loading , setLoading ] = useState<boolean>(true);

    return <View style={styles.image_content}>
        <TouchableOpacity onPress={() => onPress(image) }>
            <Image 
                style={styles.image} 
                source={image} 
                onLoad={() => setLoading(false)}
            />            
        </TouchableOpacity>
        <View style={styles.icon}>
            <ActivityIndicator size="large" color={Secondary.text_link} animating={loading} />                    
        </View>
    </View>
}

export default ImageCustom;