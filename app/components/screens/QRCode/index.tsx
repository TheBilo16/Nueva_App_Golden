import React , { FC } from "react";
import { View } from "react-native";
import styles from "./styles";

//Components
import HeaderMenu from "../../templates/HeaderMenu";
import QRImage from "./subcomponents/QRImage";
import UserInformation from "./subcomponents/UserInformation";
import FooterText from "./subcomponents/FooterText";

const Code : FC = () : JSX.Element => {
    return <HeaderMenu title="Codigo QR">
        <View style={styles.main_container}>
            <UserInformation />
            <QRImage />  
            <FooterText />          
        </View>
    </HeaderMenu>
}

export default Code;