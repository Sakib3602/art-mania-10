import {  createContext } from "react";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase.init";

// Create a Context
export const AuthContext = createContext(null);
const AuthProvaider = ({children}) => {


    // create user
    const passwordEmailCreate = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // user sign in with email pass
    const userSignIn = (email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // signOut
    const logout = ()=>{
        return signOut(auth)
    }



    const info = {
        passwordEmailCreate,
        userSignIn,
        logout,
    }
    return (
        <AuthContext.Provider value={info}>

            {children}
            
        </AuthContext.Provider>

       
    );
};

export default AuthProvaider;