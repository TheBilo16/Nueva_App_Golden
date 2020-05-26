import { StyleSheet, Dimensions } from "react-native";
import { Secondary, Base } from "../../../config/colors";
import { global } from "../../../config/styles";

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#fff",
    },
    global_container : {
        flex : 1
    },
    container_image : {
        alignItems : "center",
        paddingVertical : 20
    },
    text : {
        backgroundColor : "rgb(245,245,245)",
        paddingVertical: 20,
        paddingHorizontal : 30
    },
    desc : {
        color: Secondary.text_light,
        textAlign : "center",
        fontSize : 14
    },
    footer : {
        height : global.height_footer_actions,
        backgroundColor : Base.yellow,
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-around"
    },
    text_footer : {
        color : "#fff",
        fontSize : 13,
        fontWeight : "bold"
    }
})

export default styles;