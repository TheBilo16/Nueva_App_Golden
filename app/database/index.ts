import firebase, { app } from "firebase";
import "firebase/firestore";

//Config
import * as firebaseConfigPrivate from "../config/Private";
import { TypeDataBase } from "../config/types";

var firebaseConfig = firebaseConfigPrivate;
var connection : TypeDataBase;

if(!firebase.apps.length)
    connection = firebase.initializeApp(firebaseConfig);
else
    connection = firebase.app();

export default connection;