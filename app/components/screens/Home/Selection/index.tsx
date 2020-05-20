import React, { FC } from 'react';
import { Text, Image, View, ScrollView, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";

//Components
import InputSelected from './subcomponents/InputSelected';
import ButtonGlobal from '../../../layers/ButtonGlobal';
import HeaderMenu from '../../../layers/HeaderMenu';

//Extra
import { Secondary } from '../../../config/colors';

//Images
const BusImage : ImageSourcePropType = require("../../../../assets/asiento_bus.png");

const Selection : FC = () : JSX.Element => {
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