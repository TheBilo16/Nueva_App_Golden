import React, { FC, useCallback, useContext } from 'react';
import { View } from 'react-native';

//Components
import HeaderMenu from '../../../../layers/HeaderMenu';
import ActionsButtonFooter from '../../../../layers/ActionsButtonFooter';
import Header from './subcomponents/Header';
import Content from './subcomponents/Content';
import { HomeContext } from '../../context';

const Selection : FC = () : JSX.Element => {
    const { onPressClear, onPressAccept } = useContext(HomeContext);

    return <View style={{ flex : 1, backgroundColor : "#fff" }}>
        <Header />
        <Content />
        <ActionsButtonFooter 
            titleButton="Borrar Seleccion"
            titleMainButton="Elegir Asiento"
            onPressButton={onPressClear}
            onPressMainButton={onPressAccept} 
        />
    </View>
}

export default Selection;