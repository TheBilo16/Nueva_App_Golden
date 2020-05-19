import React, { Component, createContext } from "react";
import { AccountContext } from "../AccountContext";

interface IProps {}
interface IState {
    userData : string
}

const UserContext = createContext<any>(null);

class UserProvider extends Component<IProps,IState>{
    constructor(props : IProps){
        super(props);
        this.state = {
            userData : ""
        }
    }

    static contextType = AccountContext;

    UNSAFE_componentWillMount(){
        // const { userId } = this.context;
    }

    render(){
        const { props, state } = this;
        const { children } = props;

        return <UserContext.Provider value={{ ...state }}>
            {children}
        </UserContext.Provider>
    }
}

export {
    UserContext,
    UserProvider
}