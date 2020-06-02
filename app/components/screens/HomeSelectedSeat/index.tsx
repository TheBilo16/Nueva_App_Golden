import React, { FC, useEffect, useContext, Fragment } from "react";
import { View, Image, Text,ScrollView, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

//Components
import HeaderMenu from "../../layers/HeaderMenu";
import ActionsButtonFooter from "../../layers/ActionsButtonFooter";

//Context
import { TravelContext } from "../../context/TravelContext";

const Home : FC = () : JSX.Element => {
    //Hooks
    const navigation = useNavigation();
    
    //Context
    const { loadingTravelData , travelData } = useContext(TravelContext);

    if(loadingTravelData) return <Fragment />

    return <HeaderMenu title="Home" >
        <View style={styles.content}>
            <View style={styles.container_image}>
                <Image style={styles.image} source={{ uri : travelData?.image }} />
                <View style={styles.container}>
                    <View style={styles.title_container}>
                        <View>
                            <Text style={styles.title}>{travelData?.name}</Text>
                            <Text style={styles.date}>{travelData?.region}</Text>
                        </View>
                        <TouchableOpacity>
                            <Feather name="star" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <ScrollView>
                <View style={styles.container_information}>
                </View>
            </ScrollView>
            <ActionsButtonFooter
                titleButton="Ver Rutas"
                titleMainButton="Ver Mapa"
                onPressButton={() => navigation.navigate("Routes")}
                onPressMainButton={() => navigation.navigate("Map")}
            />
        </View>
    </HeaderMenu>
}

export default Home;