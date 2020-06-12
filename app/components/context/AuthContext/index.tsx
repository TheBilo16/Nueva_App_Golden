import React , { createContext, FC, useState, useEffect } from "react";
import { auth } from "firebase";

//Extra
import { IContext } from "./interfaces";

const AuthContext = createContext<Partial<IContext>>({});

const AuthProvider : FC = (props) : JSX.Element => {
    const [ isLoading , setLoading ] = useState<boolean>(true);
    const [ authenticateUser , setAuthenticateUser ] = useState<boolean>(false);

    useEffect(() => {
        const authAccount = auth().onAuthStateChanged((user : any) => {
            if(user) setAuthenticateUser(true);
            else setAuthenticateUser(false);
            setLoading(false);
        });

        return () => authAccount();
    },[]);

    return <AuthContext.Provider 
        value={{ 
            isLoading, 
            authenticateUser
        }}
    >
        { props.children }
    </AuthContext.Provider>
}

export {
    AuthContext,
    AuthProvider
}