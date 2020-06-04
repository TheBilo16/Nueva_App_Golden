import React, { FC, useContext } from "react";
import { View , ScrollView, FlatList, ActivityIndicator } from "react-native";
import styles from "./styles";

//Componentes
import { SeatSelectionContext } from "../../../../../../context/SeatSelectionContext";
import Seat from "../Seat";

//Hooks
const SeatList : FC = () : JSX.Element => {
    const { seatInformation , loadingSeatInformation } = useContext(SeatSelectionContext);

    return <ScrollView style={styles.scroll}>
        <View style={styles.contenedor_asientos}>
            <View style={styles.fila}>
                {
                    !loadingSeatInformation ?
                        <FlatList
                            data={seatInformation?.seats}
                            renderItem={({ item , index }) => {
                                if(item) return <Seat id={index} name={item.name} available={item.available} />
                                
                                return <Seat id={index} hide />
                            }}
                            numColumns={seatInformation?.seatColumns}       //Si se cambia en tiempo real -> ERROR...
                        /> : 
                        <ActivityIndicator color="black" />
                } 
            </View>
        </View>
    </ScrollView>
}

export default React.memo(SeatList);