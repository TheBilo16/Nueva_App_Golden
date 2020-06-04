import { StyleSheet } from "react-native";
import { Secondary } from "../../../../../config/colors";

const styles = StyleSheet.create({
    date_card : {
        width : "45%",
        backgroundColor : "#fff",
        padding : 15
    },
    title : {
        color : Secondary.text_light_b,
        fontSize : 11,
        paddingBottom : 5
    },
    container_date : {
        width : "100%",
        alignItems : "center"
    },
    time_color : {
        color : Secondary.text_link
    },
    time : {
        fontSize : 28,
        fontWeight : "bold"
    },
    date : {
        fontSize : 10,
        alignSelf : "flex-end",
        marginRight : 10
    }
});

export default styles;