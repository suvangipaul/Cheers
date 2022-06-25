import { createContext, useContext, useState } from "react";
import Deso from 'deso-protocol';

const userDesoAuthContext = createContext() 

export const DesoUserAuthContextProvider = ({ children }) => {
    const [ user, setUser ] = useState(null)
    const [ key, setKey ] = useState("")
    const deso = new Deso();

    const LoginDeso = async () => {
        const request = 3;
        const response = await deso.identity.login(request)
        setUser(true)
        setKey(response.key)    
    }

    const LogoutDeso = async () => {
        // const request = null;
        setUser(null)
        const response = await deso.identity.logout(key)
        if (response) {
        }
        
        setKey("")
    }


    return (
        <userDesoAuthContext.Provider
            value={{ user, LoginDeso, LogoutDeso }}
        >
        {children}
        </userDesoAuthContext.Provider>
    )
}

export const useDesoAuth = () => {
    return useContext(userDesoAuthContext);
}