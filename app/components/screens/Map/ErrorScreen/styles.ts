import { StyleSheet } from "react-native";
import { Secondary } from "../../../../config/colors";

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems  : "center"
    },
    container_message : {
        width : "70%",
        paddingVertical : 25,
    },
    message : {
        fontSize : 17,
        textAlign : "center",
        color: Secondary.text_dark
    },
    button : {
        width: 115,
        backgroundColor: Secondary.text_link,
        paddingVertical : 7,
        alignItems : "center"
    },
    button_text : {
        color: "#fff",
        fontSize : 15
    }
})

export default styles;