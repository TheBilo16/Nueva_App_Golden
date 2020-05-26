import React, { FC, useContext } from "react";
import { View } from "react-native";
import styles from "./styles";

//Componentes
import { ScrollView } from "react-native-gesture-handler";
import { BusSeatSelectionContext } from "../../../../../../context/BusSeatSelectionContext";

//Hooks
const SeatList : FC = () : JSX.Element => {
    const { seatRows } = useContext(BusSeatSelectionContext);

    return <ScrollView style={styles.scroll}>
        <View style={styles.contenedor_asientos}>
            <View style={styles.fila}>
                {seatRows?.row_a}
            </View>
            <View style={styles.fila}>
                {seatRows?.row_b}
            </View>
        </View>
    </ScrollView>
}

export default React.memo(SeatList);