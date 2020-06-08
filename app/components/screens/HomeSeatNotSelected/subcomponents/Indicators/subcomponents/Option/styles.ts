import { StyleSheet } from "react-native";
import { Utilies, Secondary } from "../../../../../../../config/colors";

const styles = StyleSheet.create({
    card : {
        flexDirection : "row",
        alignItems : "center"
    },
    box : {
        width : 15,
        height  :15,
        borderRadius : 3,
        borderWidth : 1
    },
    type_0 : {
        backgroundColor : Utilies.header,
        borderColor : Utilies.header
    },
    type_1 : {
        borderColor : Utilies.header
    },
    type_2 : {
        borderColor : Secondary.text_link,
        backgroundColor : Secondary.text_link
    },
    text : {
        color: Secondary.text_dark,
        fontSize : 12,
        paddingLeft: 8
    }
});

export default styles;