import { StyleSheet } from "react-native";
import { Utilies, Secondary } from "../../../../../../../config/colors";

const styles = StyleSheet.create({
    content : {
        width : "100%",
        backgroundColor : "#fff",
        flexDirection : "row",
        marginTop : 3
    },
    container_ball : {
        width : "25%",
        justifyContent : "center",
        alignItems : "center"
    },
    ball : {
        width : 16,
        height : 16,
        backgroundColor : Utilies.header,
        borderRadius : 8
    },
    container_text : {
        width : "75%",
        paddingVertical : 10
    },
    name : {
        fontSize : 15,
        fontWeight : "bold",
        // textTransform : "uppercase",
        color : Secondary.text_dark
    },
    container_placetime : {
        width : "100%",
        flexDirection : "row",
        justifyContent : "space-between",
    },
    place : {
        color: Secondary.text_light_b,
        fontSize : 10
    },
    time : {
        color : Secondary.text_link,
        fontWeight : "bold",
        fontSize : 9,
        marginRight : 15
    }
})

export default styles;