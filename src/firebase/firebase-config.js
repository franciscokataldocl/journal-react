import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
 
 
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPPSVixHZbQuCpUGDtijC6eD0twDbALO8",
    authDomain: "react-curso-1f71d.firebaseapp.com",
    projectId: "react-curso-1f71d",
    storageBucket: "react-curso-1f71d.appspot.com",
    messagingSenderId: "1077998127509",
    appId: "1:1077998127509:web:0f13ec100d404878b68e9c"
  
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
const db = getFirestore(app);
 
const googleAuthProvider = new GoogleAuthProvider();
 
export{
    db,
    googleAuthProvider
}