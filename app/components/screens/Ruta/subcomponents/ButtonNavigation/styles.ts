import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    box_container : {
        alignItems : "center"
    },
    rounded_box : {
        width : 45,
        height : 45,
        borderRadius : 45 / 2,
        justifyContent : "center",
        alignItems : "center"
    },
    text_title : {
        paddingTop : 5,
        fontWeight : "bold",
        fontSize : 13,
    }
});

export default styles;