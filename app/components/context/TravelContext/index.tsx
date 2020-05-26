import React, { createContext, Component } from "react";
import { AccountContext } from "../AccountContext";

interface IProps {}
interface IState {}

interface IContext extends IState {
    getParaderos() : object,
}

const TravelContext = createContext<Partial<IContext>>({});

class TravelProvider extends Component<IProps,IState>{
    constructor(props : IState){
        super(props);
    }

    static contextType = AccountContext;
    
    render(){
        const { props , state } = this;
        const { children } = props;

        return <TravelContext.Provider value={{ ...state }}>
            {children}
        </TravelContext.Provider>
    }
}

export {
    TravelContext,
    TravelProvider
}