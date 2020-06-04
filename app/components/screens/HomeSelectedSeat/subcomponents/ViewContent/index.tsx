import React , { FC, useCallback, memo } from "react";
import { View, Text , ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

//Components
import DateCard from "../DateCard";
import ActionsButtonFooter from "../../../../templates/ActionsButtonFooter";
import { IBusDateTimeData } from "../../../../../interfaces/Travel";

interface IProps {
    description : string,
    datetime : IBusDateTimeData
}

const ViewContent : FC<IProps> = (props) : JSX.Element => {
    //Props
    const { description , datetime } = props;

    //Hooks
    const navigation = useNavigation();

    //Functions
    const onPressRoute = useCallback(() => navigation.navigate("Routes"), []);
    const onPressMap = useCallback(() => navigation.navigate("Map"), []); 

    return <ScrollView>
        <View style={styles.container_cards}>
            <DateCard title="Hora de Salida" 
                time={datetime.departureDate.time!} 
                date={datetime.departureDate.date!} 
            />
            <DateCard 
                title="Hora de Llegada" 
                time={datetime.arrivalDate.time!} 
                date={datetime.arrivalDate.date!} 
            />
        </View>
        <View style={styles.container_title}>
            <Text style={[styles.color_text,styles.title]}>Descripcion del Lugar</Text>
        </View>
        <View style={styles.container_description}>
            <Text style={[styles.color_text,styles.description]}>{description}</Text>
        </View>
        <ActionsButtonFooter
            titleButton="Rutas"
            titleMainButton="Mapa"
            onPressButton={onPressRoute}
            onPressMainButton={onPressMap}
        />
    </ScrollView>
}

export default memo(ViewContent);