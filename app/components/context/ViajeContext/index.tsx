import React, { createContext, Component } from "react";
import { AccountContext } from "../AccountContext";

interface IProps {}
interface IState {}

interface IContext extends IState {
    getParaderos() : object,
}

const ViajeContext = createContext<Partial<IContext>>({});

class ViajeProvider extends Component<IProps,IState>{
    constructor(props : IState){
        super(props);
    }

    static contextType = AccountContext;
    
    render(){
        const { props , state } = this;
        const { children } = props;

        return <ViajeContext.Provider value={{ ...state }}>
            {children}
        </ViajeContext.Provider>
    }
}

export {
    ViajeContext,
    ViajeProvider
}