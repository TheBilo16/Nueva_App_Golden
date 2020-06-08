import React , { FC, useContext, Fragment } from "react";
import QRCode from "react-native-qrcode-svg";

//Components
import HeaderMenu from "../../templates/HeaderMenu";
import { UserContext } from "../../context/UserContext";

const Code : FC = () : JSX.Element => {
    const { userInformation } = useContext(UserContext);
    
    return <HeaderMenu title="Codigo QR">
        { userInformation ? <QRCode value={userInformation.documentImage} size={200} /> : null }
    </HeaderMenu>
}

export default Code;