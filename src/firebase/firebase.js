//@ts-check

import firebase from "firebase/app";
import "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAI_a9P8gGdR7ORr3YEgFrrU0QquRn6xd4",
    authDomain: "tinder-clone-ca492.firebaseapp.com",
    projectId: "tinder-clone-ca492",
    storageBucket: "tinder-clone-ca492.appspot.com",
    messagingSenderId: "278349402064",
    appId: "1:278349402064:web:1b7d8a1673e8301837f3d5",
    measurementId: "G-XNB5Z3BN13"
};



// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebase.firestore(firebaseApp);
//const analytics = getAnalytics(firebaseApp);

export default database
