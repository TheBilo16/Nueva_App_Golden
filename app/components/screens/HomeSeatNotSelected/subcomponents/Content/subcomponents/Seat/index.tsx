import React, { FC, useState, useContext } from "react";
import { View , Image , ImageSourcePropType, TouchableOpacity, Text } from "react-native";
import styles from "./styles";

//Context
import { BusSeatSelectionContext } from "../../../../../../context/BusSeatSelectionContext";

//Images
const AvailableSeat : ImageSourcePropType = require("../../../../../../../assets/icons/asientoLibre.png");
const NotAvailableSeat : ImageSourcePropType = require("../../../../../../../assets/icons/asientoOcupado.png");

interface IProps {
    name : string,
    hide? : boolean,
    available? : boolean
}

const Seat : FC<IProps> = (props) : JSX.Element => {
    const [ selected , setSelected ] = useState<boolean>(false);
    const { selectedSeat , updateSelectedSeat } = useContext(BusSeatSelectionContext);
    const { available, name, hide } = props;

    const onPress = () => {
        // if(!selectedSeat){
        //     setSelected(true);
        //     updateSelectedSeat!(true);
        // }
    }

    if(hide){
        return <View style={styles.divPress}>
        </View>
    }
    
    return <TouchableOpacity onPress={onPress}>
        {
            available ? 
                <View style={[styles.divPress, styles.borderDiv]}>
                    <Text>{ name }</Text>
                </View> :
                <View style={[styles.divPress, styles.lock]}>
                    <Text style={styles.text_lock}>{ name }</Text>
                </View>
        }
        {
            selected ?
                <View style={styles.eleccion}>
                    <View style={styles.symbol}></View>
                </View> :
                null
        } 
    </TouchableOpacity>
}

export default Seat;