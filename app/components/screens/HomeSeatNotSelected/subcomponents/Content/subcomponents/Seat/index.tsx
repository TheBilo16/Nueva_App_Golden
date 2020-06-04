import React, { FC, useState, useContext } from "react";
import { View , Image , ImageSourcePropType, TouchableOpacity, Text } from "react-native";
import styles from "./styles";

//Context
import { SeatSelectionContext } from "../../../../../../context/SeatSelectionContext";

//Images
const AvailableSeat : ImageSourcePropType = require("../../../../../../../assets/icons/check.png");

interface IProps {
    id? : number,
    name? : string,
    hide? : boolean,
    available? : boolean
}

const Seat : FC<IProps> = (props) : JSX.Element => {
    const { available, name, hide } = props;

    const onPress = () => {
    }

    if(hide) return <View style={styles.divPress}></View>
    
    return <>      
        {
            available ? 
                <TouchableOpacity onPress={onPress}>
                    <View style={[styles.divPress, styles.borderDiv]}>
                        <Text>{ name }</Text>
                    </View> 
                </TouchableOpacity> :
                <View style={[styles.divPress, styles.lock]}>
                    <Text style={styles.text_lock}>{ name }</Text>
                </View>
        }
    </>
}

export default Seat;