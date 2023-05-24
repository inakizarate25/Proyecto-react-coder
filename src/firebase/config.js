// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDD29GCMx4F9VK0vCiP-8ZaK29KhnP9KpM",
  authDomain: "react-coder-eed9e.firebaseapp.com",
  projectId: "react-coder-eed9e",
  storageBucket: "react-coder-eed9e.appspot.com",
  messagingSenderId: "884362497858",
  appId: "1:884362497858:web:d4ee30aef872e0d19942db"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()