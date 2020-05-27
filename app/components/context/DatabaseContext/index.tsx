import React, { Component, createContext, FC } from "react";
import db from "../../../database";

interface IContext {
    database : any
}

const DatabaseContext = createContext<Partial<IContext>>({});

const DatabaseProvider : FC = (props) : JSX.Element => {
    const database = db;

    return <DatabaseContext.Provider value={{ database }}>
        { props.children }
    </DatabaseContext.Provider>
}

export {
    DatabaseContext,
    DatabaseProvider
}