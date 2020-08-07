import React , { FC, memo, useContext } from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";

//Context
import { UserContext } from "../../../../context/UserContext";

const UserInformation : FC = (props) : JSX.Element => {
    const { userInformation } = useContext(UserContext);

    return <View style={styles.user_information}>
        <View style={styles.container_image}>
            <Image source={{ uri : userInformation?.profileImage.url }} style={styles.image} />
        </View>
        <View style={styles.container_text}>
            <Text style={styles.fullname}>{userInformation?.fullName}</Text>
            <Text style={styles.city}>{userInformation?.city}</Text>                
        </View>
    </View>
}

export default memo(UserInformation);