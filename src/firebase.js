import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxspPGdXqUqisgvlVzIvDyxKDK6Wdb5gw",
  authDomain: "react-hooks-blog-50c4c.firebaseapp.com",
  projectId: "react-hooks-blog-50c4c",
  storageBucket: "react-hooks-blog-50c4c.appspot.com",
  messagingSenderId: "106501813723",
  appId: "1:106501813723:web:07147f189ae1ccea0c63fe",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
