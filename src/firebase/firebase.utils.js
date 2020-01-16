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

export const createUserProfileDocument = async (userAuth, additionaldData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionaldData
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
