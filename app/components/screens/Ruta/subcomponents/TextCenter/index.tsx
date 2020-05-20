import React , { FC } from "react";
import { View, Text } from "react-native";
import styles from "./styles";

//Extra
import { Secondary } from "../../../../config/colors";

interface IProps {
    title : string, 
    description : string, 
    especial? : boolean
}

const TextCenter : FC<IProps> = (props) : JSX.Element => {
    const { title , description, especial } = props;

    return <View style={styles.textCenter}>
        <Text style={styles.title}>{title}</Text>
        { especial ? 
            <Text style={[styles.description,{ color : Secondary.text_link }]}>{description}</Text> :
            <Text style={styles.description}>{description}</Text>
        }
    </View>
}

export default TextCenter;