import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBJZQ9E-Jn3nD1JBZcF8YBUhja6NCFRFHw",
    authDomain: "to-do-ac295.firebaseapp.com",
    databaseURL: "https://to-do-ac295.firebaseio.com",
    projectId: "to-do-ac295",
    storageBucket: "to-do-ac295.appspot.com",
    messagingSenderId: "1095027244818",
    appId: "1:1095027244818:web:0d9d626d60016d396b3dcb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore()