// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase.firestore";

// Your web app's Firebase configuration Object
const firebaseConfig = {
  apiKey: "AIzaSyDRDbPBu8JQfY1M6c7I3u9nOtZNJAb30yw",
  authDomain: "fir-gallery-4711b.firebaseapp.com",
  projectId: "fir-gallery-4711b",
  storageBucket: "fir-gallery-4711b.appspot.com",
  messagingSenderId: "302103921138",
  appId: "1:302103921138:web:f7fc7df61d4d0944e46b6b",
};

// Initialize Firebase connect to the backend
firebase.initializeApp(firebaseConfig);

//interaction with storage service on the backend we use projectStorage
const projectStorage = firebase.storage();

//any time we want to interact with the firestore database we use projectFirestore
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
