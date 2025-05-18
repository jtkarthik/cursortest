// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBjNvd0Lp57bvlyTqt8LLTUAW-HD6nCL-g",
    authDomain: "firstproject-37dfb.firebaseapp.com",
    projectId: "firstproject-37dfb",
    storageBucket: "firstproject-37dfb.firebasestorage.app",
    messagingSenderId: "925041623144",
    appId: "1:925041623144:web:ba7212d9d0fedcc8c43bdd",
    measurementId: "G-N9WXRSL308"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

