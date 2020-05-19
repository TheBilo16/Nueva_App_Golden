import { StyleSheet } from "react-native";
import { Secondary } from "../../config/colors";

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#fff",
        paddingVertical : 30
    },
    container_image : {
        paddingTop : 10,
        alignItems : "center",
    },
    icon : {
        paddingVertical : 25,
        alignItems : "center",
    },
    text : {
        paddingVertical: 20,
        paddingHorizontal : 30
    },
    desc : {
        color: Secondary.text_light,
        textAlign : "center",
        fontSize : 14
    },
    about: {
        width: "100%",
        paddingHorizontal: 20,
        paddingVertical: 30,
        flexDirection : "row",
        justifyContent : "flex-end",
        alignItems : "flex-end"
    },
    text_about : {
        color: Secondary.text_link,
        paddingLeft: 5,
        fontSize : 12
    }
})

export default styles;