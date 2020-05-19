import React from 'react';
import { StyleSheet, Text, Image, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

//Components
import { Secondary, Base } from '../../Global/Colors_Base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import InputSelected from './subcomponents/InputSelected';
import BusImage from "../../../assets/asiento_bus.png";
import ButtonGlobal from '../../Global/ButtonGlobal';
import HeaderMenu from '../../Global/HeaderMenu';

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

function Selection(){
    const navigation = useNavigation();
    const asientos = new Array().fill("1");

    return <HeaderMenu title="Selecciona tu Asiento">
        <View style={styles.container} >
            <ScrollView style={{ width : "100%" }}>
                <View style={styles.image_container}>
                    <View style={styles.container_title_bus}>
                        <Text style={styles.title_bus}>Bus Provincial</Text>
                        <Text style={styles.title_place}>Lima / Callao</Text>                
                    </View>
                    <Image source={BusImage} style={styles.image}/>
                </View>
                <View style={styles.action_container}>
                    <InputSelected asientos={asientos} />
                    <View style={styles.container_link}>
                        <TouchableOpacity style={styles.icons}>
                            <MaterialCommunityIcons name="bus-side" color={Secondary.text_link} size={15} />
                            <Text style={styles.link}>Ver Asientos Disponibles</Text>                
                        </TouchableOpacity>
                    </View>                
                </View>
                <ButtonGlobal
                    text="Registrar Asiento"
                    styles_button={{
                        width : "75%",
                        height : 45,
                        fontSize : 16,
                        paddingVertical : 15
                    }}
                    action={() => navigation.navigate("Home") }
                >
                    <Text style={styles.button_text_date}>El viaje comenzara alas 12:pm</Text>
                </ButtonGlobal>            
            </ScrollView>
        </View>        
    </HeaderMenu>
}

export default Selection;