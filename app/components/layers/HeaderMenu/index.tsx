import React, { FC } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import styles from "./styles";

interface IProps {
    title : string,
    iconBack? : boolean
}

const HeaderMenu : FC<IProps> = (props) : JSX.Element => {
    const navigation = useNavigation();

    const { children , title, iconBack } = props;
    const ActivateDrawerMenu = () : void => navigation.dispatch(DrawerActions.openDrawer());
    const BackScreen = () : void => navigation.goBack();

    var icon : string = "menu";
    var action = ActivateDrawerMenu;

    if(iconBack){
        icon = "arrow-left";
        action = BackScreen;
    }

    return <>
        <View style={styles.header}>
            <View style={styles.headerContent}>
                <TouchableOpacity onPress={action}>
                    <MaterialCommunityIcons name={icon} size={28} color="#fff" />
                </TouchableOpacity>
                <View>
                    <Text style={styles.title_header}>{title}</Text>
                </View>
            </View>
        </View>
        {children}
    </>
}

export default HeaderMenu;