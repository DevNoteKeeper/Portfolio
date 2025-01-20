// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1RoXRPYtWmOgexSrPiyEkzGgla6_2uh8",
  authDomain: "portfolio-c699d.firebaseapp.com",
  projectId: "portfolio-c699d",
  storageBucket: "portfolio-c699d.firebasestorage.app",
  messagingSenderId: "1058994298926",
  appId: "1:1058994298926:web:63198b1379e15256983fbf",
  measurementId: "G-0M48VLB82Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export {db, analytics};