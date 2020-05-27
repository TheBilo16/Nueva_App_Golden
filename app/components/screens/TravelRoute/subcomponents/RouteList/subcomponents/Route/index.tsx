import React, { FC } from "react";
import { View , Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons , EvilIcons } from '@expo/vector-icons'; 
import styles from "./styles";

//Extra
import { Secondary, Base } from "../../../../../../../config/colors";
import { IRoute } from "../../../../../../../interfaces/Route";

interface IProps extends IRoute {
}

const Route : FC<IProps> = (props) : JSX.Element => {
    const { id , name, available } = props;
    const navigation = useNavigation();

    var stylesCustom = {
        bgContainer : "#F1F1F1",
        colorAvailable : Secondary.text_light
    };

    if(available){
        stylesCustom.colorAvailable = "#fff";
        stylesCustom.bgContainer = Base.yellow
    }

    const onPress = () => {
        navigation.navigate("Map");
    }

    return <View style={[styles.route_container,{ backgroundColor : stylesCustom.bgContainer }]}>
        <View style={styles.information}>
            <View>
                <MaterialCommunityIcons size={20} color={stylesCustom.colorAvailable} name="map-marker-outline" />
            </View>
            <View>
                <Text style={[ styles.title ,{ color : stylesCustom.colorAvailable }]}>{name}</Text>
            </View>            
        </View>
        <View style={styles.btn_press}>
            <TouchableOpacity onPress={onPress}>
                <EvilIcons size={30} color={stylesCustom.colorAvailable} name="chevron-right" />
            </TouchableOpacity>
        </View>
    </View>
}

export default React.memo(Route);