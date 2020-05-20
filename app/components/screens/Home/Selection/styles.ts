import { StyleSheet } from "react-native";
import { Secondary } from '../../../config/colors';

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#fff',
        alignItems : "center"
    },
    image_container : {
        paddingBottom: 40,
        alignItems : "center"
    },
    container_title_bus : {
        paddingVertical : 25,
        alignItems : "center"
    },
    title_bus : {
        fontSize : 20,
        fontWeight : "bold",
        color : Secondary.text_dark
    },
    title_place : {
        fontSize : 12,
        color : Secondary.text_light
    },
    image : {
        width : 180,
        height : 180
    },
    action_container : {
        alignItems : "center"
    },
    container_link : {
        paddingVertical : 15
    },
    icons : {
        flexDirection : "row",
        alignItems : "flex-end"
    },
    link : {
        color : Secondary.text_link,
        fontSize : 12,
        paddingLeft : 5
    },
    button_text_date : {
        color: Secondary.text_light,
        fontSize : 13,
        paddingTop : 40,
        paddingBottom : 20
    },
})

export default styles;