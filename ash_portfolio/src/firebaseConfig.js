// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAsnCObJ23IDmLwmCs-P8CXYDc6NYPhMqI",
    authDomain: "farmer-e9a77.firebaseapp.com",
    projectId: "farmer-e9a77",
    storageBucket: "farmer-e9a77.appspot.com",
    messagingSenderId: "883633554057",
    appId: "1:883633554057:web:eef9d391cb3598b5f4fc58",
    measurementId: "G-58SBH1M838"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
