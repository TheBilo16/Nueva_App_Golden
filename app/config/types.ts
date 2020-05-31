import firebase , { app } from "firebase";

type TypeDataBase = app.App;
type TypeDocumentSnapshopt = firebase.firestore.DocumentSnapshot;
type TypeDocumentData = firebase.firestore.DocumentData;

export {
    TypeDataBase,
    TypeDocumentSnapshopt,
    TypeDocumentData
}