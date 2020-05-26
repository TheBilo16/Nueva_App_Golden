import { StyleSheet } from "react-native";
import { Base } from "../../../config/colors";

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
        color : Base.yellow
    },
    button_ghost : {
        backgroundColor : Base.yellow, 
    },
    button_text_ghost : {
        color : "#fff",
    },
});

export default styles;