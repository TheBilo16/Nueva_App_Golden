import React, { FC } from "react";
import { Entypo, AntDesign } from '@expo/vector-icons';

//Components
import HeaderMenu from "../../templates/HeaderMenu";
import ScreenLoading from "../../templates/ScreenLoading";
import ErrorScreen from "./ErrorScreen";
import GeolocationScreen from "./GeolocationScreen";

//Hooks
import useLocationMaps from "./hooks/useLocationMap";
import { Secondary } from "../../../config/colors";

const Map : FC = () : JSX.Element => {
  const { loadingCoords, coords, markers , polyline, applicationPermits, locationPermits, getPosition, requestPermision } = useLocationMaps();

    if(!applicationPermits){
        return <ErrorScreen
            icon={<AntDesign name="lock" size={80} color={Secondary.text_link} />} 
            title="La aplicacion no tiene los permisos necesarios."
            onPress={requestPermision}
        />
    }else if(!locationPermits){
        return <ErrorScreen
            icon={<Entypo name="location" size={96} color={Secondary.text_link} />} 
            title="El GPS no esta activado."
            onPress={getPosition}
        />
    }else{
        return <HeaderMenu title="Mapa de Viaje" >
            { !loadingCoords ? <GeolocationScreen coords={coords!} markers={markers!} polyline={polyline!} /> : <ScreenLoading /> }
        </HeaderMenu>
    }
}

export default Map;