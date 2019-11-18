import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-firestore';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDnAYhR3_C6dZaZFWBdFJTrtPxc03T9--U",
    authDomain: "chops-frontend-b113c.firebaseapp.com",
    databaseURL: "https://chops-frontend-b113c.firebaseio.com",
    projectId: "chops-frontend-b113c",
    storageBucket: "chops-frontend-b113c.appspot.com",
    messagingSenderId: "728188777376",
    appId: "1:728188777376:web:8a487ad5d3961314c46ac5",
    measurementId: "G-DCZK7ET9D2"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
