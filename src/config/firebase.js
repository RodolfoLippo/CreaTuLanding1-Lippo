//import { initializeApp } from "firebase/app";
//import { getFirestore } from "firebase/firestore";

//const firebaseConfig = {
 // apiKey: import.meta.env.VITE_API_KEY,
 // authDomain: import.meta.env.VITE_AUTH_DOMAIN,
 // projectId: import.meta.env.VITE_PROJECT_ID,
 // storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
 // messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
 // appId: import.meta.env.VITE_APP_ID
// };

//const app = initializeApp(firebaseConfig);
//const db = getFirestore(app);

//export { db };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCumcAXwNUm7gaAYyHD5UE1EnwPIAzClo0",
  authDomain: "casant-5395d.firebaseapp.com",
  projectId: "casant-5395d",
  storageBucket: "casant-5395d.firebasestorage.app",
  messagingSenderId: "617691522789",
  appId: "1:617691522789:web:345c93769c002cc778560c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };