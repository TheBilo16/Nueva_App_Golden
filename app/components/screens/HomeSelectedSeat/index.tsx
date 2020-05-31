import React, { FC, useEffect, useContext } from "react";
import { View, Image, Text,ScrollView, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

//Context
import { DatabaseContext } from "../../context/DatabaseContext";

//Components
import HeaderMenu from "../../layers/HeaderMenu";
import ActionsButtonFooter from "../../layers/ActionsButtonFooter";

const Home : FC = () : JSX.Element => {
    const { database } = useContext(DatabaseContext);
    const navigation = useNavigation();

    const requestTravelData = async () : Promise<void> => {
    }

    useEffect(() => {
        requestTravelData();
    },[])

    return <HeaderMenu title="Home" >
        <View style={styles.content}>
            <View style={styles.container_image}>
                <Image style={styles.image} source={{ uri : "https://i.ytimg.com/vi/W6f5Db6MZp0/maxresdefault.jpg" }} />
                <View style={styles.container}>
                    <View style={styles.title_container}>
                        <View>
                            <Text style={styles.title}>Ciudad de Lima</Text>
                            <Text style={styles.date}>Lima / Callao</Text>
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