import React, { FC, useCallback } from "react";
import { View } from "react-native";
import styles from "./styles";

//Components
import ActionButton from "../ActionButton";

interface IProps {
    titleButton : string,
    titleMainButton : string,
    onPressButton() : void,
    onPressMainButton() : void
}

const ActionsButonFooter : FC<IProps> = (props) : JSX.Element => {
    const { titleButton, titleMainButton, onPressButton , onPressMainButton } = props;

    return <View style={styles.container_buttons}>
        <ActionButton ghost title={titleButton} onPress={onPressButton} />
        <ActionButton title={titleMainButton} onPress={onPressMainButton} />
    </View>
}

export default React.memo(ActionsButonFooter);