import React , { FC, useContext, memo } from "react";
import { View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import styles from "./styles";

//Subcomponents
import { UserContext } from "../../../../context/UserContext";

const QRImage : FC = (props) : JSX.Element => {
    const { userInformation } = useContext(UserContext);

    return <View style={styles.qr_container}>
        <QRCode value={userInformation?.documentImage.url!} size={180} />
    </View>
}

export default memo(QRImage);