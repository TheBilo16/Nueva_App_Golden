import React, { FC } from "react";
import { Text, Picker, View } from 'react-native';
import styles from "./styles";

interface IProps {
    asientos : string[] //Debug
}

const InputSelected : FC<IProps> = (props) : JSX.Element =>{
    const { asientos } = props;

    return <View style={styles.selected_container}>
        <View style={styles.container_title}>
            <Text style={styles.title}>Elige tu Asiento</Text>
        </View>
        <View style={styles.input_container}>
            <Picker style={styles.picker} itemStyle={styles.picker_child}>
                {asientos.map((v,i) => <Picker.Item key={i} label={`Asiento ${i}`} value={v} />)}
            </Picker>
        </View>            
    </View>
}

export default InputSelected;