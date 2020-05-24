import { StyleSheet } from "react-native";
import { Secondary } from "../../../../../../../config/colors";
import { padding, width } from "./config";

const styles = StyleSheet.create({
    container : {
        flex: 1,
        paddingTop : padding + 10,
        paddingHorizontal : padding
    },
    contenedor_barras : {
        width : "100%",
        flexDirection : "row",
        justifyContent : "space-between",
        paddingBottom : padding
    },
    barra : {
        width,
        height : 10,
        backgroundColor: Secondary.text_dark
    },
    contenedor_asientos : {
        width : "100%",
        minHeight : 300,
        flexDirection : "row",
        justifyContent : "space-between",
        borderColor : "#000",
        borderWidth : 1
    },
    fila : {
        width,
        flexDirection : "row",
        justifyContent : "space-between"
    }
});

export default styles;