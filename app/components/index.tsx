import React, { useContext, Fragment } from "react";
import { DotIndicator } from "react-native-indicators";

//Components
import Auth from "./routes/Auth";
import NoAuth from "./routes/NoAuth";

//Context
import { AuthContext } from './context/AuthContext';
import { UserProvider } from "./context/UserContext";

//Extras
import { Secondary } from '../config/colors';

const Main = () : JSX.Element => {
    const { isLoading , isLogged } = useContext(AuthContext);

    if(!isLoading){
        return <UserProvider>
            { isLogged ? <Auth /> : <NoAuth /> }
        </UserProvider>
    }else{
        return <Fragment />
    }
}

export default Main;