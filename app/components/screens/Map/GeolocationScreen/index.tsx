import React , { FC, memo } from "react";
import { View } from "react-native";
import MapView, { LatLng, Marker, Polyline } from "react-native-maps";
import styles from "./styles";

//Extra
import { Secondary } from "../../../../config/colors";

//Interfaces
import { IMarkerData, IStateCoords } from "../interfaces"

interface IProps {
    coords : IStateCoords,
    markers : IMarkerData[],
    polyline : LatLng[]
}

const GeolocationScreen : FC<IProps> = (props) : JSX.Element => {
    //Props
    const { markers, polyline , coords } = props;
    
    //Variables
    const MapViewConfig = {
        initialRegion : coords,
        showsUserLocation : true,
        zoomEnabled : true,
        minZoomLevel : 10
    }

    return <View style={styles.container}>
        <MapView style={styles.map} initialRegion={coords} showsUserLocation={true} zoomControlEnabled={true} minZoomLevel={10} >
            { markers?.map((v,i) => <Marker key={i} coordinate={v.coords} title={v.name} />) }
            <Polyline coordinates={polyline!} strokeColor={Secondary.text_link} strokeWidth={3} />
        </MapView>
    </View> 
}

export default memo(GeolocationScreen);