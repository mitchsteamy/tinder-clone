//@ts-check

import firebase from "firebase/app";
import "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "",
    authDomain: "tinder-clone-ca492.firebaseapp.com",
    projectId: "tinder-clone-ca492",
    storageBucket: "tinder-clone-ca492.appspot.com",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};



// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebase.firestore(firebaseApp);
//const analytics = getAnalytics(firebaseApp);

export default database
