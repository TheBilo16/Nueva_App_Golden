import { StyleSheet } from "react-native";
import { Secondary } from "../../../../../config/colors";

const styles = StyleSheet.create({
    total_seat : {
        paddingVertical : 20,
        alignItems : "center"
    },
    text : {
        color : Secondary.text_dark,
        fontSize : 11
    },
    indicator_content : {
        width : "100%",
        backgroundColor : "#fff",
        paddingVertical : 25,
        flexDirection : "row",
        justifyContent : "space-around"
    }
})

export default styles;