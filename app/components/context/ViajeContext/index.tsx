import React, { createContext, Component } from "react";
import { AccountContext } from "../AccountContext";

interface IProps {}
interface IState {
    viajeData : object,
    mapData : object
}

const ViajeContext = createContext<IState>({
    viajeData : {},
    mapData : {}
});

class ViajeProvider extends Component<IProps,IState>{
    constructor(props : IState){
        super(props);
        this.state = {
            viajeData : {},
            mapData : {},
        }
    }

    static contextType = AccountContext;

    _getViajeData = () : void => {
        //Traer datos del API REST
        const { userId } = this.context;        
    }

    _getMapData = () : void => {
        //Traer datos del API REST
        const { userId } = this.context;
    }

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