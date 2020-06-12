import React, { FC } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import styles from "./styles";

//Components
import HeaderMenu from "../../../templates/HeaderMenu";

//Interfaces
interface IProps {
    icon : JSX.Element,
    title : string,
    onPress() : void
}

const ErrorScreen : FC<IProps> = (props) : JSX.Element => {
    const { icon , title, onPress } = props;

    return <HeaderMenu title="Mapa de Viaje" >
        <View style={styles.container}>
            <View>{icon}</View>
            <View style={styles.container_message}>
                <Text style={styles.message}>{title}</Text>  
            </View>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.button}>
                    <Text style={styles.button_text}>Activar</Text>
                </View>
            </TouchableOpacity>
        </View>
    </HeaderMenu>
}

export default ErrorScreen;