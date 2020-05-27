import { StyleSheet } from "react-native";

const padding : number = 10;

const styles = StyleSheet.create({
    route_container : {
        width : "100%",
        height : 40,
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
        marginBottom : 10
    },
    information : {
        flexDirection : "row",
        alignItems : "center",
        paddingHorizontal : 10
    },
    title : {
        fontSize : 14,
        fontWeight : "bold",
        paddingLeft : padding * 2
    },
    btn_press : {
        width : 40,
        height : "100%",
        alignItems : "center",
        justifyContent : "center"
    }
})

export default styles;