import React, { FC } from "react";
import { Image , ImageSourcePropType } from "react-native";
import styles from "./styles";

//Images
const AsientoDisponible : ImageSourcePropType = require("../../../../../../../../../assets/icons/asientoLibre.png");
const AsientoOcupado : ImageSourcePropType = require("../../../../../../../../../assets/icons/asientoOcupado.png");

interface IProps {
    disponible : boolean
}

const Asiento : FC<IProps> = (props) : JSX.Element => {
    const { disponible } = props;
    
    if(disponible) 
        return <Image style={styles.image} resizeMode="stretch" source={AsientoDisponible} />
    else
        return <Image style={styles.image} resizeMode="stretch" source={AsientoOcupado} />
}

export default Asiento;