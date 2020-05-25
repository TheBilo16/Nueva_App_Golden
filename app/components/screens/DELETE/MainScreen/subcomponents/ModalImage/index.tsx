import React, { FC } from "react";
import { Image, View, ImageSourcePropType } from "react-native";
import Modal from "react-native-modal";
import styles from "./styles";

interface IProps {
    active : boolean,
    onPress : any,
    image : ImageSourcePropType
}

const ModalImage : FC<IProps> = (props) : JSX.Element => {
    const { active, onPress, image } = props;

    return <Modal 
        isVisible={active}
        onBackButtonPress={onPress}
        backdropOpacity={0.8}
    >
        <View style={styles.modal_content}>
            <Image source={image} style={{ width: "100%", height : "100%" }} resizeMode="cover" />            
        </View>
    </Modal>
}

export default ModalImage;