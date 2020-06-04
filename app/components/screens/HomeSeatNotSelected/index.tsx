import React, { FC, useContext } from 'react';
import { View } from 'react-native';

//Components
import Header from './subcomponents/Header';
import Content from './subcomponents/Content';
import ActionsButtonFooter from '../../templates/ActionsButtonFooter';

//Context
import { SeatSelectionContext } from '../../context/SeatSelectionContext';
import HeaderMenu from '../../templates/HeaderMenu';
import Loading from '../../templates/Loading';

//Context
const BusSeatSelection : FC = () : JSX.Element => {
    const { onPressAccept, sendInformation } = useContext(SeatSelectionContext);

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
        { sendInformation ? <Loading /> : null }
    </HeaderMenu>
}

export default BusSeatSelection;