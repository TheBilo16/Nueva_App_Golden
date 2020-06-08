import { StyleSheet } from "react-native";
import { Utilies, Secondary } from "../../../../../config/colors";

const styles = StyleSheet.create({
    content_button : {    
        flex: 1,
        marginHorizontal : 20,
        padding : 10,
        marginVertical : 20
    },
    text_button : {
        textAlign : "center",
        fontSize : 18,
        fontWeight : "bold"
    },
    bg : {
        backgroundColor : Utilies.header,
    },
    bg_lock : {
        backgroundColor : "rgb(240,240,240)"
    },
    color : {
        color : "#fff",
    },
    color_lock : {
        color : Secondary.text_light_b,
    }
});

export default styles;