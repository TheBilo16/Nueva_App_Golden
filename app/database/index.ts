import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyAjoilw5jhuKkrFu9St5QtaS8-L10g4Ueo",
    authDomain: "chat-2a617.firebaseapp.com",
    databaseURL: "https://chat-2a617.firebaseio.com",
    projectId: "chat-2a617",
    storageBucket: "chat-2a617.appspot.com",
    messagingSenderId: "132355550955",
    appId: "1:132355550955:web:5eda98743938a34b9958ae",
    measurementId: "G-2WCH029K9S"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;