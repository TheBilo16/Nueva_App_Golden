import { StyleSheet } from "react-native";
import { Base } from "../../../config/colors";

const styles  = StyleSheet.create({
    container_buttons : {
        width : "100%",
        backgroundColor : Base.yellow,
        flexDirection : "row",
        justifyContent : "space-around",
        paddingVertical : 15
    }
})

export default styles;