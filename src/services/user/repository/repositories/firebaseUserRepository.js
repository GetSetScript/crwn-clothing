import { firestore } from '../../../firebase/firebaseConfig';

const createUserFromAuthentication = async (authUser) => {
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

    return userReference;
}

export {
    createUserFromAuthentication
};