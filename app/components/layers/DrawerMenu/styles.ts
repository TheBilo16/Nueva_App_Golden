import { StyleSheet } from "react-native";
import { Secondary } from "../../../config/colors";

const styles = StyleSheet.create({
    button : {
        borderBottomColor : Secondary.borders,
        borderBottomWidth : 1
    },
    button_fixed : {
        borderTopColor : Secondary.borders,
        borderTopWidth : 1
    }
})

export default styles;