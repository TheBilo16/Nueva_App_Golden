import { StyleSheet } from "react-native";
import { Secondary } from "../../../../../../../config/colors";

const styles = StyleSheet.create({
    divPress : {
        width : 64,
        height : 64,
        marginBottom : 5,
        marginLeft : 5,
        position : "relative",
        justifyContent : "center",
        alignItems : "center"
    },
    borderDiv : {
        borderColor : Secondary.text_dark,
        borderWidth : 1
    },
    lock : {
        borderColor : Secondary.text_light,
        borderWidth : 1,
        backgroundColor : "rgb(245,245,245)"
    },
    text_lock : {
        color: Secondary.text_light
    },
    eleccion : {
        width : "100%",
        height : "100%",
        position : "absolute",
        justifyContent : "center",
        alignItems : "center"
    },
    symbol : {
        width : 20,
        height : 20,
        borderRadius : 10,
        backgroundColor : "red",
    }
})

export default styles;