import {getAuth, GoogleAuthProvider} from "firebase/auth"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginvirtualcourses-12f83.firebaseapp.com",
  projectId: "loginvirtualcourses-12f83",
  storageBucket: "loginvirtualcourses-12f83.firebasestorage.app",
  messagingSenderId: "588702644814",
  appId: "1:588702644814:web:12e3563075a4a72994211f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}