import React, { FC } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";

interface IProps {
    title : string,
    ghost? : boolean,
    onPress() : void,
}

const ActionButton : FC<IProps> = (props) : JSX.Element => {
    const { title , onPress, ghost } = props;
    
    return <TouchableOpacity style={styles.button_touch} onPress={onPress}>
        <View style={[ styles.button_base , ghost ? styles.button_ghost : styles.button ]}>
            <Text style={[ styles.text_base , ghost ? styles.button_text_ghost : styles.button_text_normal ]}>{title}</Text>
        </View>
    </TouchableOpacity>
}

export default ActionButton;