// import firebase from 'firebase/app';

// const firebaseConfig = {
//     //...
// };
  
// firebase.initializeApp(firebaseConfig);

// export const auth = firebase.auth();

// export const firestore = firebase.firestore();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAdbV3Qa0ZxH7PqD6qaTSRCTHxkdviGUBU",
    authDomain: "event-management-system-6ea86.firebaseapp.com",
    projectId: "event-management-system-6ea86",
    storageBucket: "event-management-system-6ea86.appspot.com",
    messagingSenderId: "834557948441",
    appId: "1:834557948441:web:a02082a3648e37479d7088"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db= getFirestore(app);
export {auth} ;
export default db;