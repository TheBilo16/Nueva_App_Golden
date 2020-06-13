import React , { FC } from "react"
import { View, ActivityIndicator } from "react-native";
import styles from "./styles";

const ModalLoading : FC = () : JSX.Element => {
    return <View style={styles.content_loading}>
        <ActivityIndicator color="#fff" size={32} />
    </View>
}

export default ModalLoading;