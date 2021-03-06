import { StyleSheet } from "react-native";
import { Secondary, Utilies } from "../../../config/colors";
import { global } from "../../../config/styles";

const { header_menu_padding, header_menu_height } = global;

const styles = StyleSheet.create({
    header : {
        paddingTop: header_menu_padding,
        backgroundColor : "#fff", 
        borderBottomColor : "rgb(230,230,230)",
        borderBottomWidth : 1
    },
    headerContent : {
        paddingHorizontal: 15,
        height : header_menu_height,
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center"
    },
    title_header : {
        fontSize: 16,
        fontWeight : "bold",
        color: Secondary.text_dark
    }
})

export default styles;