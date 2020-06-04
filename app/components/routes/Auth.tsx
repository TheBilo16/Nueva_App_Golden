import React, { FC, useContext } from "react";
import { ActivityIndicator, View } from "react-native";

//Context
import { TravelProvider } from "../context/TravelContext";
import { SeatCheckContext } from "../context/SeatCheckContext";
import { UserContext } from "../context/UserContext";

//Componentes
import SeatNotSelectedStack from "./Stacks/SeatNotSelectedStack";
import SelectedSeatStack from "./Stacks/SelectedSeatStack";
import { SeatSelectionProvider } from "../context/SeatSelectionContext";

//Extra
import { Secondary } from "../../config/colors";

const Auth : FC = () : JSX.Element => {
    const { seatSelected } = useContext(UserContext);
    const { isLoadingUserInformation } = useContext(SeatCheckContext);

    if(isLoadingUserInformation){
        return <View style={{ flex : 1, justifyContent : "center", alignItems : "center" }}>
            <ActivityIndicator color={Secondary.text_link} size={40} />
        </View>
    }

    if(!seatSelected){
        return <SeatSelectionProvider>
            <SeatNotSelectedStack />
        </SeatSelectionProvider>
    }else{
        return <TravelProvider>
            <SelectedSeatStack />
        </TravelProvider>
    }
}

export default Auth;