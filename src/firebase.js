import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDWM5-wM2Mq-B45LQbUd_LnflvQJ5dTluc",
  authDomain: "login-auth-cbc4e.firebaseapp.com",
  projectId: "login-auth-cbc4e",
  storageBucket: "login-auth-cbc4e.appspot.com",
  messagingSenderId: "998454902210",
  appId: "1:998454902210:web:21800f9e69d3c59a7cea5b",
  measurementId: "G-XHS1KYW9CL",
});
const auth = firebase.auth();
export { auth };
