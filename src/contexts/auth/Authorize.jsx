import React from "react";
import { Navigate } from "react-router-dom"
import UserContext from "./UserContext";

const Authorize = ({children}) => {

    const user = React.useContext(UserContext);
    
    if(user?.isLogged)
    return (
        <>
            {children}
        </>
        )

    return <Navigate to='/login' />
}

export default Authorize;