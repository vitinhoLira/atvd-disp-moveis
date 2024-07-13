// fireBaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDVpm_xPJkmk4KFfGIIL3FYNAzqAnuhfII",
  authDomain: "atvd-disp-moveis.firebaseapp.com",
  projectId: "atvd-disp-moveis",
  storageBucket: "atvd-disp-moveis.appspot.com",
  messagingSenderId: "796743700932",
  appId: "1:796743700932:web:8fafc7b8c3ba804d0c1491"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
