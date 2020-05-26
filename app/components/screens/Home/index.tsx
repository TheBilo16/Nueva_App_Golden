import React, { FC } from "react";
// import { BallIndicator } from "react-native-indicators";

//Components
import BusSeatSelection from "./subcomponents/BusSeatSelection";
import MainScreen from "./subcomponents/MainScreen";
import useChekingAsiento from "./hooks/useChekingAsiento";

//Context
import { BusSeatSelectionProvider } from "./context/BusSeatSelectionContext";
import HeaderMenu from "../../layers/HeaderMenu";

const Home : FC = () : JSX.Element => {
    const { loading , asientoSeleccionado } = useChekingAsiento();

    return <HeaderMenu title="Inicio">
        {
            !loading ?
                !asientoSeleccionado ? 
                    <BusSeatSelectionProvider>
                        <BusSeatSelection />
                    </BusSeatSelectionProvider> : 
                    <MainScreen /> 
                : null
        }
    </HeaderMenu>
}

export default Home;