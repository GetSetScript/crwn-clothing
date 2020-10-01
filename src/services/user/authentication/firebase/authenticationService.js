import { auth, googleProvider } from '../../../firebase/firebaseConfig';

const createAuthUserWithEmailAndPassword = async (email, password) => {
    await auth.createUserWithEmailAndPassword(email, password);
}

const signInWithEmailAndPassword = async (email, password) => await auth.signInWithEmailAndPassword(email, password);

const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

const signOut = () => auth.signOut();


export {
    createAuthUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithGoogle,
    signOut
}