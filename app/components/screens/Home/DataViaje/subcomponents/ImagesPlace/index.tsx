import React, { FC } from "react";
import { View, Text, ScrollView } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import styles from "./styles";

//Components
import ImageCustom from "../ImageCustom";

interface IProps {
    onPress : any
}

const ImagesPlace : FC<IProps> = (props) : JSX.Element => {
    const { onPress } = props;
    const images = Array(4).fill({ uri : "https://picsum.photos/300" });

    return <View style={styles.container_images}>
        <View style={styles.container_title}>
            <EvilIcons name="location" size={20} />
            <Text style={styles.title}>Fotos del Lugar</Text>
        </View>
        <ScrollView horizontal={true}>
            {images.map((e,i) => <ImageCustom key={i} image={e} onPress={onPress} />)}
        </ScrollView>
    </View>   
}

export default ImagesPlace;