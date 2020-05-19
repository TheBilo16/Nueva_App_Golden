import { StyleSheet } from "react-native";
import { Secondary } from "../../../config/colors";

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#fff"
    },
    container_image : {
        paddingBottom : 25,
        alignItems : "center"
    },
    image_title : {
        fontSize : 20,
        fontWeight : "bold",
        color : Secondary.text_dark,
        textTransform : "uppercase",
        paddingVertical : 25
    },
    image : {
        width : 200,
        height : 200
    }
})

export default styles;