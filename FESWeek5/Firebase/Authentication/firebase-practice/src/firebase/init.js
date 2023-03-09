// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvDWwqL6QnjuPC_JDxslfrm6oy2f8qtAg",
  authDomain: "fir-practice-71e33.firebaseapp.com",
  projectId: "fir-practice-71e33",
  storageBucket: "fir-practice-71e33.appspot.com",
  messagingSenderId: "305574337090",
  appId: "1:305574337090:web:25848e3b7be5c42d47ebdb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();