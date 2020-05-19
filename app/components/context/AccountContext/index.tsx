import React , { Component , createContext,  } from "react";
import { AsyncStorage } from "react-native";

//Extra
import { USER_ID_STORAGE } from "../../config/user";
import { IProps , IState, IContext } from "./interfaces";

const AccountContext = createContext<IContext>({
    isLoading : true,
    isLogged : false,
    userId : ""
});

class AccountProvider extends Component<IProps,IState>{
    constructor(props : IProps){
        super(props);
        this.state = {
            isLoading : true,
            isLogged : false,
            userId : ""
        }
    }

    //Refrescar Pantallas
    private _refreshScreen = () : void => {
        this.setState({
            isLoading : true,
            isLogged : false
        });
        this._isLogged();
    }

    //Verificar Logeo
    public _isLogged = async () : Promise<void> => {
        try{
            const user = await AsyncStorage.getItem(USER_ID_STORAGE); 
            if(user){
                const data = JSON.parse(user);
                this.setState({ 
                    isLogged : true, 
                    userId : data.id 
                });
            }
            this.setState({ isLoading : false });
        }catch(e){
            console.log(e);
        }
    }

    //Cerrar Sesion
    public _clearAccountUser = async () : Promise<void> => {
        try{
            await AsyncStorage.clear();
            this._refreshScreen();
        }catch(e){
            console.log(e);
        }        
    }

    componentDidMount(){
        this._isLogged();
    }

    render(){
        const { state , props, _isLogged, _clearAccountUser } = this;
        const { children } = props;

        return <AccountContext.Provider value={{
            ...state,
            _isLogged,
            _clearAccountUser
        }}>
            {children}
        </AccountContext.Provider>
    }
}

export {
    AccountContext,
    AccountProvider
}