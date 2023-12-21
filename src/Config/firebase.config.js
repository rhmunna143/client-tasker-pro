// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDrDw-uJGTSqWk5bA_sLBDM3XPDr-2WYjA",
    authDomain: "tasker-pro1.firebaseapp.com",
    projectId: "tasker-pro1",
    storageBucket: "tasker-pro1.appspot.com",
    messagingSenderId: "255918270902",
    appId: "1:255918270902:web:d43345dda35332a9c7b917"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);