import React, { FC, useCallback } from "react";
import { View } from "react-native";
import styles from "./styles";

//Components
import ActionButton from "./subcomponents/ActionButton";

interface IProps {
    onPressButton() : void,
    onPressMainButton() : void
}

const ActionsButonFooter : FC<IProps> = (props) : JSX.Element => {
    const { onPressButton , onPressMainButton } = props;

    return <View style={styles.container_buttons}>
        <ActionButton ghost title="Borrar Seleccion" onPress={onPressButton} />
        <ActionButton title="Elegir Asiento" onPress={onPressMainButton} />
    </View>
}

export default React.memo(ActionsButonFooter);