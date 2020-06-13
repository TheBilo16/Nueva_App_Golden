import React, { useContext, Fragment } from "react";

//Components
import Auth from "./routes/Auth";
import NoAuth from "./routes/NoAuth";

//Context
import { AuthContext } from './context/AuthContext';
import { UserProvider } from "./context/UserContext";
import { SeatCheckProvider } from "./context/SeatCheckContext";

const Main = () : JSX.Element => {
    const { isLoading , authenticateUser } = useContext(AuthContext);

    if(isLoading) return <Fragment />

    if(authenticateUser){
        return <UserProvider>
            <SeatCheckProvider>
                <Auth />
            </SeatCheckProvider>
        </UserProvider>
    }else{
        return <NoAuth />
    }
}

export default Main;