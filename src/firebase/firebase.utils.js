import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyALEcYo7nRjwz7mMO2UhdKwk-bJe4va-F8",
  authDomain: "crwn-db-fc4c4.firebaseapp.com",
  databaseURL: "https://crwn-db-fc4c4.firebaseio.com",
  projectId: "crwn-db-fc4c4",
  storageBucket: "crwn-db-fc4c4.appspot.com",
  messagingSenderId: "466350716137",
  appId: "1:466350716137:web:8f30e06f968b514471ec78",
  measurementId: "G-QRKQQ01XNY"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
