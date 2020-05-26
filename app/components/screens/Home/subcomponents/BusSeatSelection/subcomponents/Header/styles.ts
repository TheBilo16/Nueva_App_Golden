import { StyleSheet } from "react-native";
import { Secondary } from "../../../../../../../config/colors";
import { screen_home } from "../../../../../../../config/styles";

const { height_header_a, height_header_b } = screen_home;

const styles = StyleSheet.create({
    content_title : {
        height: height_header_a,
        justifyContent : "center",
        paddingHorizontal : 20
    },
    text_central : {
        fontSize : 18,
        fontWeight : "bold",
        textTransform : "uppercase",
        color : Secondary.text_dark
    },
    content_instructions : {
        height : height_header_b,
        backgroundColor: "rgb(240,240,240)",
        paddingHorizontal : 20,
        justifyContent : "center"
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