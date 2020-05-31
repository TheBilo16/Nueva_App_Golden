import React , { createContext, FC, useState, useEffect, useContext } from "react";

//Extra
import { IContext } from "./interfaces";
import { DatabaseContext } from "../DatabaseContext";
import { AsyncStorage } from "react-native";
import { KEY_USER_ID } from "../../../config/system";

const AuthContext = createContext<Partial<IContext>>({});

const AuthProvider : FC = (props) : JSX.Element => {
    const { database } = useContext(DatabaseContext);
    const [ isLoading , setLoading ] = useState<boolean>(true);
    const [ isLogged , setLogged ] = useState<boolean>(false);

    useEffect(() => {
        database!.auth().onAuthStateChanged(async (user : any) => {
            if(user){
                try{
                    let key = await AsyncStorage.setItem(KEY_USER_ID,user.uid)
                    setLogged(true);
                }catch(e){
                    console.log(e);
                }
            }else{
                setLogged(false);
            }
            setLoading(false);
        })  
    },[])

    return <AuthContext.Provider value={{ 
        isLoading, 
        isLogged 
    }}>
        { props.children }
    </AuthContext.Provider>
}

export {
    AuthContext,
    AuthProvider
}