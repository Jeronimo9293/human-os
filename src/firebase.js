// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, query, where } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzLjlF0Qwc7nLHw0ixplLKZktXIE7uCy4",
  authDomain: "human-os.firebaseapp.com",
  projectId: "human-os",
  storageBucket: "human-os.firebasestorage.app",
  messagingSenderId: "1073167565663",
  appId: "1:1073167565663:web:e3330f60a330fa0dcf2cea",
  measurementId: "G-MRR5MB03F5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export for use in other files
export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, collection, addDoc, getDocs, query, where };
