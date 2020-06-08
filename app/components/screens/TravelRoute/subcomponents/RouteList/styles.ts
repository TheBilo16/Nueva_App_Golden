import { StyleSheet } from "react-native";
import { Utilies } from "../../../../../config/colors";

const styles = StyleSheet.create({
    content : {
        width : "100%",
        position : "relative",
    },
    content_bar : {
        width : "25%",
        height : "100%",
        position: "absolute",
        top : 0,
        alignItems : "center",
        justifyContent : "center"
    },
    bar : {
        width : 3,
        height : "100%",
        backgroundColor : Utilies.header
    }
})

export default styles;