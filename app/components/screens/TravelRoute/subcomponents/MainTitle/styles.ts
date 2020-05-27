import { StyleSheet } from "react-native";
import { travelRoutes } from "../../../../../config/styles";
import { Secondary } from "../../../../../config/colors";

const styles = StyleSheet.create({
    main_title : {
        width : "100%",
        // height : travelRoutes.height_main_title,
        justifyContent: 'center',
        alignItems : "center",
        // minHeight : 160,
        paddingVertical : 30
    },
    container_title : {
        width : "80%",
        alignItems : "center",
        paddingBottom : 25
    },
    title : {
        color: Secondary.text_dark,
        fontSize : 19,
        fontWeight : "bold",
        marginBottom : 5,
        textAlign : "center"
    },
    date : {
        color: Secondary.text_link,
        fontSize : 11,
        fontWeight : "bold"
    }
});

export default styles;