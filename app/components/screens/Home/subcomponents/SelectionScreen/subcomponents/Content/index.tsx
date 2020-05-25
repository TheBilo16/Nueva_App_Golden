import React from "react";
import { View, ScrollView } from "react-native";
import styles from "./styles";

//Componentes
import ListaAsientos from "./subcomponents/ListaAsientos";

const Content = () => {
    return <View style={styles.container}>
        <View style={styles.contenedor_barras}>
            <View style={styles.barra}></View>
            <View style={styles.barra}></View>
        </View>
        <ListaAsientos /> 
    </View>
}

export default Content;