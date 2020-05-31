import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDArn7jCQ_O37FL1EntADHik8sMVJmnU-k',
  authDomain: 'crwn-db-def6a.firebaseapp.com',
  databaseURL: 'https://crwn-db-def6a.firebaseio.com',
  projectId: 'crwn-db-def6a',
  storageBucket: 'crwn-db-def6a.appspot.com',
  messagingSenderId: '1024297682786',
  appId: '1:1024297682786:web:0219d1d19df53a7835ce3b',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.massage);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
