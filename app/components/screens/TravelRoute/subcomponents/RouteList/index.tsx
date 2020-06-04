import React, { FC } from "react";
import { View , ScrollView, Text } from "react-native";
import styles from "./styles";

//Components
import Route from "./subcomponents/Route";

//Interfaces
import { IBusStopData } from "../../../../../interfaces/Travel";

interface IProps {
    routeList : IBusStopData[]
}

const RouteList : FC<IProps> = (props) : JSX.Element => {
    const { routeList } = props;
    
    return <ScrollView>
        <View style={styles.content}>
            { routeList?.map((v,i) => <Route key={i} reached={v.reached} time={v.time} name={v.name} coords={v.coords} />) }
            <View style={styles.content_bar}>
                <View style={styles.bar}></View>
            </View>
        </View>
    </ScrollView>
}

export default RouteList;