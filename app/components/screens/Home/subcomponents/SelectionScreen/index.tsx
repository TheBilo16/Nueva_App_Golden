import React, { FC, useCallback } from 'react';
import { View } from 'react-native';

//Components
import HeaderMenu from '../../../../layers/HeaderMenu';
import ActionsButtonFooter from '../../../../layers/ActionsButtonFooter';
import Header from './subcomponents/Header';
import Content from './subcomponents/Content';

const Selection : FC = () : JSX.Element => {
    const onPressButton = useCallback(() : void => {
        alert("Button Clear");
    },[])

    const onPressMainButton = useCallback(() : void => {
        alert("Button Accept");
    },[])


    return <HeaderMenu title="Inicio">
        <View style={{ flex : 1, backgroundColor : "#fff" }}>
            <Header />
            <Content />
            <ActionsButtonFooter 
                onPressButton={onPressButton}
                onPressMainButton={onPressMainButton} 
            />
        </View>
    </HeaderMenu>
}

export default Selection;