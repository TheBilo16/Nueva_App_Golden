import { StyleSheet } from "react-native";
import { Secondary } from "../../../../config/colors";

const styles = StyleSheet.create({
    container : {
        width : "80%",
        marginBottom : 18
    },
    title : {
        paddingBottom : 11
    },
    title_text : {
        color : Secondary.text_dark,
        fontWeight : "bold",
        fontSize : 14
    },
    input : {
        position : "relative"
    },
    input_text : {
        borderColor : Secondary.borders,
        borderWidth : 1,
        paddingHorizontal : 10,
        paddingRight : 35
    },
    input_icon : {
        height : "100%",
        position : "absolute",
        right : 7,
        top : 0,
        justifyContent : "center"
    }
})

export default styles;