import React , { FC, useContext } from 'react';
import { View } from 'react-native';
import styles from "./styles";

//Components
import HeaderMenu from '../../templates/HeaderMenu';
import RouteList from './subcomponents/RouteList';

//Context
import { TravelContext } from '../../context/TravelContext';
import MainTitle from './subcomponents/MainTitle';

const TravelRoute : FC = () : JSX.Element => {
    const { busStopData, travelData } = useContext(TravelContext);

    return <HeaderMenu title="Paraderos">
        <View style={styles.main_container}>
            <MainTitle TravelTitle={travelData?.name!} />
            <RouteList routeList={busStopData!} />
        </View>
    </HeaderMenu>
}

export default TravelRoute;