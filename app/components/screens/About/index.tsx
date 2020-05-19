import React, { FC } from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";

//Components
import HeaderMenu from "../../layers/HeaderMenu";

//Extra
import { Secondary } from "../../config/colors";

//Images
const ImageGolden = require("../../assets/images/minilogo.png");

const About : FC = () : JSX.Element => {
    return <HeaderMenu title="Sobre Nosotros">
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.container_image}>
                    <Image source={ImageGolden} resizeMode="stretch" />
                </View>
                <View style={styles.icon}>
                    <MaterialCommunityIcons name="office-building" color={Secondary.} size={90} />            
                </View>
                <View style={styles.text}>
                    <Text style={styles.desc}>
                        Somos una empresa dedicada a el transporte interpronvincial.
                        Tenemos 10 años de experiencia en este mundo y comprendemos las
                        necesidades de nuestros clientes. 
                        Somos una empresa dedicada a el transporte interpronvincial.
                        Tenemos 10 años de experiencia en este mundo y comprendemos las
                        necesidades de nuestros clientes.
                    </Text>
                </View>
                <View style={styles.about}>
                    <MaterialCommunityIcons name="email-outline" size={13} color={Secondary.text_link} />
                    <Text style={styles.text_about}>golden_express@gmail.com</Text>    
                </View>       
            </ScrollView>
        </View>
    </HeaderMenu>
}

export default About;