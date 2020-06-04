import React , { FC } from "react"
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons'; 
import styles from "./styles";

interface IProps {
    image : string,
    name : string,
    region : string
}

const HeaderHome : FC<IProps> = (props) : JSX.Element => {
    const { image , name , region } = props;

    return <View style={styles.container_image}>
        <Image style={styles.image} source={{ uri : image }} />
        <View style={styles.container}>
            <View style={styles.title_container}>
                <View>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.date}>{region}</Text>
                </View>
                <TouchableOpacity>
                    <Feather name="star" size={20} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    </View>
}

export default React.memo(HeaderHome);
