import firebase from "firebase";
import "firebase/firestore";

//Config
import * as firebaseConfigPrivate from "../config/Private/key";

var firebaseConfig = firebaseConfigPrivate;

if(!firebase.apps.length)
    firebase.initializeApp(firebaseConfig);
else
    firebase.app();