import React, { useContext, Fragment } from "react";

//Components
import Auth from "./routes/Auth";
import NoAuth from "./routes/NoAuth";

//Context
import { AuthContext } from './context/AuthContext';
import { UserProvider } from "./context/UserContext";

const Main = () : JSX.Element => {
    const { isLoading , authenticateUser } = useContext(AuthContext);

    if(isLoading) return <Fragment />

    return <UserProvider>
        { authenticateUser ? <Auth /> : <NoAuth /> }
    </UserProvider>
}

export default Main;