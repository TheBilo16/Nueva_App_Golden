import React, { FC, useContext } from 'react';
import { View } from 'react-native';

//Components
import Header from './subcomponents/Header';
import Content from './subcomponents/Content';
import ActionsButtonFooter from '../../layers/ActionsButtonFooter';

//Context
import { SeatSelectionContext } from '../../context/SeatSelectionContext';
import HeaderMenu from '../../layers/HeaderMenu';
import Loading from '../../layers/Loading';

//Context
const BusSeatSelection : FC = () : JSX.Element => {
    const { onPressAccept, loadingInformation } = useContext(SeatSelectionContext);

    return <HeaderMenu title="Elige tu asiento" noDrawerActivate>
        <View style={{ flex : 1, backgroundColor : "#fff" }}>
            <Header />
            <Content />
            <ActionsButtonFooter
                titleButton="Borrar Seleccion"
                titleMainButton="Elegir Asiento"
                onPressButton={() => 0}
                onPressMainButton={onPressAccept!} 
            />
        </View>
        { loadingInformation ? <Loading /> : null }
    </HeaderMenu>
}

export default BusSeatSelection;