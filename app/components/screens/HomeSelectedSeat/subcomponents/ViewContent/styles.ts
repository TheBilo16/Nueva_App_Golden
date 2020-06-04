import { StyleSheet } from "react-native";
import { Secondary } from "../../../../../config/colors";

const styles = StyleSheet.create({
    container_cards : {
        width : "100%",
        flexDirection : "row",
        justifyContent : "space-around",
        paddingVertical : 20
    },
    container_title : {
        padding : 20,
        backgroundColor : "#fff"
    },
    color_text : {
        color : Secondary.text_dark
    },
    title : {
        fontSize : 16,
        fontWeight : "bold"
    },
    container_description : {
        backgroundColor : "#fff",
        marginVertical : 5,
        padding : 20,
        paddingVertical : 30
    },
    description : {
        fontSize : 13
    }
})

export default styles;