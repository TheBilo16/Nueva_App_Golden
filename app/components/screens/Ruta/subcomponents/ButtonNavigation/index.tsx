import React, { FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";

//Extras
import { Utilies } from "../../../../config/colors";

interface IProps {
    title : string,
    icon : string,
    color : string,
    action() : void
}

const ButtonNavigation : FC<IProps> = (props) : JSX.Element => {
    const { title , icon , color, action } = props;

    return <TouchableOpacity style={styles.box_container} onPress={action}>
        <View style={[styles.rounded_box,{ backgroundColor : color }]}>
            <MaterialIcons name={icon} size={22} color="#fff" />                
        </View>
        <Text style={[styles.text_title,{ color }]}>{title}</Text>
    </TouchableOpacity>
}

ButtonNavigation.defaultProps = {
    title : "Default",
    color : Utilies.map_icon_path.a,
    icon : "map"
}

export default ButtonNavigation;