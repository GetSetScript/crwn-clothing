import { auth, firestore, provider } from './firebaseConfig';
import Reactor from '../../customEvent';

const getUser = 'getUser';
const reactor = new Reactor();
reactor.registerEvent(getUser);

auth.onAuthStateChanged(async authUser => {
    if (authUser) {
        await tryRegisterAuthUserWithFirestore(authUser);
    }
    else {
        reactor.dispatchEvent(getUser, null);
    }
});

const tryRegisterAuthUserWithFirestore = async (authUser) => {
    if (!authUser) {
        return;
    }

    const userReference = firestore.doc(`users/${authUser.uid}`);
    const snapshot = await userReference.get();
    if (!snapshot.exists) {
        const email = authUser.email;
        const displayName = email.substring(0, email.indexOf("@"));
        const createtedAt = new Date();

        try {
            await userReference.set({
                displayName,
                email,
                createtedAt                
            })
        } catch (error) {
            console.log("error creating user", error.message)
        }
    }    
    
    userReference.onSnapshot(snapshot => {
        let userData = {
            id: snapshot.id,
            ...snapshot.data()
        };
        reactor.dispatchEvent(getUser, userData);
    })
}

export const createUserWithEmailAndPassword = async (email, password) => {
    await auth.createUserWithEmailAndPassword(email, password);
}

export const signInWithEmailAndPassword = async (email, password) => await auth.signInWithEmailAndPassword(email, password);

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const signOut = () => auth.signOut();

export const event = reactor;