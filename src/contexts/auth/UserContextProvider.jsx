import { useState } from "react";
import UserContext from "./UserContext"

const UserContextProvider = ({children}) => {

    const [user, setUser] = useState({username: 'Guest', isLogged: false});

    const contextValues = {user, setUser}
    
    return (
        <UserContext.Provider value={contextValues}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;