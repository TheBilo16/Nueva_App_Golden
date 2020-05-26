import React, { FC } from "react";
import { View, Image, Text, ScrollView, ImageSourcePropType } from "react-native";
import styles from "./styles";

//Components
import HeaderMenu from "../../layers/HeaderMenu";
import ActionButton from "../../layers/ActionButton";

//Images
const ImageGolden : ImageSourcePropType = require("../../../assets/images/minilogo.png");

const About : FC = () : JSX.Element => {
    const onPress = () : void => {
        alert("hola");
    }

    return <HeaderMenu title="Sobre Nosotros">
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.global_container}>
                    <View style={styles.container_image}>
                        <Image source={ImageGolden} resizeMode="stretch" />
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
                </View>
            </ScrollView> 
            <View style={styles.footer}>
                <Text style={styles.text_footer}>Visita Nuestra Pagina Web</Text>
                <ActionButton 
                    title="Presiona Aqui"
                    onPress={onPress}
                />
            </View>     
        </View>
    </HeaderMenu>
}

export default About;