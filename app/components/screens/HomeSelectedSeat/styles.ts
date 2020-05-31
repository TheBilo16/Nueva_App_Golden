import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    content : {
        flex : 1,
        backgroundColor : "#fff"
    },
    container_image : {
        width : "100%",
        backgroundColor : "rgb(245,245,245)",
        position : "relative"
    },
    image : {
        width : "100%",
        height : 200
    },
    container : {
        width : "100%",
        height : "100%",
        position : "absolute",
        left : 0,
        top : 0,
        backgroundColor : "rgba(0,0,0,.5)",
        justifyContent: "flex-end"
    },
    title_container : {
        width : "100%",
        height : 70,
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
        paddingHorizontal : 15,
    },
    title : {
        fontSize : 18,
        color : "#fff",
        fontWeight : "bold",
        textTransform : "uppercase"
    },
    date : {
        color: "#fff",
        fontSize : 12
    },
    container_information : {
        
    }
});

export default styles;