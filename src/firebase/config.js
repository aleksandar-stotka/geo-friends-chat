import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCciPuB7EaoYRZm2kpAGj6pXu-sR6r4xHY",
  authDomain: "geo-friends-300f7.firebaseapp.com",
  projectId: "geo-friends-300f7",
  storageBucket: "geo-friends-300f7.appspot.com",
  messagingSenderId: "708436136619",
  appId: "1:708436136619:web:de069eab42a795ea0b5dee",
};
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp, projectAuth, projectStorage };
