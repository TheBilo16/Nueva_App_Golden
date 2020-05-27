import React, { createContext, FC, useContext, useState } from "react";
import { AccountContext } from "../AccountContext";

interface IState {
    token : string
}

interface IContext extends IState {}

const UserContext = createContext<Partial<IContext>>({});

const UserProvider : FC = (props) : JSX.Element => {
    const account = useContext(AccountContext);
    const [ token , setToken ] = useState<string>("");

    return <UserContext.Provider value={{ token }}>
        { props.children }
    </UserContext.Provider>
}

export {
    UserContext,
    UserProvider
}