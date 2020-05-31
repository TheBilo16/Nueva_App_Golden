import React, { FC } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import styles from "./styles";

//Extra
import { Base } from "../../../config/colors";

interface IProps {
    title : string,
    noDrawerActivate? : boolean
}

const HeaderMenu : FC<IProps> = (props) : JSX.Element => {
    const navigation = useNavigation();

    const { children , title, noDrawerActivate } = props;
    const ActivateDrawerMenu = () : void => navigation.dispatch(DrawerActions.openDrawer());

    var icon : string = "menu";
    var action = ActivateDrawerMenu;

    if(noDrawerActivate){
        icon = "";
        action = () => null;
    }

    return <>
        <View style={styles.header}>
            <View style={styles.headerContent}>
                {
                    icon ? <TouchableOpacity onPress={action}>
                        <MaterialCommunityIcons name={icon} size={28} color="#fff" />
                    </TouchableOpacity> :
                    <MaterialCommunityIcons name="home" size={28} color="#fff" />
                }
                <View>
                    <Text style={styles.title_header}>{title}</Text>
                </View>
            </View>
        </View>
        {children}
    </>
}

export default HeaderMenu;