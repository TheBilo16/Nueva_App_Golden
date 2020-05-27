import React, { useState, useContext, FC, useCallback } from "react";
import { View, AsyncStorage, KeyboardAvoidingView } from "react-native";
import faker from "faker";
import styles from "./styles";

//Components
import Input from "./subcomponents/Input";
import Header from "./subcomponents/Header";
import ButtonGlobal from "../../layers/ButtonGlobal";

//Extra
import { AccountContext } from "../../context/AccountContext";
import { IUserData } from "../../../interfaces/User";
import { KEY_TOKEN } from "../../../config/Token";
import { createToken } from "../../../services/Token";


const Login : FC = () : JSX.Element => {
    const { _refreshScreen } = useContext(AccountContext);
    const [ userCode, setUserCode ] = useState<string>("");
    const [ password, setPassword ] = useState<string>("");

    const dataVerification = useCallback(async () : Promise<void> => {
        if(userCode && password){
            const payload : IUserData = {
                id : faker.random.alphaNumeric(),
                name : userCode
            };

            const token : string = "Bearer " + createToken(payload);

            try{
                await AsyncStorage.setItem(KEY_TOKEN,token);
                _refreshScreen!();
            }catch(e){
                console.log(e);
            }
        }else{
            alert("Rellene todos los campos porfavor");
        }
    },[userCode,password]);

    return <View style={styles.container}>
        <Header />
        <KeyboardAvoidingView behavior="padding">
            <View style={styles.container_input}>
                <Input title="Codigo" icon="person-outline" onChangeText={setUserCode} />
                <Input title="Password" icon="lock-outline" securityPassword={true} onChangeText={setPassword} />
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