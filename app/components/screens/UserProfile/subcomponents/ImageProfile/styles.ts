import { StyleSheet } from "react-native";
import { Secondary, Base } from "../../../../../config/colors";

const styles = StyleSheet.create({
    content_profile_head : {
        paddingTop : 35,
        alignItems : "center",
    },
    container_image : {
        width : 170,
        height: 170,
        backgroundColor : "rgb(245,245,245)",
        borderRadius : 170 / 2
    },
    image : {
        width : "100%",
        height : "100%",
        borderRadius : 170 / 2,
    },
    name : {
        width : "60%",
        paddingVertical : 35
    },
    text : {
        textAlign : "center",
    },
    fullname : {
        fontSize : 18,
        fontWeight : "bold",
        color: Secondary.text_dark,
    },
    city : {
        fontSize : 12,
        color : Secondary.text_light,
        marginTop : 5
    }
})

export default styles;