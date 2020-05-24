import { StyleSheet } from "react-native";
import { Secondary } from "../../../../../config/colors";

const padding = 25;
const styles = StyleSheet.create({
    container : {
        width : "100%",
        alignItems : "center",
        paddingVertical : padding
    },
    title : {
        fontSize : 22,
        fontWeight : "bold",
        textTransform : "uppercase",
        color: Secondary.text_dark
    },
    text_bus : {
        fontSize : 12,
        paddingTop : 4,
        color: Secondary.text_light
    },
    icon : {
        paddingTop : 20
    }
});

export default styles;