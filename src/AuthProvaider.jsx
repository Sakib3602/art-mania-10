import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./firebase.init";

// Create a Context
export const AuthContext = createContext(null);



const AuthProvaider = ({ children }) => {
    const [person,setPerson] = useState(null)

  // create user
  const passwordEmailCreate = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // user sign in with email pass
  const userSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // signOut
  const logout = () => {
    return signOut(auth);
  };

  //on auth
  useEffect(() => {
    const DeleteIt = onAuthStateChanged(auth, (user) => {
      
      if (user) {
        setPerson(user)
        
        console.log("on auth", user);
      } 
      
    });

    return () => {
      DeleteIt();
    };
  }, []);

  const info = {
    passwordEmailCreate,
    userSignIn,
    logout,
    person,
    setPerson,
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvaider;
