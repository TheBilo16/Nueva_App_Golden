import React, { FC, Fragment } from "react";
import MapView, { Marker, Polyline } from "react-native-maps";
import { View, ActivityIndicator } from "react-native";
import styles from "./styles";

//Components
import HeaderMenu from "../../templates/HeaderMenu";

//Hooks
import useLocationMaps from "./hooks/useLocationMap";

//Extra
import { Secondary } from "../../../config/colors";

const Map : FC = () : JSX.Element => {
  const { loadingCoords, coords, markers , polyline } = useLocationMaps();

    return <HeaderMenu title="Mapa de Viaje" >
        {
           !loadingCoords ?
                <View style={styles.container}>
                    <MapView 
                        style={styles.map} 
                        region={coords} 
                        showsUserLocation={true} 
                        zoomEnabled={false}
                        minZoomLevel={10}
                    >
                        { markers?.map((v,i) => <Marker key={i} coordinate={v.coords} title={v.name} />) }
                        { 
                            polyline ? 
                                <Polyline 
                                    coordinates={polyline!} 
                                    strokeColor={Secondary.text_link}
                                    strokeWidth={3}
                                    lineJoin="round"
                                    lineCap="round"
                                /> 
                                : <Fragment /> 
                        }
                    </MapView>
              </View> :
            <View style={styles.container}>
                <ActivityIndicator size={50} color={Secondary.text_link} />
            </View>
        }
    </HeaderMenu>
}

export default Map;