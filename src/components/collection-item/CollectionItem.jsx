import React from 'react'
import CustomButton from '../customButton/CustomButton';

import './CollectionItem.scss';

const CollectionItem = ({ imageUrl, name, price }) => {
    return (
        <div className='collection-item'>
            <div className='image'
                style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
            <CustomButton inverted>Add to cart</CustomButton>
        </div>
    )
}

export default CollectionItem;
