import { StyleSheet } from "react-native";
import { Secondary } from "../../../../../../../config/colors";

const styles = StyleSheet.create({
    content_title : {
        padding : 20
    },
    text_central : {
        fontSize : 18,
        fontWeight : "bold",
        textTransform : "uppercase",
        color : Secondary.text_dark
    },
    content_instructions : {
        backgroundColor: "rgb(240,240,240)",
        paddingHorizontal : 20,
        paddingVertical: 10
    },
    content_information : {
        flexDirection :"row",
        alignItems : "center"
    },
    image_icon : {
        width: 16,
        height : 16
    },
    text : {
        fontWeight : "bold",
        textTransform : "uppercase",
        fontSize : 11,
        padding: 5,
        color: Secondary.text_dark
    }
})

export default styles;