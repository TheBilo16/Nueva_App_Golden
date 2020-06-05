import { StyleSheet } from "react-native";
import { Secondary } from "../../../../../config/colors";

const styles = StyleSheet.create({
    header_content : {
        width : "100%",
        backgroundColor : "#fff",
        paddingVertical : 15,
        flexDirection : "row",
        justifyContent : "space-around",
        marginTop : 6
    },
    content_text : {
        alignItems : "center"
    },
    text_number : {
        fontSize : 20,
        color : Secondary.text_dark,
        fontWeight : "bold"
    },
    text : {
        fontSize : 12,
        color : Secondary.text_dark
    }
})

export default styles;