import React, { FC,  memo, useContext } from "react";
import { View , TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { SeatSelectionContext } from "../../../../../../context/SeatSelectionContext";

//Interfaces
interface IProps {
    id? : number,
    name? : string,
    hide? : boolean,
    client? : string,
    selected? : boolean
}   

const Seat : FC<IProps> = (props) : JSX.Element => {
    //Context
    const { updateSeatNumber } = useContext(SeatSelectionContext);
    
    //Props
    const { id , client , name, hide, selected } = props;

    //Functions
    const onPress = () => updateSeatNumber!(id!);

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