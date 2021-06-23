import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =
{
    apiKey: "AIzaSyCcQcxH2FAgWHjZUJcR91_fruTOkiK3oIk",
    authDomain: "the-escapism-club.firebaseapp.com",
    projectId: "the-escapism-club",
    storageBucket: "the-escapism-club.appspot.com",
    messagingSenderId: "239025941254",
    appId: "1:239025941254:web:ccd680eec37d016c218c87",
    measurementId: "G-845QK8HQCG"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;