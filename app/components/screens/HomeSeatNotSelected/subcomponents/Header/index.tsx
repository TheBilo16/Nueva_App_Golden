import React, { FC, useContext } from "react";
import { View, Text } from "react-native";
import styles from "./styles";

//Context
import { SeatSelectionContext } from "../../../../context/SeatSelectionContext";

const Header : FC = () : JSX.Element => {
    //Context
    const { seatInformation } = useContext(SeatSelectionContext);

    //Variables
    let ocupped : number = 0;
    let available : number = 0;

    //Actions
    const seatExtraInformation = () => {
        const seatsInf = seatInformation?.seats;
        const seats = seatsInf?.filter(v => v);

        //Recuperar los asientos ocupados y desocupados
        const availableSeat = seats?.filter((v,i) => !v.client);
        const ocuppedSeat = seats?.filter(v => v.client);
        
        ocupped = ocuppedSeat?.length!;
        available = availableSeat?.length!;
    };

    seatExtraInformation();

    return <View style={styles.header_content}>
        <View style={styles.content_text}>
            <Text style={styles.text_number}>{ocupped}</Text>
            <Text style={styles.text}>Ocupado</Text>
        </View>
        <View style={styles.content_text}>
            <Text style={styles.text_number}>{available}</Text>
            <Text style={styles.text}>Disponible</Text>
        </View>
    </View>
}

export default Header;