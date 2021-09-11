import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {

    apiKey: "AIzaSyCnieMXMe2BB7H0caYEV8vj9zQeANm1VGU",
  
    authDomain: "tinder-clone-for-dogs.firebaseapp.com",
  
    projectId: "tinder-clone-for-dogs",
  
    storageBucket: "tinder-clone-for-dogs.appspot.com",
  
    messagingSenderId: "428962310122",
  
    appId: "1:428962310122:web:4ad1d308cec1bc1776f493",
  
    measurementId: "G-PLDQJM2QGE"
  
  };
  // eslint-disable-next-line no-unused-vars
  const firebaseApp =initializeApp (firebaseConfig);
  const db=getFirestore();
  export default db;