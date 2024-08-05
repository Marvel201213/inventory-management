// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxC2D956ltq1b921MviLWM7GFSTGZtDiA",
  authDomain: "inventory-management-13f32.firebaseapp.com",
  projectId: "inventory-management-13f32",
  storageBucket: "inventory-management-13f32.appspot.com",
  messagingSenderId: "417536285187",
  appId: "1:417536285187:web:b636dd3ec73590e3700c36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export {firestore};