import React from 'react'
import CustomButton from '../customButton/CustomButton';
import { connect } from 'react-redux';
import { selectCartItems } from '../../services/cart/redux/cartSelectors';

import './CartDropdown.scss';
import CartItem from '../cartItem/CartItem';

const CartDropdown = ({ cartItems }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(cartItem => {
                        return (<CartItem key={cartItem.id} item={cartItem} />)
                    })
                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cartItems: selectCartItems(state)
    }
}

export default connect(mapStateToProps)(CartDropdown)
