import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

const GithubProvider = new GithubAuthProvider();

const googleProvider = new GoogleAuthProvider();
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

  // google
  const googleLogIn = ()=>{
    return signInWithPopup(auth, googleProvider)
  }

  // github
  const githubLogin = ()=>{
    return signInWithPopup(auth, GithubProvider)
  }

  // signOut
  const logout = () => {
    return signOut(auth);
  };

  //on auth
  useEffect(() => {
    const DeleteIt = onAuthStateChanged(auth, (user) => {
      
      if (user) {
       
        
        console.log("on auth", user);
      } 
      setPerson(user)
      
    });

    return () => {
      DeleteIt();
    };
  }, [person]);

  const info = {
    passwordEmailCreate,
    userSignIn,
    logout,
    person,
    setPerson,
    googleLogIn,
    githubLogin,
  };
  
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvaider;
