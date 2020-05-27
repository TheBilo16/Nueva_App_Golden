import React, { createContext, FC, useContext } from "react";
import { AccountContext } from "../AccountContext";
import { DatabaseContext } from "../DatabaseContext";

interface IState {}

interface IContext extends IState {
    getParaderos() : void,
}

const TravelContext = createContext<Partial<IContext>>({});

const TravelProvider : FC = (props) : JSX.Element => {
    const database = useContext(DatabaseContext);
    const account = useContext(AccountContext);
    
    const getParaderos = () : void => {}

    return <TravelContext.Provider value={{ getParaderos }}>
        { props.children }
    </TravelContext.Provider>
}

export {
    TravelContext,
    TravelProvider
}