import React from 'react'
import { Link } from 'react-router-dom';
import { authenticationService } from '../../services/user/authentication/authenticationProvider';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.scss';

const Header = ({ currentUser }) => {
    console.log(currentUser);
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

const mapStateToProps = state => {
    return {
        currentUser: state.user.currentUser
    };
}

export default connect(mapStateToProps)(Header);
