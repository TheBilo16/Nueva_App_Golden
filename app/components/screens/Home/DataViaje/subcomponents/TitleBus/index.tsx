import React, { FC } from "react";
import { View, Text } from "react-native";
import styles from "./styles";

interface IProps {
    title : string,
    description : string
}

const TitleBus : FC<IProps> = (props) : JSX.Element => {
    const { title, description } = props;

    return <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
    </View>
}

export default TitleBus;