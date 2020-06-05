import React, { FC, useContext } from 'react';
import { View, ScrollView } from 'react-native';
import styles from "./styles";

//Components
import Header from './subcomponents/Header';
import Content from './subcomponents/Content';
import HeaderMenu from '../../templates/HeaderMenu';
import Loading from '../../templates/Loading';
import Indicators from './subcomponents/Indicators';

//Context
import { SeatSelectionContext } from '../../context/SeatSelectionContext';
import SelectionButton from './subcomponents/SelectionButton';

//Context
const BusSeatSelection : FC = () : JSX.Element => {
    const { onPressAccept, sendInformation } = useContext(SeatSelectionContext);

    return <HeaderMenu title="Elige tu asiento" noDrawerActivate>
        <View style={styles.content}>
            <ScrollView>
                <Header />
                <Content />
                <Indicators /> 
                <SelectionButton onPress={onPressAccept!} />            
            </ScrollView>
        </View>
        { sendInformation ? <Loading /> : null }
    </HeaderMenu>
}

export default BusSeatSelection;