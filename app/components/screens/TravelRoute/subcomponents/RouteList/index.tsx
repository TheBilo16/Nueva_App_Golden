import React, { FC } from "react";
import { View , ScrollView, Text } from "react-native";
import styles from "./styles";

//Components
import Route from "./subcomponents/Route";

//Interfaces
import { IRoute } from "../../../../../interfaces/Route";

interface IProps {
    routeList : IRoute[]
}

const RouteList : FC<IProps> = (props) : JSX.Element => {
    const { routeList } = props;
    
    return <ScrollView style={styles.scroll}>
        <View style={styles.container}>
            <View style={styles.next_container}>
                { routeList?.map((v,i) => <Route key={i} id={v.id} name={v.name} available={v.available} />) }
            </View>
        </View>
    </ScrollView>
}

export default RouteList;