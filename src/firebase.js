// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBrhlOoXWxn9r0iYiSIlB820T6ysuJREgQ",
    authDomain: "e-clone-746ed.firebaseapp.com",
    projectId: "e-clone-746ed",
    storageBucket: "e-clone-746ed.appspot.com",
    messagingSenderId: "139448925893",
    appId: "1:139448925893:web:edd64a630819984b14faac",
    measurementId: "G-BX1KE14RCK"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
