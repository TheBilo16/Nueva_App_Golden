import React, { useContext, FC } from "react";
import { View, Alert, ScrollView, ImageSourcePropType } from "react-native";
import styles from "./styles";

//Components
import ImageProfile from "./subcomponents/ImageProfile";
import InputProfile from "./subcomponents/InputProfile";
import HeaderMenu from "../../layers/HeaderMenu";
import ButtonGlobal from "../../layers/ButtonGlobal";

//Extra
import { AccountContext } from "../../context/AccountContext";

//Images
const UserDefault : ImageSourcePropType = require("../../../assets/usuario.png");

const Profile : FC = () : JSX.Element => {
    const { _clearAccountUser } = useContext(AccountContext);
    const onPressButtonLogOut = () => {
        Alert.alert("","¿Desea cerrar su sesión?",[
            { text : "Ok", onPress : () => _clearAccountUser ? _clearAccountUser() : null },
            { text : "Cancel" }
        ]);
    }

    return <HeaderMenu title="Perfil de Usuario">
        <View style={styles.container}>
            <ScrollView>
                <ImageProfile image={UserDefault} username="Billy Paredes Aycho" />    
                <View style={styles.content_inputs}>
                    <InputProfile 
                        title="Correo Electronico" 
                        icon="email"
                        defaultValue="billy_paredes-2000@hotmail.com" 
                    />
                    <InputProfile 
                        title="Telefono" 
                        icon="cellphone" 
                        defaultValue="913440869"
                    />
                    <InputProfile 
                        title="Codigo de Usuario" 
                        icon="shield-half-full"
                        defaultValue="1102886"
                    />
                    <InputProfile 
                        title="Contraseña" 
                        icon="home" 
                        margin={false}
                        security
                        defaultValue="billy123"
                    />
                </View>       
                <View style={styles.closeSesion}>
                    <ButtonGlobal 
                        text="Cerrar Sesión"
                        action={onPressButtonLogOut}
                    />                    
                </View>
            </ScrollView>
        </View>
    </HeaderMenu>
}

export default Profile;