import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARxmwEnoi8haB5dAZoOuFJOXIzrDkEGbc",
  authDomain: "chatgpt-clone-74dc2.firebaseapp.com",
  projectId: "chatgpt-clone-74dc2",
  storageBucket: "chatgpt-clone-74dc2.appspot.com",
  messagingSenderId: "435597795009",
  appId: "1:435597795009:web:6b22ceb47f87264668be40",
  measurementId: "G-PJK94XP8C3"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
