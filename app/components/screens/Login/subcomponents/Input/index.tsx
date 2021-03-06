import React, { FC } from "react";
import { View, Text, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";

//Extra
import { Secondary } from "../../../../../config/colors";

interface IProps {
    title : string,
    icon : string,
    securityPassword? : boolean,
    onChangeText(ev : string) : void
}

const Input : FC<IProps> = (props) : JSX.Element => {
    const { title, icon, securityPassword, onChangeText } = props;

    return <View style={styles.container}>
        <View style={styles.title}>
            <Text style={styles.title_text}>{title}</Text>
        </View>
        <View style={styles.input}>
            <TextInput 
                style={styles.input_text} 
                secureTextEntry={securityPassword}
                onChangeText={(ev : string) => onChangeText(ev)}
            />
            <View style={styles.input_icon}>
                <MaterialIcons name={icon} color={Secondary.text_dark} size={20} />                
            </View>
        </View>
    </View>
}

export default React.memo(Input);