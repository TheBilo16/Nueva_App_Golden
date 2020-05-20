import { StyleSheet } from "react-native";
import { Secondary } from "../../../../config/colors";

const styles = StyleSheet.create({
    content_image : {
        paddingVertical : 35,
        alignItems : "center"
    },
    image : {
        width : 170,
        height : 170
    },
    name : {
        width : "60%",
        textAlign : "center",
        fontSize : 18,
        fontWeight : "bold",
        color: Secondary.text_dark,
        paddingTop : 35
    }
})

export default styles;