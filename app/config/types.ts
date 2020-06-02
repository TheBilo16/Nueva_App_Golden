import firebase , { app } from "firebase";

type TypeDataBase = app.App;
type TypeDocumentSnapshot = firebase.firestore.DocumentSnapshot;
type TypeDocumentData = firebase.firestore.DocumentData;

export {
    TypeDataBase,
    TypeDocumentSnapshot,
    TypeDocumentData
}