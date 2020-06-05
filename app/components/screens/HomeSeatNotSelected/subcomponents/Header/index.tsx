import React, { FC } from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const Header : FC = () : JSX.Element => {
    return <View style={styles.header_content}>
        <View style={styles.content_text}>
            <Text style={styles.text_number}>8</Text>
            <Text style={styles.text}>Ocupado</Text>
        </View>
        <View style={styles.content_text}>
        <Text style={styles.text_number}>12</Text>
            <Text style={styles.text}>Disponible</Text>
        </View>
    </View>
}

export default Header;