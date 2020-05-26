import React, { FC, useCallback, useContext } from 'react';
import { View } from 'react-native';

//Components
import ActionsButtonFooter from '../../../../layers/ActionsButtonFooter';
import Header from './subcomponents/Header';
import Content from './subcomponents/Content';

//Context
import { BusSeatSelectionContext } from '../../context/BusSeatSelectionContext';

const BusSeatSelection : FC = () : JSX.Element => {
    const { onPressClear, onPressAccept } = useContext(BusSeatSelectionContext);

    return <View style={{ flex : 1, backgroundColor : "#fff" }}>
        <Header />
        <Content />
        <ActionsButtonFooter 
            titleButton="Borrar Seleccion"
            titleMainButton="Elegir Asiento"
            onPressButton={onPressClear!}
            onPressMainButton={onPressAccept!} 
        />
    </View>
}

export default BusSeatSelection;