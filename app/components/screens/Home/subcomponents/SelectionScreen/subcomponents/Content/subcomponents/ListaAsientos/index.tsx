import React, { FC, useContext } from "react";
import { View } from "react-native";
import styles from "./styles";

//Componentes
import { ScrollView } from "react-native-gesture-handler";
import { HomeContext } from "../../../../../../context";

//Hooks
const ListaAsientos : FC = () : JSX.Element => {
    const { filasBus } = useContext(HomeContext);

    return <ScrollView style={styles.scroll}>
        <View style={styles.contenedor_asientos}>
            <View style={styles.fila}>
                {filasBus.fila_a}
            </View>
            <View style={styles.fila}>
                {filasBus.fila_b}
            </View>
        </View>
    </ScrollView>
}

export default React.memo(ListaAsientos);