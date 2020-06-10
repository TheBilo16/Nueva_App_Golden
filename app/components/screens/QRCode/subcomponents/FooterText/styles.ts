import { StyleSheet } from "react-native";
import { Secondary } from "../../../../../config/colors";

const styles = StyleSheet.create({
    container_footer : {
        alignItems : "center"
    },
    dni : {
        fontSize : 23,
        fontWeight : "bold",
        color : Secondary.text_dark
    },
    text : {
        color : Secondary.text_light_b,
        fontSize : 12
    }
});

export default styles;