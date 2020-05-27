import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBEPoWXOf_h-MMsi7MjE2CTA5uXIcCgJeo",
    authDomain: "crown-db1-e94ff.firebaseapp.com",
    databaseURL: "https://crown-db1-e94ff.firebaseio.com",
    projectId: "crown-db1-e94ff",
    storageBucket: "crown-db1-e94ff.appspot.com",
    messagingSenderId: "817637027798",
    appId: "1:817637027798:web:daa63402df7c88e68b3e77",
    measurementId: "G-H53C0E3YTZ"
  };
  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promps: 'select_account'});

  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;