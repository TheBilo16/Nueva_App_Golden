import React, { FC, useContext, Fragment } from "react";
import { View, ActivityIndicator,ScrollView } from "react-native";
import styles from "./styles";

//Components
import HeaderMenu from "../../templates/HeaderMenu";
import HeaderHome from "./subcomponents/HeaderHome";
import ViewContent from "./subcomponents/ViewContent";
import ScreenLoading from "../../templates/ScreenLoading";

//Context
import { TravelContext } from "../../context/TravelContext";

const Home : FC = () : JSX.Element => {
    //Context
    const { loadingTravelData , travelData, busDateTime } = useContext(TravelContext);

    return <HeaderMenu title="Inicio" >
        <View style={styles.content}>
            {
                loadingTravelData ? 
                    <ScreenLoading /> : 
                    <ScrollView>
                        <HeaderHome 
                            image={travelData?.image.url!} 
                            region={travelData?.region!} 
                            name={travelData?.name!} 
                        />
                        <ViewContent 
                            description={travelData?.description!} 
                            datetime={busDateTime!} 
                        />
                    </ScrollView>
            }
        </View>
    </HeaderMenu>
}

export default Home;