import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAgcf2AeDCKt2Tc1BJ2ahGUkAxgsLnGRqw",
  authDomain: "snappy-b19a4.firebaseapp.com",
  projectId: "snappy-b19a4",
  storageBucket: "snappy-b19a4.appspot.com",
  messagingSenderId: "250205867060",
  appId: "1:250205867060:web:c3b65710fcd33a98720e61",
  measurementId: "G-ZZ1BJN3GJY",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
