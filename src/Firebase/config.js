import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyBOSSmYI9UkopJz5CXziTJX_SzBuk1RDP0",
    authDomain: "gallery-1a177.firebaseapp.com",
    projectId: "gallery-1a177",
    storageBucket: "gallery-1a177.appspot.com",
    messagingSenderId: "893277350883",
    appId: "1:893277350883:web:405e232aceaa99e4488ed6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app)
export {app, storage}