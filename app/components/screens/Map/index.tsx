import React, { FC, useState, useEffect } from "react";
import MapView from "react-native-maps";
import { View, ActivityIndicator } from "react-native";
import styles from "./styles";

//Components
import HeaderMenu from "../../layers/HeaderMenu";

//Hooks
import useLocationMaps from "./hooks/useLocationMap";

//Extra
import { Secondary } from "../../../config/colors";
import MapCustom from "./config/MapCustom.json";

const Map : FC = () : JSX.Element => {
    const { loadingCoords, coords } = useLocationMaps();

    return <HeaderMenu title="Mapa de Viaje" >
        {
            !loadingCoords ?
                <View style={styles.container}>
                    <MapView 
                        style={styles.map} 
                        region={coords}
                        showsUserLocation={true}
                        // customMapStyle={MapCustom}
                    />
                </View> :
                <View style={styles.container}>
                    <ActivityIndicator size={50} color={Secondary.text_link} />
                </View>
        }
    </HeaderMenu>
}

export default Map;