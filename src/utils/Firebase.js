// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBI4TNbS_v6t7-poi5orKUi4D37iegPkQ",
  authDomain: "codepark-app.firebaseapp.com",
  projectId: "codepark-app",
  storageBucket: "codepark-app.appspot.com",
  messagingSenderId: "727557891501",
  appId: "1:727557891501:web:dab1766037177a4809ed24",
  measurementId: "G-0GMRZMXL21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const getFirestoreInstance = getFirestore(app);

export {app, getFirestoreInstance, analytics};