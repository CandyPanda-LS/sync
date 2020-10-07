import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDXbwjGQ6-qVc_KnyIJ_bWQwzbMuzfCBGM",
    authDomain: "sync-5722f.firebaseapp.com",
    databaseURL: "https://sync-5722f.firebaseio.com",
    projectId: "sync-5722f",
    storageBucket: "sync-5722f.appspot.com",
    messagingSenderId: "430240039557",
    appId: "1:430240039557:web:d1152b9efe1c7db54e5fec",
    measurementId: "G-Q8XMEW7R5W"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;