import React from 'react'
import { auth } from '../../../firebase/firebaseConfig';
import { userRepository } from '../../repository/repositoryProvider';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/userActions';
import { User } from '../../models/user';


class Authentication extends React.Component {

    componentDidMount() {
        this.subscribeToAuthStateChanged();
    }

    componentWillUnmount() {
        this.subscribeToAuthStateChanged();
    }

    subscribeToAuthStateChanged = () => {
        const { setCurrentUser } = this.props;

        auth.onAuthStateChanged(async authUser => {
            if (authUser) {
                const userReference = await userRepository.createUserFromAuthentication(authUser)
                
                userReference.onSnapshot(snapshot => {      
                    setCurrentUser(new User({id: snapshot.id, ...snapshot.data()}));
                });
            } else {
                setCurrentUser(null);
            }
        });
    }
    
    render() {
        return(
            <div></div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCurrentUser: user => dispatch(setCurrentUser(user))
    }
}

export default connect(null, mapDispatchToProps)(Authentication);
