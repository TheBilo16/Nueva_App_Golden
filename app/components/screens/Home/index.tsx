import React, { FC } from "react";
// import { BallIndicator } from "react-native-indicators";

//Components
import SelectionScreen from "./subcomponents/SelectionScreen";
import MainScreen from "./subcomponents/MainScreen";
import useChekingAsiento from "./hooks/useChekingAsiento";

//Context
import { HomeProvider } from "./context";
import HeaderMenu from "../../layers/HeaderMenu";

const Home : FC = () : JSX.Element => {
    const { loading , asientoSeleccionado } = useChekingAsiento();

    return <HeaderMenu title="Inicio">
        {
            !loading ?
                <HomeProvider>
                    { !asientoSeleccionado ? <SelectionScreen /> : <MainScreen /> }
                </HomeProvider> :
                null
        }
    </HeaderMenu>
}

export default Home;