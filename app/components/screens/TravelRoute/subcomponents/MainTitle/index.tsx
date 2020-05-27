import React, { FC } from "react";
import { View, Text, ImageSourcePropType, Image } from "react-native";
import moment from "moment";
import faker from "faker";
import styles from "./styles";

//Images
const TravelIcon : ImageSourcePropType = require("../../../../../assets/icons/travel_icon.png");

interface IProps {
}

const Header : FC = () : JSX.Element => {
    return <View style={styles.main_title}>
        <View style={styles.container_title}>
            <Text style={styles.title}>Viaje a {`${faker.address.country()} / ${faker.address.city()}`}</Text>
            <Text style={styles.date}>{moment().format("L")}</Text>
        </View>
        <View>
            <Image source={TravelIcon} resizeMode="stretch" />
        </View>
    </View>
}

export default React.memo(Header);