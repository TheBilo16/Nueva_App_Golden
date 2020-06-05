import { StyleSheet } from "react-native";
import { Secondary, Utilies } from "../../../../../../../config/colors";

const styles = StyleSheet.create({
    divPress : {
        width : 56,
        height : 56,
        margin : 2,
        position : "relative",
        justifyContent : "center",
        alignItems : "center"
    },
    borderDiv : {
        borderColor : Utilies.header,
        borderWidth : 1,
        borderRadius : 5    
    },
    borderDivSelected : {
       borderColor : Secondary.text_link
    },
    selected : {
        backgroundColor : Secondary.text_link
    },
    text_selected : {
        color : "#fff",
        fontSize : 16,
    },
    text : {
        color: Utilies.header,
        fontSize : 16,
    },
    lock : {
        backgroundColor : Utilies.header
    },
    text_lock : {
        color: "#fff",
        fontSize : 16
    }
})

export default styles;