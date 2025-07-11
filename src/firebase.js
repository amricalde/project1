// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDiCD0mrPJ6QENpuxyxAgsSsqQCWeH6cNo",
    authDomain: "project1-2d018.firebaseapp.com",
    projectId: "project1-2d018",
    storageBucket: "project1-2d018.firebasestorage.app",
    messagingSenderId: "839811215044",
    appId: "1:839811215044:web:38a0b77b3f2451db9c2391"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  
  export { db, auth };
  