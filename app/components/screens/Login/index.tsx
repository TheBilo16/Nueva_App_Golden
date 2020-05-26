import React, { useState, useContext, FC } from "react";
import { View, AsyncStorage, KeyboardAvoidingView } from "react-native";
import styles from "./styles";

//Components
import Input from "./subcomponents/Input";
import Header from "./subcomponents/Header";
import ButtonGlobal from "../../layers/ButtonGlobal";

//Extra
import { AccountContext } from "../../context/AccountContext";
import { USER_ID_STORAGE } from "../../../config/system";


const Login : FC = () : JSX.Element => {
    const { _refreshScreen } = useContext(AccountContext);
    const [ codeUser, setCode ] = useState<string>("");
    const [ password, setPassword ] = useState<string>("");

    const dataVerification = async () : Promise<void> => {
        if(codeUser && password){

            const informationUser = JSON.stringify({
                id : new Date().getTime(),
                name : codeUser
            });

            try{
                await AsyncStorage.setItem(USER_ID_STORAGE,informationUser);
                _refreshScreen!();
            }catch(e){
                console.log(e);
            }
        }else{
            alert("Rellene todos los campos porfavor");
        }
    }

    return <View style={styles.container}>
        <Header />
        <KeyboardAvoidingView behavior="padding">
            <View style={styles.container_input}>
                <Input title="Codigo" icon="person-outline" onPress={setCode} />
                <Input title="Password" icon="lock-outline" securityPassword={true} onPress={setPassword} />
            </View>
            {/* <View style={styles.container_text_link}>
                <Text style={styles.text_normal}>¿Olvido su contraseña?</Text>
                <Text style={styles.text_link}>Click aqui</Text>
            </View> */}
            <ButtonGlobal text="Login" onPress={dataVerification} />
        </KeyboardAvoidingView>    
    </View> 
}

export default Login;