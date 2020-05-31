import { StyleSheet } from "react-native";
import { Secondary } from "../../../../../config/colors";

const styles = StyleSheet.create({
    container_profile : {
        width : "100%",
        paddingVertical : 25,
        paddingHorizontal : 15,
        borderBottomColor : Secondary.borders,
        borderBottomWidth : 1,
        flexDirection : "row",
        alignItems : "center"
    },
    image : {
        width : 50,
        height : 50,
        borderRadius : 50 / 2
    },
    container_text : {
        flex : 1,
        paddingLeft : 15
    },
    text_user : {
        color : Secondary.text_dark,
        fontWeight : "bold",
        paddingBottom : 3
    },
    text_date : {
        color : Secondary.text_light,
        fontSize : 11
    }
})

export default styles;