import { StyleSheet } from "react-native";
import { Secondary } from "../../../../../config/colors";

const styles = StyleSheet.create({
    user_information : {
        width : "100%",
        alignItems : "center",
    },
    container_image : {
        paddingBottom : 10
    },
    image : {
        width : 64,
        height : 64,
        borderRadius : 32
    },
    container_text : {
        width : "50%",
        alignItems : "center"
    },
    fullname : {
        fontWeight : "bold",
        color: Secondary.text_dark,
        fontSize : 13,
        textAlign : "center"
    },
    city : {
        color: Secondary.text_light_b,
        fontSize: 11,
        textAlign : "center"
    }
});

export default styles;