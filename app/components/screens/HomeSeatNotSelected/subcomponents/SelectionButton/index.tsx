import React , { FC, useState, useContext } from "react";
import { View , TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { SeatSelectionContext } from "../../../../context/SeatSelectionContext";

const SelectionButton : FC = (props) : JSX.Element => {
    const { onPressAccept , activateSendButton } = useContext(SeatSelectionContext);

    if(!activateSendButton){
        return <View style={[styles.bg_lock , styles.content_button]}>
            <Text style={[styles.color_lock , styles.text_button]}>Elegir Asiento</Text>
        </View>
    }

    return <TouchableOpacity onPress={onPressAccept}>
        <View style={[styles.bg , styles.content_button]}>
            <Text style={[styles.color , styles.text_button]}>Elegir Asiento</Text>
        </View>
    </TouchableOpacity>
}

export default SelectionButton;