import { StyleSheet } from "react-native";
import { Secondary } from "../../../../../../../config/colors";
import { screen_home } from "../../../../../../../config/styles";

const { padding , width_bars, height_bars } = screen_home;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        paddingHorizontal : padding
    },
    contenedor_barras : {
        width : "100%",
        height : height_bars,
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center"
    },
    barra : {
        width : width_bars,
        height : 10,
        backgroundColor: Secondary.text_dark
    }
});

export default styles;