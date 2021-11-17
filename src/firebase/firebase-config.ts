import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
 
 
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7sN1tn9z7xjP9IjIQCgaa667Q3nGNPOw",
    authDomain: "jornal-app-ts.firebaseapp.com",
    projectId: "jornal-app-ts",
    storageBucket: "jornal-app-ts.appspot.com",
    messagingSenderId: "374618030891",
    appId: "1:374618030891:web:88121b5455192d0a793b6e"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
const db = getFirestore();
 
const googleAuthProvider = new GoogleAuthProvider();
 
export{
    db,
    googleAuthProvider
}