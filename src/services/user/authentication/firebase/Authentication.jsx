import React, { useEffect, useState} from 'react'
import { auth } from '../../../firebase/firebaseConfig';
import { userRepository } from '../../repository/repositoryProvider';

const AuthContext = React.createContext();

const AuthProvider = ({children}) => {
    const [currentUser, setCurretUser] = useState(null);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        auth.onAuthStateChanged(async authUser => {
            if (authUser) {
                const userReference = await userRepository
                                                .createUserFromAuthentication(authUser)
                
                userReference.onSnapshot(snapshot => {        
                    setCurretUser({id: snapshot.id, ...snapshot.data()});
                    setPending(false);                
                });
            } else {
                setCurretUser(authUser); //if cant create?
                setPending(false);  
            }
        });
    }, [])

    if(pending) {
        return <div>Loading</div>
    }

    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider };
