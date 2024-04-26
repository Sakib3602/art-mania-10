

import {  createContext } from "react";

// Create a Context
export const AuthContext = createContext(null);
const AuthProvaider = ({children}) => {


    const info = {
        name : 'sakib'
    }
    return (
        <AuthContext.Provider value={info}>

            {children}
            
        </AuthContext.Provider>

       
    );
};

export default AuthProvaider;