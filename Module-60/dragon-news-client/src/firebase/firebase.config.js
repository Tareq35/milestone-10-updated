// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAe1QLzAbxdCBy0hh6f9ZaCXCfLVAaV0dA",
    authDomain: "dragon-news-dfd9c.firebaseapp.com",
    projectId: "dragon-news-dfd9c",
    storageBucket: "dragon-news-dfd9c.appspot.com",
    messagingSenderId: "954013626363",
    appId: "1:954013626363:web:634e8e48beacd51382a55e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;