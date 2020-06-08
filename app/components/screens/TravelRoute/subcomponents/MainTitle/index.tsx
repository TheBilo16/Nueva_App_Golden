import React, { FC, useEffect } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import moment from "moment";
import useTimer from "./hooks/useTimer";

interface IProps {
    TravelTitle : string,
}

const Header : FC<IProps> = (props) : JSX.Element => {
    //Title
    const { TravelTitle } = props;
    
    //Hooks
    const { time } = useTimer();
    
    //Functions
    const firstLetter = (word : string) : string => word[0];
    
    return <View style={styles.main_title}>
        <View style={[styles.DFlex,styles.content_circle]}>
            <View style={[styles.DFlex,styles.circle]}>
                <Text style={styles.letter}>{firstLetter(TravelTitle)}</Text>
            </View>
        </View>
        <View style={[styles.content_text]}>
            <Text style={styles.title}>{TravelTitle}</Text>
            <Text style={styles.date}>Hora : {time}</Text>
        </View>
    </View>
}

export default React.memo(Header);