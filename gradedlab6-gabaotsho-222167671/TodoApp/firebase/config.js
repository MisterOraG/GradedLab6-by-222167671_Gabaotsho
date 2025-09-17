// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGrtUw-TcncBhFLvX1tbd2612s9xAifaQ",
  authDomain: "todoapp-1acf4.firebaseapp.com",
  projectId: "todoapp-1acf4",
  storageBucket: "todoapp-1acf4.firebasestorage.app",
  messagingSenderId: "810059729669",
  appId: "1:810059729669:web:0e9927c1b2055484d4456c",
  measurementId: "G-V37D8YM2BT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);