import React , { createContext, FC, useState, useEffect,  } from "react";
import { AsyncStorage } from "react-native";

//Extra
import { IContext } from "./interfaces";
import { KEY_TOKEN, MESSAGES } from "../../../config/Token";
import { verifyTokenExpiration } from "../../../services/Token";

const AccountContext = createContext<Partial<IContext>>({});

const AccountProvider : FC = (props) : JSX.Element => {
    const [ token , setToken ] = useState<string>("");
    const [ isLoading , setLoading ] = useState<boolean>(true);
    const [ isLogged , setLogged ] = useState<boolean>(false);

    const _refreshScreen = () : void => {
        setLoading(true);
        setLogged(false);
        _isLogged();
    }

    const _isLogged = async () : Promise<void> => {
        try{
            const tokenSave = await AsyncStorage.getItem(KEY_TOKEN); 
            if(tokenSave){
                const token = tokenSave.split(" ")[1];

                switch(verifyTokenExpiration(token)){
                    case MESSAGES.success : 
                        setLogged(true);
                        setToken(token);
                        break;
                    case MESSAGES.expired : 
                        await AsyncStorage.removeItem(KEY_TOKEN);
                        break;
                }
            }

            setLoading(false);
        }catch(e){
            console.log(e);
        }
    }

    const _clearAccountUser = async () : Promise<void> => {
        try{
            await AsyncStorage.removeItem(KEY_TOKEN);
            _refreshScreen();
        }catch(e){
            console.log(e);
        }        
    }

    useEffect(() => {
        _isLogged();
    },[])

    return <AccountContext.Provider value={{ 
        token, 
        isLoading, 
        isLogged, 
        _isLogged,
        _refreshScreen, 
        _clearAccountUser 
    }}>
        { props.children }
    </AccountContext.Provider>
}

export {
    AccountContext,
    AccountProvider
}