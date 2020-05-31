import React, { createContext, FC, useContext, useState } from "react";
import { IUserInformation } from "../../../interfaces/User";

interface IContext {
    userInformation : IUserInformation,
    updateUserInformation(information : IUserInformation) : void
}

const UserContext = createContext<Partial<IContext>>({});

const UserProvider : FC = (props) : JSX.Element => {
    const [ userInformation , setUserInformation ] = useState<IUserInformation>();

    const updateUserInformation = (information : IUserInformation) : void => {
        setUserInformation(information);
    }

    return <UserContext.Provider value={{ userInformation , updateUserInformation }}>
        { props.children }
    </UserContext.Provider>
}

export {
    UserContext,
    UserProvider
}