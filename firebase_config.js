import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAJXsuxbh3s7w_OlXNiR_mgDozhUI1KY5s",
    authDomain: "e-wayste.firebaseapp.com",
    projectId: "e-wayste",
    storageBucket: "e-wayste.appspot.com",
    messagingSenderId: "464525300272",
    appId: "1:464525300272:web:14d2cfb426fef7171f13f5",
    measurementId: "G-RW2FVF8VVL"
};

if (!firebase.app.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };