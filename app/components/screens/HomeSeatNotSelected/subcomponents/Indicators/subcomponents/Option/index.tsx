import React , { FC } from "react";
import { View, Text } from "react-native";
import styles from "./styles";

interface IProps {
    type : number,
    text : string
}

const Option : FC<IProps> = (props) : JSX.Element => {
    const { text , type } = props;
    var style = {};

    switch(type){
        case 0:
            style = styles.type_0;
            break;
        case 1:
            style = styles.type_1;
            break;
        case 2:
            style = styles.type_2;
            break;
    }

    return <View style={styles.card}>
        <View style={[styles.box, style]}></View>
        <Text style={styles.text}>{text}</Text>
    </View>
}

export default Option