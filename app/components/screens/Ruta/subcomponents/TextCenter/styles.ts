import { StyleSheet } from "react-native";
import { Secondary } from "../../../../../config/colors";

const styles = StyleSheet.create({
    textCenter : {
        marginVertical : 4,
        flexDirection : "row",
        justifyContent : "center"
    },
    title : {
        color : Secondary.text_dark,
        fontWeight : "bold"
    },
    description : {
        color : Secondary.text_light,
        paddingLeft : 20
    }
});

export default styles;