import { firestore } from '../../../firebase/firebaseConfig';
import { AuthUser } from '../../models/authUser';

const createUserFromAuthentication = async (authUser) => {
    if (!authUser) {
        return;
    }

    const userReference = firestore.doc(`users/${authUser.uid}`);
    const snapshot = await userReference.get();
    if (!snapshot.exists) {
        let user = new AuthUser({ displayName: authUser.email.substring(0, authUser.email.indexOf("@")),
                                email: authUser.email,
                                createdAt: new Date()
                            });
        try {
            await userReference.set({...user})
        } catch (error) {
            console.log("error creating user", error.message)
        }
    }

    return userReference;
}

export {
    createUserFromAuthentication
};