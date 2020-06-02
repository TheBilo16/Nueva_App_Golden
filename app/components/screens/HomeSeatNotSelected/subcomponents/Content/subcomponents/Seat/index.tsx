import React, { FC, useState, useContext } from "react";
import { View , Image , ImageSourcePropType, TouchableOpacity, Text } from "react-native";
import styles from "./styles";

//Context
import { SeatSelectionContext } from "../../../../../../context/SeatSelectionContext";

//Images
const AvailableSeat : ImageSourcePropType = require("../../../../../../../assets/icons/check.png");
// const NotAvailableSeat : ImageSourcePropType = require("../../../../../../../assets/icons/error.png");

interface IProps {
    id : number,
    name? : string,
    hide? : boolean,
    available? : boolean
}

const Seat : FC<IProps> = (props) : JSX.Element => {
    const [ selected , setSelected ] = useState<boolean>(false);
    const { selectedSeat , updateSelectedSeat } = useContext(SeatSelectionContext);
    const { id, available, name, hide } = props;

    const onPress = () => {
        if(!selectedSeat){
            setSelected(true);
            updateSelectedSeat!(true);
        }
    }

    if(hide) return <View style={styles.divPress}></View>
    
    return <>
        <TouchableOpacity onPress={onPress}>
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
                        <Image source={AvailableSeat} style={styles.image} />
                    </View> :
                    null
            } 
        </TouchableOpacity>
    </>
}

export default Seat;