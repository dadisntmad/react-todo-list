import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDhw8vm66kgnaMrlwCAIYPrUtNSz0eLzK0",
    authDomain: "todo-app-3317c.firebaseapp.com",
    projectId: "todo-app-3317c",
    storageBucket: "todo-app-3317c.appspot.com",
    messagingSenderId: "544609980269",
    appId: "1:544609980269:web:4d34662e503c20decd5464",
    measurementId: "G-MY6YEP7LGW"
});

const db = firebaseApp.firestore();

export default db;