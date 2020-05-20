import { StyleSheet, Dimensions } from "react-native";
import { Secondary } from "../../../../config/colors";

const { width } = Dimensions.get("screen");
const border_line = 3;

const styles = StyleSheet.create({
    container : {
        paddingVertical : 20,
    },
    box_draw : {
        width,
        alignItems : "center",
        paddingVertical : 15,
        position : "relative"
    },
    icon : {
        position : "absolute",
    },
    draw_line : {
        width : width * 0.8,
        height : 20,
        justifyContent : "center",
        position : "relative",
    },
    line : {
        width : "100%",
        height : border_line,
        backgroundColor : Secondary.text_dark
    },
    line_small : {
        width : border_line,
        height : "100%",
        position : "absolute",
        backgroundColor : Secondary.text_dark
    },
    container_text : {
        paddingVertical : 25,
    }
});

export default styles;