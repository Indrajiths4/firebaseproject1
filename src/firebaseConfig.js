// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2k6w638YPYURvNagpBc6j_bAHpVUjC0o",
  authDomain: "fir-frontend-458bd.firebaseapp.com",
  projectId: "fir-frontend-458bd",
  storageBucket: "fir-frontend-458bd.appspot.com",
  messagingSenderId: "771246768967",
  appId: "1:771246768967:web:beb44c735db24e00104262"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)