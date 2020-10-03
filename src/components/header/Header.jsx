import React from 'react'
import { Link } from 'react-router-dom';
import { authenticationService } from '../../services/user/authentication/authenticationProvider';
import { connect } from 'react-redux';
import CartIcon from '../cartIcon/CartIcon';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.scss';
import CartDropdown from '../cartDropdown/CartDropdown';

const Header = ({ currentUser, hidden }) => {
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
                <CartIcon/>           
            </div>
            {(() => {
                return hidden ?
                    null
                :
                    <CartDropdown />                        
            })()}
        </div>
    )
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => {
    return {
        currentUser,
        hidden
    };
}

export default connect(mapStateToProps)(Header);
