import React, { FC, useState } from "react";
import { View , Image , ImageSourcePropType, TouchableOpacity } from "react-native";
import styles from "./styles";

//Images
const AsientoDisponible : ImageSourcePropType = require("../../../../../../../../../assets/icons/asientoLibre.png");
const AsientoOcupado : ImageSourcePropType = require("../../../../../../../../../assets/icons/asientoOcupado.png");

interface IProps {
    disponible : boolean,
    onPress?(setSeleccion : any) : void
}

const Asiento : FC<IProps> = (props) : JSX.Element => {
    const [ seleccionado , setSeleccionado ] = useState<boolean>(false);
    const { disponible, onPress } = props;

    const onPressSelect = () => {
        onPress ? onPress(setSeleccionado) : null;
    }
    
    return <TouchableOpacity style={styles.divPress} onPress={onPressSelect}>
        {
            disponible ? 
                <Image style={styles.image} resizeMode="stretch" source={AsientoDisponible} /> :
                <Image style={styles.image} resizeMode="stretch" source={AsientoOcupado} />
        }
        {
            seleccionado ?
                <View style={styles.eleccion}>
                    <View style={styles.symbol}></View>
                </View> :
                null
        } 
    </TouchableOpacity>
}

export default Asiento;