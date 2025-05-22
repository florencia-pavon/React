
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "proyectofinal-pavon.firebaseapp.com",
  projectId: "proyectofinal-pavon",
  storageBucket: "proyectofinal-pavon.firebasestorage.app",
  messagingSenderId: "992086459231",
  appId: "1:992086459231:web:8797425b424943126cacea"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
