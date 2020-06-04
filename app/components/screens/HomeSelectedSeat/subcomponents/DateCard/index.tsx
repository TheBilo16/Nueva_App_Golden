import React, { FC } from "react";
import { View, Text } from "react-native";
import styles from "./styles";

interface IProps {
    title : string,
    time : string,
    date : string
}

const DateCard : FC<IProps> = (props) : JSX.Element => {
    const { title , time , date } = props;

    return <View style={styles.date_card}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.container_date}>
            <Text style={[styles.time_color,styles.time]}>{time}</Text>
            <Text style={[styles.time_color,styles.date]}>{date}</Text>
        </View>
    </View>
}

export default DateCard;