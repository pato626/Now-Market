// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClSPQ7xhkfEUn7BULbFqIAY44--RKK3wE",
  authDomain: "nowmarket-861d8.firebaseapp.com",
  projectId: "nowmarket-861d8",
  storageBucket: "nowmarket-861d8.appspot.com",
  messagingSenderId: "311091448394",
  appId: "1:311091448394:web:d1ef4777cb704a8590f4b3"
};

// Initialize Firebase



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);