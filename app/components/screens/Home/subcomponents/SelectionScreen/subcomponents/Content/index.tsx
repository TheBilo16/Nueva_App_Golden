import React from "react";
import { View, ScrollView } from "react-native";
import styles from "./styles";

import ListaAsientos from "./subcomponents/ListaAsientos";
import useContent from "./hooks/useContent";

const Content = () => {
    const { filas } = useContent();

    return <ScrollView style={styles.container}>
        <View style={styles.contenedor_barras}>
            <View style={styles.barra}></View>
            <View style={styles.barra}></View>
        </View>
        <View style={styles.contenedor_asientos}>
            <View style={styles.fila}>
                <ListaAsientos list={filas.fila_a} />
            </View>
            <View style={styles.fila}>
                <ListaAsientos list={filas.fila_b} />
            </View>
        </View>            
    </ScrollView>
}

export default Content;