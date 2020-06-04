import React, { FC } from "react";
import { View , Text } from "react-native";
import styles from "./styles";

//Extra
import { IBusStopData } from "../../../../../../../interfaces/Travel";

const Route : FC<IBusStopData> = (props) : JSX.Element => {
    const { name , time } = props;

    return <View style={styles.content}>
        <View style={styles.container_ball}>
            <View style={styles.ball}></View>
        </View>
        <View style={styles.container_text}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.container_placetime}>
                <Text style={styles.place}>Peru / Lima</Text>
                <Text style={styles.time}>{time}</Text>
            </View>    
        </View>
    </View>
}

export default React.memo(Route);