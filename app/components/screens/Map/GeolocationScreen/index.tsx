import React , { FC, memo } from "react";
import { View } from "react-native";
import MapView, { LatLng, Marker, Polyline } from "react-native-maps";
import styles from "./styles";

//Extra
import { Secondary } from "../../../../config/colors";

//Image
const MarkerImage = require("../../../../assets/map/marcador.png");

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

    return <View style={styles.container}>
        <MapView style={styles.map} initialRegion={coords} showsUserLocation={true} zoomControlEnabled={false} minZoomLevel={10} >
            { 
                markers?.map((v,i) => {
                    if(v.destiny) return <Marker key={i} image={MarkerImage} title={v.name} coordinate={v.coords} />
                    return <Marker key={i} coordinate={v.coords} title={v.name} />
                }) 
            }
            <Polyline coordinates={polyline!} strokeColor={Secondary.text_dark} strokeWidth={4} />
        </MapView>
    </View> 
}

export default memo(GeolocationScreen);