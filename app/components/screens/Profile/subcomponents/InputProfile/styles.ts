import { StyleSheet } from "react-native";
import { Secondary } from "../../../../config/colors";

const styles = StyleSheet.create({
    input_content : {
        width : "80%"
    },
    title_content : {
        flexDirection : "row",
        alignItems : "center"
    },
    title : {
        color : Secondary.text_dark,
        fontWeight : "bold",
        paddingLeft : 5
    },
    input : {
        width : "100%",
        height : 40,
        borderBottomColor : Secondary.borders,
        borderBottomWidth : 1,
        paddingHorizontal : 5,
        color : Secondary.text_light
    }
});

export default styles;