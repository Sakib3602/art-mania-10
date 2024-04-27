// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC2-O-615upoUgbzmay8UBkYo7z-pAEL8",
  authDomain: "artandcraft-f5054.firebaseapp.com",
  projectId: "artandcraft-f5054",
  storageBucket: "artandcraft-f5054.appspot.com",
  messagingSenderId: "997932478053",
  appId: "1:997932478053:web:27743b3e240927204b208c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);