import { StyleSheet } from "react-native";
import { Secondary, Utilies } from "../../../config/colors";

const styles = StyleSheet.create({
    header : {
        paddingTop: 24,
        backgroundColor : Utilies.header,
        borderBottomColor: Secondary.borders,
        borderBottomWidth: 1    
    },
    headerContent : {
        paddingHorizontal: 15,
        paddingVertical: 12,
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center"
    },
    title_header : {
        fontSize: 17,
        fontWeight : "bold",
        color: "#fff"
    }
})

export default styles;