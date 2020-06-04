import React, { useContext, FC } from "react";
import { View, ScrollView, ImageSourcePropType } from "react-native";
import styles from "./styles";

//Context
import { UserContext } from "../../context/UserContext";

//Components
import ImageProfile from "./subcomponents/ImageProfile";
import InputProfile from "./subcomponents/InputProfile";
import HeaderMenu from "../../templates/HeaderMenu";
import ButtonGlobal from "../../templates/ButtonGlobal";

//Utilies
import { messageLogOut } from "../../../services/Utility";

//Images
const UserDefault : ImageSourcePropType = require("../../../assets/usuario.png");

const UserProfile : FC = () : JSX.Element => {
    const { userInformation } = useContext(UserContext);
    
    return <HeaderMenu title="Perfil de Usuario">
        <View style={styles.container}>
            <ScrollView>
                <ImageProfile 
                    image={userInformation?.profileImage!} 
                    city={userInformation?.city!}
                    username={userInformation?.fullName!} 
                />    
                <View style={styles.content_inputs}>
                    <InputProfile 
                        title="Correo Electronico" 
                        icon="email"
                        defaultValue={userInformation?.email!}
                    />
                    <InputProfile 
                        title="Telefono" 
                        icon="cellphone" 
                        defaultValue={userInformation?.phone!}
                    />
                    <InputProfile 
                        title="Codigo de Usuario" 
                        icon="shield-half-full"
                        defaultValue={userInformation?.code!}
                    />
                    <InputProfile 
                        title="Contraseña" 
                        icon="home" 
                        margin={false}
                        security
                        defaultValue={userInformation?.password!}
                    />
                </View>       
                <View style={styles.closeSesion}>
                    <ButtonGlobal 
                        text="Cerrar Sesión"
                        onPress={messageLogOut}
                    />                    
                </View>
            </ScrollView>
        </View>
    </HeaderMenu>
}

export default UserProfile;