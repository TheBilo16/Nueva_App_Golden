import React, { FC, useState } from "react";
import { View , Image , ImageSourcePropType, TouchableOpacity } from "react-native";
import styles from "./styles";

//Images
const AvailableSeat : ImageSourcePropType = require("../../../../../../../../../assets/icons/asientoLibre.png");
const NotAvailableSeat : ImageSourcePropType = require("../../../../../../../../../assets/icons/asientoOcupado.png");

interface IProps {
    available : boolean,
    onPress?(setSeleccion : any) : void
}

const Seat : FC<IProps> = (props) : JSX.Element => {
    const [ selected , setSelected ] = useState<boolean>(false);
    const { available, onPress } = props;

    const onPressSeat = () => {
        onPress ? onPress(setSelected) : null;
    }
    
    return <TouchableOpacity style={styles.divPress} onPress={onPressSeat}>
        {
            available ? 
                <Image style={styles.image} resizeMode="stretch" source={AvailableSeat} /> :
                <Image style={styles.image} resizeMode="stretch" source={NotAvailableSeat} />
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