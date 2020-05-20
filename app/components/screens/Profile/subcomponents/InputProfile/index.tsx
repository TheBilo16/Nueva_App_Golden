import React, { FC } from "react";
import { View, Text, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";

//Extra
import { Secondary } from "../../../../config/colors";

interface IProps {
    title : string,
    icon : string,
    defaultValue : string | "",
    margin? : boolean,
    security? : boolean
}

const InputProfile : FC<IProps> = (props) : JSX.Element => {
    const { title , icon, defaultValue, margin, security } = props;
    const marginCustom = {
        marginBottom : margin ? 20 : 0
    }

    return <View style={[styles.input_content,marginCustom]}>
        <View style={styles.title_content}>
            <MaterialCommunityIcons name={icon}  color={Secondary.text_dark} size={14} />
            <Text style={styles.title}>{title}</Text>
        </View>
        <View>
            <TextInput
                style={styles.input}
                editable={false}
                defaultValue={defaultValue}
                secureTextEntry={security}
            />
        </View>
    </View>
}

InputProfile.defaultProps = {
    margin : true
}

export default InputProfile;