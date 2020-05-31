import { StyleSheet } from "react-native";
import { Base, Utilies } from "../../../config/colors";

const styles = StyleSheet.create({
    button_touch : {
        width : 150,
    },
    button_base : {
        width : "100%",
        paddingVertical : 5,
        borderWidth : 1,
        borderColor : "#fff"
    },
    text_base : {
        fontWeight : "bold",
        fontSize: 15,
        textAlign : "center"
    },
    button : {
        backgroundColor : "#fff",
    },
    button_text_normal : {
        color : Utilies.header
    },
    button_ghost : {
        backgroundColor : Utilies.header, 
    },
    button_text_ghost : {
        color : "#fff",
    },
});

export default styles;