import React , { createContext, FC, useState, useEffect, useContext } from "react";

//Extra
import { IContext } from "./interfaces";
import { DatabaseContext } from "../DatabaseContext";

const AuthContext = createContext<Partial<IContext>>({});

const AuthProvider : FC = (props) : JSX.Element => {
    const { database } = useContext(DatabaseContext);
    const [ isLoading , setLoading ] = useState<boolean>(true);
    const [ authenticateUser , setAuthenticateUser ] = useState<boolean>(false);

    useEffect(() => {
        const authAccount = database!.auth().onAuthStateChanged(async (user : any) => {
            if(user) setAuthenticateUser(true);
            else setAuthenticateUser(false);
            setLoading(false);
        })  

        return authAccount;
    },[])

    return <AuthContext.Provider value={{ 
        isLoading, 
        authenticateUser
    }}>
        { props.children }
    </AuthContext.Provider>
}

export {
    AuthContext,
    AuthProvider
}