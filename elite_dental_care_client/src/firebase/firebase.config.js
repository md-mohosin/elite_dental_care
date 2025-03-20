// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg-dOe9VTPHRZd9xb10zIMStkFLM3R2Qk",
  authDomain: "elite-dental-care-9e4f0.firebaseapp.com",
  projectId: "elite-dental-care-9e4f0",
  storageBucket: "elite-dental-care-9e4f0.firebasestorage.app",
  messagingSenderId: "579056955350",
  appId: "1:579056955350:web:235887956ac0cbff123e77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)