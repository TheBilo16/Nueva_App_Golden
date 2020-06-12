import React , { FC, useContext } from 'react';
import { View } from 'react-native';
import styles from "./styles";

//Components
import HeaderMenu from '../../templates/HeaderMenu';
import RouteList from './subcomponents/RouteList';
import ScreenLoading from '../../templates/ScreenLoading';

//Context
import { TravelContext } from '../../context/TravelContext';
import MainTitle from './subcomponents/MainTitle';

const TravelRoute : FC = () : JSX.Element => {
    const { loadingTravelData , busStopData, travelData } = useContext(TravelContext);

    return <HeaderMenu title="Paraderos">
        {
            !loadingTravelData ? 
                <View style={styles.main_container}>
                    <MainTitle TravelTitle={travelData?.name!} />
                    <RouteList routeList={busStopData!} />
                </View> :
                <ScreenLoading />
        }
    </HeaderMenu>
}

export default TravelRoute;