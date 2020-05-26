import { StyleSheet, Dimensions } from "react-native";
import { screen_home, global } from "../../../../../../../../../config/styles";

const { height } = Dimensions.get("window");

const { width_bars, height_header, height_bars } = screen_home;
const { header_menu_height_total } = global;

const heigth_scroll = height - height_header - height_bars - header_menu_height_total;

const styles = StyleSheet.create({
    scroll : {
        width : "100%",
        maxHeight : heigth_scroll,
        marginBottom : 10
    },
    contenedor_asientos : {
        width : "100%",
        maxWidth : 400,
        flexDirection : "row",
        justifyContent : "space-between",
    },
    fila : {
        width : width_bars,
        maxWidth : width_bars,
        flexDirection : "row",
        justifyContent : "space-between",
        flexWrap : "wrap",
        paddingHorizontal : 5
    }
})
    
export default styles;