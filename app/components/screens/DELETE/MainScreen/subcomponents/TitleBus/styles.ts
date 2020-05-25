import { StyleSheet } from "react-native";
import { Secondary } from "../../../../../../../config/colors";

const styles = StyleSheet.create({
    content : {
        borderBottomColor : Secondary.borders,
        borderBottomWidth : 1,
        flexDirection : "row",
        justifyContent : "space-between",
        paddingHorizontal : 15,
        paddingVertical : 5,
        marginVertical : 7
    },
    title : {
        color : Secondary.text_dark,
        fontWeight : "bold"
    },
    description : {
        paddingLeft : 15,
        color : Secondary.text_light
    }
});

export default styles;