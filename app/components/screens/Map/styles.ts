import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignContent : "center",
        backgroundColor : "#fff",
        position : "relative"
    },
    map : {
        width: "100%",
        height : "100%"
    },
    button_custom_map : {
        position : "absolute",
        bottom : 10,
        right : 10,
        width : 50,
        height : 50,
        borderRadius : 25,
        justifyContent : "center",
        alignItems : "center"
    }
})

export default styles;