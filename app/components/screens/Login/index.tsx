import React, { useState, useContext, FC } from "react";
import { 
    View, 
    Text,
    AsyncStorage,
    KeyboardAvoidingView,
    TouchableOpacity
} from "react-native";
import styles from "./styles";

//Components
import InputLogin from "./subcomponents/InputLogin";
import HeaderLogin from "./subcomponents/HeaderLogin";
import ButtonGlobal from "../../layers/ButtonGlobal";

//Extra
import { AccountContext } from "../../context/AccountContext";
import { USER_ID_STORAGE } from "../../../config/user";


const Login : FC = () : JSX.Element => {
    const { _refreshScreen } = useContext(AccountContext);
    const [ codeUser, setCode ] = useState<string>("");
    const [ password, setPassword ] = useState<string>("");

    const LoginVerify = async () : Promise<void> => {
        if(codeUser && password){

            const informationUser = JSON.stringify({
                id : new Date().getTime(),
                name : codeUser
            });

            try{
                await AsyncStorage.setItem(USER_ID_STORAGE,informationUser);
                _refreshScreen();
            }catch(e){
                console.log(e);
            }
        }else{
            alert("Rellene todos los campos porfavor");
        }
    }

    const RegisterScreen = () : void => {
        alert("En Construccion...");
    }

    return <View style={styles.container}>
        <HeaderLogin />
        <KeyboardAvoidingView behavior="padding">
            <View style={styles.container_input}>
                <InputLogin title="Codigo" icon="person-outline" action={setCode} />
                <InputLogin title="Password" icon="lock-outline" securityPassword={true} action={setPassword} />
            </View>
            <View style={styles.container_text_link}>
                <Text style={styles.text_normal}>¿Olvido su contraseña?</Text>
                <TouchableOpacity onPress={RegisterScreen}>
                    <Text style={styles.text_link}>Click aqui</Text>
                </TouchableOpacity>
            </View>
            <ButtonGlobal text="Login" action={LoginVerify} />
        </KeyboardAvoidingView>    
    </View> 
}

export default Login;