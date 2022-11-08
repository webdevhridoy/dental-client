// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD9yleXqAN-H-1cBsFK2qhiB1H90Djzn2s",
    authDomain: "bandaid-dental.firebaseapp.com",
    projectId: "bandaid-dental",
    storageBucket: "bandaid-dental.appspot.com",
    messagingSenderId: "521026923821",
    appId: "1:521026923821:web:a2fe160bc0e02582e5b7a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;