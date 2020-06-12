import React , { FC } from "react"
import { View, ActivityIndicator } from "react-native";
import styles from "./styles";

//Extra
import { Secondary } from "../../../config/colors";

const ScreenLoading : FC = () => {
    return <View style={styles.container}>
        <ActivityIndicator size={32} color={Secondary.text_link} />
    </View>
}

export default ScreenLoading;