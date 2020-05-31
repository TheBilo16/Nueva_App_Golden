import React, { FC } from "react";
import { View } from "react-native";
import styles from "./styles";

//Componentes
import SeatList from "./subcomponents/SeatList";

const Content : FC = () : JSX.Element => {
    return <View style={styles.container}>
        <View style={styles.contenedor_barras}>
            <View style={styles.barra}></View>
        </View>
        <SeatList /> 
    </View>
}

export default Content;