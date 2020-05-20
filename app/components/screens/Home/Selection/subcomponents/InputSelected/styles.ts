import { StyleSheet } from "react-native";
import { Secondary } from "../../../../../config/colors";

const styles = StyleSheet.create({
    selected_container : {
        width : "80%",
    },
    container_title : {
        paddingBottom : 10
    },
    title : {
        color: Secondary.text_dark,
        fontWeight : "bold",
        fontSize : 14
    },
    input_container : {
        width : "100%",
        borderColor : Secondary.borders,
        borderWidth : 1,
        paddingLeft : 10
    },
    picker : {
        height : 32,
        textAlign : "center",
        color: Secondary.text_dark
    },
    picker_child : {
        fontSize : 11
    }
})

export default styles;