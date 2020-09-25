import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDkOoHbM_XQ0y39wzlcGp-Znpx7OxUZjyQ",
    authDomain: "crwn-db-ec83b.firebaseapp.com",
    databaseURL: "https://crwn-db-ec83b.firebaseio.com",
    projectId: "crwn-db-ec83b",
    storageBucket: "crwn-db-ec83b.appspot.com",
    messagingSenderId: "363573155524",
    appId: "1:363573155524:web:7499bff65ff3e6bef19b91",
    measurementId: "G-8V11DK04Q6"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;