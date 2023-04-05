// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "@firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5oLZwojx8ZJqgLeoVXchnjrCOf84udt0",
  authDomain: "monitor-web-e525f.firebaseapp.com",
  projectId: "monitor-web-e525f",
  storageBucket: "monitor-web-e525f.appspot.com",
  messagingSenderId: "1006493045630",
  appId: "1:1006493045630:web:a5cb20e056525419f7992f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);