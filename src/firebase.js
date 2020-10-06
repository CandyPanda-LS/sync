import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA-TQoU61YYeC5W8DKiuubvRQiX9mDmfUI",
    authDomain: "sync-e5260.firebaseapp.com",
    databaseURL: "https://sync-e5260.firebaseio.com",
    projectId: "sync-e5260",
    storageBucket: "sync-e5260.appspot.com",
    messagingSenderId: "1066495262980",
    appId: "1:1066495262980:web:2ebcb5f37cb3281369d051",
    measurementId: "G-CWPBH6B013"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;