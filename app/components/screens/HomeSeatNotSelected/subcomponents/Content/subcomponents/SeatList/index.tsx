import React, { FC, useContext } from "react";
import { View , ScrollView } from "react-native";
import styles from "./styles";

//Componentes
import { BusSeatSelectionContext } from "../../../../../../context/BusSeatSelectionContext";
import Seat from "../Seat";

//Hooks
const SeatList : FC = () : JSX.Element => {
    const { seatRows } = useContext(BusSeatSelectionContext);

    return <ScrollView style={styles.scroll}>
        <View style={styles.contenedor_asientos}>
            <View style={styles.fila}>
                {
                    seatRows?.map((v,i) => {
                        if(v) return <Seat key={i} id={i} name={v.name} available={v.available} />
                        else return <Seat key={i} id={i} hide />
                    })
                }
            </View>
        </View>
    </ScrollView>
}

export default React.memo(SeatList);