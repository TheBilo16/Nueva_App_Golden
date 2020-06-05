import React , { FC, useState } from "react";
import { View , TouchableOpacity, Text } from "react-native";
import styles from "./styles";

interface IProps {
    onPress() : void
}

const SelectionButton : FC<IProps> = (props) : JSX.Element => {
    const [ lock , setLock ] = useState<boolean>(true);
    const { onPress } = props;

    if(lock){
        return <View style={[styles.bg_lock , styles.content_button]}>
            <Text style={[styles.color_lock , styles.text_button]}>Elegir Asiento</Text>
        </View>
    }

    return <TouchableOpacity onPress={onPress}>
        <View style={[styles.bg , styles.content_button]}>
            <Text style={[styles.color , styles.text_button]}>Elegir Asiento</Text>
        </View>
    </TouchableOpacity>
}

export default SelectionButton;