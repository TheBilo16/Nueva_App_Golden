import React from "react";
import { StyleSheet, Text, Picker, View } from 'react-native';
import { Secondary } from "../../../Global/Colors_Base";

const styles = StyleSheet.create({
    selected_container : {
        width : "80%",
    },
    container_title : {
        paddingBottom : 10
    },
    title : {
        color: Secondary.text_dark,
        fontWeight : "bold",
        fontSize : 14
    },
    input_container : {
        width : "100%",
        borderColor : Secondary.borders,
        borderWidth : 1,
        paddingLeft : 10
    },
    picker : {
        height : 32,
        textAlign : "center",
        color: Secondary.text_dark
    },
    picker_child : {
        fontSize : 11
    }
})

function InputSelected({ asientos }){
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