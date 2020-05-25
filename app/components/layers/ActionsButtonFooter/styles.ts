import { StyleSheet } from "react-native";
import { Base } from "../../../config/colors";
import { height_footer_actions } from "../../../config/styles";

const styles  = StyleSheet.create({
    container_buttons : {
        width : "100%",
        height: height_footer_actions,
        backgroundColor : Base.yellow,
        flexDirection : "row",
        justifyContent : "space-around",
        alignItems : "center"
    }
})

export default styles;