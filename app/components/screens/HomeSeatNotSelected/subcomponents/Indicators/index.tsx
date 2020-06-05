import React , { FC } from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const Indicators : FC = () : JSX.Element => {
    return <View>
        <View style={styles.total_seat}>
            <Text style={styles.text}>Total de asientos : 8</Text>
        </View>
        <View style={styles.indicator_content}>

        </View>
    </View>
}

export default Indicators;