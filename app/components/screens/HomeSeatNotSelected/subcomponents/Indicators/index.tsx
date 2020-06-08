import React , { FC } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import Option from "./subcomponents/Option";

const Indicators : FC = () : JSX.Element => {
    return <View>
        <View style={styles.total_seat}>
            <Text style={styles.text}>Total de asientos : 8</Text>
        </View>
        <View style={styles.indicator_content}>
            <Option text="Ocupado" type={0} />
            <Option text="Disponible" type={1} />
            <Option text="Seleccionado" type={2} />
        </View>
    </View>
}

export default Indicators;