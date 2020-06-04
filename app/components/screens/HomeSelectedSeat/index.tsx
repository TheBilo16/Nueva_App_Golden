import React, { FC, useContext, Fragment } from "react";
import { View, ActivityIndicator } from "react-native";
import styles from "./styles";

//Components
import HeaderMenu from "../../templates/HeaderMenu";
import HeaderHome from "./subcomponents/HeaderHome";


//Context
import { TravelContext } from "../../context/TravelContext";
import ViewContent from "./subcomponents/ViewContent";
import { Secondary } from "../../../config/colors";

const Home : FC = () : JSX.Element => {
    //Context
    const { loadingTravelData , travelData, busDateTime } = useContext(TravelContext);

    return <HeaderMenu title="Home" >
        <View style={styles.content}>
            {
                loadingTravelData ? <ActivityIndicator color={Secondary.text_link} /> : <>
                    <HeaderHome 
                        image={travelData?.image!} 
                        region={travelData?.region!} 
                        name={travelData?.name!} 
                    />
                    <ViewContent 
                        description={travelData?.description!} 
                        datetime={busDateTime!} 
                    />
                </>
            }
        </View>
    </HeaderMenu>
}

export default Home;