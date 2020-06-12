import React, { useContext, memo } from "react";
import { View, Text } from "react-native";
import styles from "./styles";

//Context
import { UserContext } from "../../../../context/UserContext";

const FooterText = () : JSX.Element => {
    const { userInformation } = useContext(UserContext);
    
    return <View style={styles.container_footer}>
        <Text style={styles.dni}>{userInformation?.dni}</Text>
        <Text style={styles.text}>Mi Documento</Text>
    </View>
}

export default memo(FooterText);