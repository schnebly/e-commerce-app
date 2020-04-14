import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDz4rUTMreSYcoU2eWkdxl6i3jnW0unnkg",
    authDomain: "crwn-db-eac30.firebaseapp.com",
    databaseURL: "https://crwn-db-eac30.firebaseio.com",
    projectId: "crwn-db-eac30",
    storageBucket: "crwn-db-eac30.appspot.com",
    messagingSenderId: "643016329325",
    appId: "1:643016329325:web:46cf2a07de3b7dabd2d764",
    measurementId: "G-QJJ4X7KLHV"
  };

export default firebase;

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({displayName, email, createdAt, ...additionalData})
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const singInWithGoogle = () => auth.signInWithPopup(provider);