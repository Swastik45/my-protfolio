// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBOtAGp9JCDLHtgXh-YaYrbjVVgzmzvEyk",
    authDomain: "protfolio-542a8.firebaseapp.com",
    projectId: "protfolio-542a8",
    storageBucket: "protfolio-542a8.appspot.com", 
    messagingSenderId: "390517797984",
    appId: "1:390517797984:web:3ca91ba89274d83284ff05",
    measurementId: "G-25XHYD5K9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app); // Initialize Firebase Storage

export { db, auth, storage }; // Export storage