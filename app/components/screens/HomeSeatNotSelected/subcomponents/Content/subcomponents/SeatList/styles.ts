import { StyleSheet, Dimensions } from "react-native";
import { screen_home, global } from "../../../../../../../config/styles";

const { height } = Dimensions.get("window");

const { height_header, height_bars } = screen_home;
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
        flexDirection : "row",
    },
    fila : {
        width : "100%",
        alignItems : "center"
    },
})
    
export default styles;