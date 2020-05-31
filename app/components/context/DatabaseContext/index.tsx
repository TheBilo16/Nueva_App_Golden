import React, { createContext, FC } from "react";

//Config
import database from "../../../database";
import { TypeDataBase } from "../../../config/types";

interface IContext {
    database : TypeDataBase
}

const DatabaseContext = createContext<Partial<IContext>>({});

const DatabaseProvider : FC = (props) : JSX.Element => {
    return <DatabaseContext.Provider value={{ database }}>
        { props.children }
    </DatabaseContext.Provider>
}

export {
    DatabaseContext,
    DatabaseProvider
}