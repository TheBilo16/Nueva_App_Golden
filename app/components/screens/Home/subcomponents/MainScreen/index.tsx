import React, { FC, useState } from "react";
import { View, Image, Text, ImageSourcePropType } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";

//Components
import TitleBus from "./subcomponents/TitleBus";
import ImagesPlace from "./subcomponents/ImagesPlace";
import ModalImage from "./subcomponents/ModalImage";
import HeaderMenu from "../../../../layers/HeaderMenu";

//Images
const AsientoBus : ImageSourcePropType = require("../../../../../assets/asiento_bus.png");

const DataViaje : FC = () : JSX.Element => {
    const [ activateModal , setActivateModal ] = useState<boolean>(false);
    const [ imageModal , setImageModal ] = useState<ImageSourcePropType>(0);

    const onActiveModal = (image : ImageSourcePropType) : void => {
        if(!activateModal){
            setActivateModal(true);
            setImageModal(image);
        }else{
            setActivateModal(false);
        }
    }

    return <HeaderMenu title="Inicio">
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.container_image}>
                    <Text style={styles.image_title}>Asiento 23</Text>
                    <Image source={AsientoBus} style={styles.image} />
                </View>
                <View style={{alignItems : "center"}}>
                    <TitleBus title="Procedencia" description="Lima / Callao" />
                    <TitleBus title="Destino" description="San Juan de Miraflores" />                
                </View>
                <ImagesPlace onPress={onActiveModal} />
            </ScrollView>
            <ModalImage 
                image={imageModal} 
                active={activateModal}
                onPress={onActiveModal}
            />
        </View>
    </HeaderMenu>
}

export default DataViaje;