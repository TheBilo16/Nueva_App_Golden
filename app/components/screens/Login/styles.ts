import { StyleSheet } from "react-native";
import { Secondary } from "../../../config/colors"

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#fff"
    },
    container_input : {
        width : "100%",
        alignItems : "center",
        paddingVertical : "10%"
    },
    container_text_link : {
        width: "100%",
        paddingBottom : 35,
        flexDirection : "row",
        justifyContent : "center"
    },
    text_normal : {
        fontSize : 12.5,
        color: Secondary.text_light
    },
    text_link : {
        paddingLeft : 5,
        fontSize : 12.5,
        color: Secondary.text_link,
    }
});

export default styles;