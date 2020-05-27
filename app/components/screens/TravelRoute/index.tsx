import React , { FC } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import faker from "faker";
import styles from "./styles";

//Components
import HeaderMenu from '../../layers/HeaderMenu';
import ActionsButtonFooter from '../../layers/ActionsButtonFooter';
import MainTitle from './subcomponents/MainTitle';
import RouteList from './subcomponents/RouteList';
import { IRoute } from '../../../interfaces/Route';

const TravelRoute : FC = () : JSX.Element => {
    const navigation = useNavigation();
    const onPress = () : void => navigation.navigate("Home");
    const onPressMain = () : void => navigation.navigate("Map");

    //Debug
    const routeList : IRoute[] = [
        {
            id : faker.date.recent() + "",
            name : faker.address.city(),
            available : true
        },
        {
            id : faker.date.recent() + "",
            name : faker.address.city(),
            available : false
        },
        {
            id : faker.date.recent() + "",
            name : faker.address.city(),
            available : false
        },
        {
            id : faker.date.recent() + "",
            name : faker.address.city(),
            available : false
        }
    ]

    return <HeaderMenu title="Paraderos">
        <View style={styles.main_container}>
            <MainTitle />
            <RouteList routeList={routeList} />
            <ActionsButtonFooter
                titleButton="Informacion"
                titleMainButton="Ver Mapa"
                onPressButton={onPress}
                onPressMainButton={onPressMain}
            />
        </View>
    </HeaderMenu>
}

export default TravelRoute;