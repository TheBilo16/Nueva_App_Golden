import { StyleSheet } from "react-native";
import { Utilies, Secondary } from "../../../../../config/colors";

const styles = StyleSheet.create({
    DFlex : {
        justifyContent : "center",
        alignItems : "center"
    },
    main_title : {
        width : "100%",
        flexDirection : "row",
        backgroundColor : "#fff",
        paddingVertical : 20
    },
    content_circle : {
        width : "30%",
        minWidth : 60
    },
    circle : {
        width : 50,
        height : 50,
        borderRadius : 25,
        backgroundColor : Utilies.header
    },
    letter : {
        fontSize : 24,
        color : "#fff",
        fontWeight : "bold"
    },
    content_text : {
        width : "65%",
        justifyContent : "center"
    },
    title : {
        color : Secondary.text_dark,
        textTransform : "uppercase",
        // fontWeight : "bold",
        fontSize : 16
    },
    date : {
        color : Secondary.text_link,
        // fontWeight : "bold",
        fontSize : 10
    }
});

export default styles;