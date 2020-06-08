import React, { FC, useContext } from "react";
import { View , ScrollView, FlatList, ActivityIndicator } from "react-native";
import styles from "./styles";

//Componentes
import { SeatSelectionContext } from "../../../../context/SeatSelectionContext";
import Seat from "./subcomponents/Seat";
import { Secondary } from "../../../../../config/colors";

const Content : FC = () : JSX.Element => {
    const { seatInformation , loadingSeatInformation , seatNumber } = useContext(SeatSelectionContext);

    return <View style={styles.container}>
        <ScrollView>
            <View style={styles.contenedor_asientos}>
                <View style={styles.center}>
                    {
                        !loadingSeatInformation ?
                            <FlatList
                                data={seatInformation?.seats}
                                renderItem={({ item , index }) => {
                                    let seatElement : JSX.Element;

                                    if(item){
                                        if(seatNumber === index)
                                            seatElement = <Seat id={index} selected name={item.name} client={item.client} />
                                        else
                                            seatElement = <Seat id={index} name={item.name} client={item.client} />
                                    }else{
                                        seatElement = <Seat id={index} hide />
                                    }
                                    
                                    return seatElement!;
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