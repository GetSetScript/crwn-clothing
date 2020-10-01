import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authentication, authenticationService } from '../../services/user/authentication/authenticationProvider';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.scss';

const Header = () => {
    const { currentUser } = useContext(Authentication.AuthContext);

    return (
        <div className='header'>
            <Link to="/">
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/contact'>
                    CONTACT
                </Link>
                {(() => {
                    return currentUser ?
                    <div className='option'
                        onClick={authenticationService.signOut}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>
                        SIGN IN
                    </Link>
                })()}               
            </div>
        </div>
    )
}

export default Header
