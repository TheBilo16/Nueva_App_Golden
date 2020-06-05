import React, { FC,  memo, useState } from "react";
import { View , TouchableOpacity, Text } from "react-native";
import styles from "./styles";

interface IProps {
    id? : number,
    name? : string,
    hide? : boolean,
    client? : string,
}   

const Seat : FC<IProps> = (props) : JSX.Element => {
    const [ selected , setSelected ] = useState(false)
    const { client , name, hide } = props;

    const onPress = () => {
        if(!client){
            setSelected(!selected);
        }
    }

    if(hide) return <View style={styles.divPress}></View>

    if(!client){
        return <>       
            <TouchableOpacity onPress={onPress}>
                { 
                    !selected ? 
                        <View style={[styles.divPress, styles.borderDiv]}>
                            <Text style={styles.text}>{ name }</Text>
                        </View> :
                        <View style={[styles.divPress, styles.borderDiv, styles.borderDivSelected, styles.selected]}>
                            <Text style={styles.text_selected}>{ name }</Text>
                        </View> 
                }
            </TouchableOpacity>
        </>
    }else{
        return(
            <View style={[styles.divPress, styles.borderDiv , styles.lock]}>
                <Text style={styles.text_lock}>{ name }</Text>
            </View>
        )
    }
}

export default memo(Seat);