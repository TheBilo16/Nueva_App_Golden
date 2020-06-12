import React, { useState, FC, useCallback } from "react";
import { View, KeyboardAvoidingView} from "react-native";
import { auth } from "firebase";
import styles from "./styles";

//Components
import Input from "./subcomponents/Input";
import Header from "./subcomponents/Header";
import ButtonGlobal from "../../templates/ButtonGlobal";

//Extra
import ModalLoading from "../../templates/ModalLoading";

const Login : FC = () : JSX.Element => {
    //States
    const [ loading , setLoading ] = useState<boolean>(false);
    const [ userCode , setUserCode ] = useState<string>("");
    const [ password , setPassword ] = useState<string>("");

    //Actions
    const dataVerification = useCallback(async () : Promise<void> => {
        if(userCode && password){
            setLoading(true);
            try{
                await auth().signInWithEmailAndPassword(userCode + "@gmail.com",password);
            }catch(e){
                setLoading(false);
                alert(e.message);
            }
        }else{
            alert("Rellene todos los campos porfavor");
        }
    },[ userCode , password ]);

    return <>
        <View style={styles.container}>
            <Header />
            <KeyboardAvoidingView behavior="padding">
                <View style={styles.container_input}>
                    <Input title="Codigo" icon="person-outline" onChangeText={setUserCode} />
                    <Input title="Password" icon="lock-outline" securityPassword={true} onChangeText={setPassword} />
                </View>
                <ButtonGlobal text="Login" onPress={dataVerification} />
            </KeyboardAvoidingView>    
        </View> 
        { loading ? <ModalLoading /> : null }
    </>
}

export default Login;