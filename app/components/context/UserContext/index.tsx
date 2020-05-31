import React, { createContext, FC, useContext, useState } from "react";
import { IUserInformation } from "../../../interfaces/User";

interface IContext {
    userInformation : IUserInformation,
    travelDestiny : string,
    updateUserInformation(information : IUserInformation) : void,
    updateTravelDestiny(value : string) : void
}

const UserContext = createContext<Partial<IContext>>({});

const UserProvider : FC = (props) : JSX.Element => {
    const [ userInformation , setUserInformation ] = useState<IUserInformation>();
    const [ travelDestiny, setTravelDestiny ] = useState<string>();

    const updateUserInformation = (information : IUserInformation) : void => {
        setUserInformation(information);
    }

    const updateTravelDestiny = (value : string) => setTravelDestiny(value);

    return <UserContext.Provider value={{ userInformation , updateUserInformation, travelDestiny, updateTravelDestiny }}>
        { props.children }
    </UserContext.Provider>
}

export {
    UserContext,
    UserProvider
}