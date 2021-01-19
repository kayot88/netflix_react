import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDAoMlKc70mDU-pyjwzqDZPDjPm9kLkaCI",
  authDomain: "netflix-4b540.firebaseapp.com",
  databaseURL: "https://netflix-4b540.firebaseio.com",
  projectId: "netflix-4b540",
  storageBucket: "netflix-4b540.appspot.com",
  messagingSenderId: "608251197060",
  appId: "1:608251197060:web:70a4378e63db6a6cbeb4d1",
};

const firebase = Firebase.initializeApp(config);


export { firebase };
