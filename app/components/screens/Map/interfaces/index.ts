import { LatLng, Region } from "react-native-maps";

interface IStateCoords extends Region {
    latitude: number,
    longitude: number,
}

interface IMarkerData {
    name : string,
    coords : LatLng
}

export {
    IStateCoords,
    IMarkerData
}