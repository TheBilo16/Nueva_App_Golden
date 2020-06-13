import React , { FC, useContext } from "react";
import { View, Text } from "react-native";
import styles from "./styles";

//Components
import Option from "./subcomponents/Option";

//Context
import { SeatSelectionContext } from "../../../../context/SeatSelectionContext";

const Indicators : FC = () : JSX.Element => {
    //Context
    const { seatInformation } = useContext(SeatSelectionContext);

    //Actions
    const getCountSeat = () : number => {
        const seats = seatInformation?.seats;
        const newSeats = seats?.filter(v => v);
        return newSeats?.length!;
    }

    //Variables
    let countSeat : number = getCountSeat();


    return <View>
        <View style={styles.total_seat}>
            <Text style={styles.text}>Total de asientos : {countSeat}</Text>
        </View>
        <View style={styles.indicator_content}>
            <Option text="Ocupado" type={0} />
            <Option text="Disponible" type={1} />
            <Option text="Seleccionado" type={2} />
        </View>
    </View>
}

export default Indicators;