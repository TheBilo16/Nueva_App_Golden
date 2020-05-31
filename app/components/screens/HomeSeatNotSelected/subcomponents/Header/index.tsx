import React, { FC } from "react";
import { View, ImageSourcePropType, Image, Text } from "react-native";
import styles from "./styles";

//Images
const check : ImageSourcePropType = require("../../../../../assets/icons/check.png");
const error : ImageSourcePropType = require("../../../../../assets/icons/error.png");

const Header : FC = () : JSX.Element => {
    return <View>
        <View style={styles.content_title}>
            <Text style={styles.text_central}>Elige tu Asiento</Text>
        </View>
        <View style={styles.content_instructions}>
            <View style={styles.content_information}>
                <Image style={styles.image_icon} source={error} resizeMode="stretch" />
                <Text style={styles.text}>Asiento Ocupado</Text>
            </View>
            <View style={styles.content_information}>
                <Image style={styles.image_icon} source={check} resizeMode="stretch" />
                <Text style={styles.text}>Asiento Disponible</Text>
            </View>
        </View>
    </View>
}

export default Header;