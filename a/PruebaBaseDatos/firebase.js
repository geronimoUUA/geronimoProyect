// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-analytics.js";
import {addDoc,  getFirestore, collection } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiLIm_t4K2U5zs2SIWEmodlMz1aVMJeiY",
  authDomain: "casino-112ad.firebaseapp.com",
  projectId: "casino-112ad",
  storageBucket: "casino-112ad.appspot.com",
  messagingSenderId: "668466494049",
  appId: "1:668466494049:web:d4e5a74cfd45e9cb31c820",
  measurementId: "G-83DK0BM9VB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore()

export const saveTask = (title, contraseña) =>{
    addDoc(collection(db, 'Users'), {nombre: title, contraseña}
    
    )}

    