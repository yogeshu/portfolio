// src/lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// PASTE YOUR CONFIG FROM STEP 2 HERE
const firebaseConfig = {
apiKey: "AIzaSyCprlezWK7ZPOuw2ZpiuinGs5bNKXSqJ9Y",
  authDomain: "consult-yogeshbhavsar.firebaseapp.com",
  projectId: "consult-yogeshbhavsar",
  storageBucket: "consult-yogeshbhavsar.firebasestorage.app",
  messagingSenderId: "754167328688",
  appId: "1:754167328688:web:579756da35eb5c2c243075"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };