import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD5N7pUZUKtSKhhqwKD78tklmhj5jPha10",
    authDomain: "clone-ecf29.firebaseapp.com",
    projectId: "clone-ecf29",
    storageBucket: "clone-ecf29.appspot.com",
    messagingSenderId: "27548974201",
    appId: "1:27548974201:web:ea1556017d73892415e8a8",
    measurementId: "G-MYR20544VZ"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};