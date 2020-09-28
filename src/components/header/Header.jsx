import React from 'react';
import { Link } from 'react-router-dom';
import userRepository from '../../repositories/user/userRepository'

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.scss';

const Header = ({ currentUser }) => {
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
                        onClick={userRepository.signOut}>SIGN OUT</div>
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
