import React, { FC } from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";

//Extra
import { Secondary } from "../../../../../config/colors";

interface IProps {
    title : string,
    bus : string
}

const TitleScreen : FC<IProps> = (props) : JSX.Element => {
    const { title, bus } = props;

    return <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text_bus}>{bus}</Text>
        <View style={styles.icon}>
            <MaterialCommunityIcons size={68} name="map-legend" color={Secondary.text_dark} />            
        </View>
    </View>
}

export default TitleScreen;