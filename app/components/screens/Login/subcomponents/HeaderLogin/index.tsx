import React , { FC } from "react";
import { View, Image, Text, Dimensions } from "react-native";
import { LinearGradient, Svg, Defs, Stop, Path } from "react-native-svg";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";

//Extra
import { Base } from "../../../../../config/colors";

//Dimensions
var { width , height } = Dimensions.get("window");
height = height * 0.45;

//Images
const IconGolden = require("../../../../../assets/icon_golden.png");

const HeaderLogin : FC = () : JSX.Element => {
    return <View style={styles.header}>     
        <Svg style={styles.degradado}>
            <Defs>
                <LinearGradient id="grad" x1="0" x2="0" y1="1" y2="0">
                    <Stop offset="1" stopColor={Base.yellow} stopOpacity="1" />
                    <Stop offset="0" stopColor={Base.orange} stopOpacity="1" />
                </LinearGradient>
            </Defs>
            <Path 
                d={`M 0 0 L ${width} 0 L ${width} ${height} L 65 ${height} C 65 ${height} 0 ${height} 0 ${height - 65}`}
                fill="url(#grad)"
            />
        </Svg>  
        <Image source={IconGolden} style={styles.image} resizeMode="stretch" />
        <View style={styles.text_header}>
            <MaterialIcons name="group" size={22} color="#fff" />
            <Text style={styles.login_title}>Login de Usuario</Text>
        </View>  
    </View>
}

export default HeaderLogin;