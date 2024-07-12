// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVpm_xPJkmk4KFfGIIL3FYNAzqAnuhfII",
  authDomain: "atvd-disp-moveis.firebaseapp.com",
  projectId: "atvd-disp-moveis",
  storageBucket: "atvd-disp-moveis.appspot.com",
  messagingSenderId: "796743700932",
  appId: "1:796743700932:web:8fafc7b8c3ba804d0c1491"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)