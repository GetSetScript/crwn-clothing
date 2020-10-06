import React from 'react'
import CustomButton from '../customButton/CustomButton';
import { connect } from 'react-redux';

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

const mapStateToProps = ({ cart: { cartItems } }) => {
    return {
        cartItems
    }
}

export default connect(mapStateToProps)(CartDropdown)
