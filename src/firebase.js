// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrBPIGtAbKWPNWwFwwFI2_NuWo-JY5IIs",
  authDomain: "diplom-6cfe2.firebaseapp.com",
  projectId: "diplom-6cfe2",
  storageBucket: "diplom-6cfe2.appspot.com",
  messagingSenderId: "104898799547",
  appId: "1:104898799547:web:2b5d6221ef0f3b7b90069e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// получить список категорий (коллекция документов).
export const categoryCollection = collection(db, 'categories');
