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
    const [mainLoading, setMainLoading] = useState(true)

  // create user
  const passwordEmailCreate = (email, password) => {
    setMainLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // user sign in with email pass
  const userSignIn = (email, password) => {
    setMainLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google
  const googleLogIn = ()=>{
    setMainLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  // github
  const githubLogin = ()=>{
    setMainLoading(true)
    return signInWithPopup(auth, GithubProvider)
  }

  // signOut
  const logout = () => {
    setMainLoading(true)
    return signOut(auth);
  };

  //on auth
  useEffect(() => {
    const DeleteIt = onAuthStateChanged(auth, (user) => {
      
      setPerson(user)
      setMainLoading(false)
      
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
    mainLoading,
  };
  
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvaider;
