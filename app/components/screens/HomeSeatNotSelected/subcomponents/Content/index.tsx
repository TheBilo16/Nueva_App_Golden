import React, { FC, useContext } from "react";
import { View , ScrollView, FlatList, ActivityIndicator } from "react-native";
import styles from "./styles";

//Componentes
import { SeatSelectionContext } from "../../../../context/SeatSelectionContext";
import Seat from "./subcomponents/Seat";
import { Secondary } from "../../../../../config/colors";

const Content : FC = () : JSX.Element => {
    const { seatInformation , loadingSeatInformation } = useContext(SeatSelectionContext);

    return <View style={styles.container}>
        <ScrollView>
            <View style={styles.contenedor_asientos}>
                <View style={styles.center}>
                    {
                        !loadingSeatInformation ?
                            <FlatList
                                data={seatInformation?.seats}
                                renderItem={({ item , index }) => {
                                    if(item) return <Seat id={index} name={item.name} client={item.client} />
                                    
                                    return <Seat id={index} hide />
                                }}
                                numColumns={seatInformation?.seatColumns}       //Si se cambia en tiempo real -> ERROR...
                            /> : 
                            <ActivityIndicator color={Secondary.text_link} />
                    } 
                </View>
            </View>
        </ScrollView>
    </View>
}

export default Content;