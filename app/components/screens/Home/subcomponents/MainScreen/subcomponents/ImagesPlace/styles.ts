import { StyleSheet } from "react-native";
import { Secondary } from "../../../../../../../config/colors";

const styles = StyleSheet.create({
    container_images : {
        width : "100%",
        marginVertical : 20,
        paddingHorizontal : 20
    },
    container_title : {
        flexDirection : "row",
        alignItems : "center",
        paddingVertical : 13,
    },
    title : {
        paddingLeft : 5,
        color : Secondary.text_dark,
        fontWeight : "bold"
    },
})

export default styles;