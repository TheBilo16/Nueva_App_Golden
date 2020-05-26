import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header : {
        width: "100%",
        height : "45%",
        minHeight : 240,
        borderBottomLeftRadius : 50,
        justifyContent : "center",
        alignItems : "center",
        position : "relative"
    },
    text_header : {
        position : "absolute",
        bottom : 0,
        right : 0,
        padding : 20,
        flexDirection : "row",
        alignItems : "flex-end"
    },
    image : {
        width : 85,
        height : 85
    },
    login_title : {
        color: "#fff",
        fontSize : 18,
        fontWeight : "bold",
        paddingLeft : 5
    },
    degradado : {
        width : "100%",
        height : "100%",
        position: "absolute",
        top : 0,
        left : 0,
    }
});

export default styles;