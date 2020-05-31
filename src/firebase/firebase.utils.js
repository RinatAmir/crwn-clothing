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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
