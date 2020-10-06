import React from 'react'
import CustomButton from '../customButton/CustomButton';
import { connect } from 'react-redux';
import { addItem } from '../../services/cart/redux/cartActions';
import { CartItem } from '../../services/cart/models/cartItem';

import './CollectionItem.scss';

const CollectionItem = ({ item, addItem }) => {
    const { id, name, price, imageUrl } = item; 
    return (
        <div className='collection-item'>
            <div className='image'
                style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
            <CustomButton onClick={() => addItem(new CartItem({ id: id,
                                                                name: name,
                                                                price: price,
                                                                imageUrl: imageUrl,
                                                                quantity: 1 })
                                                )
                                    } 
                        inverted>Add to cart</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addItem: item => dispatch(addItem(item))
    }
}

export default connect(null, mapDispatchToProps)(CollectionItem);
