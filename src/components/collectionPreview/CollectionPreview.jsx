import React from 'react';
import CollectionItem from '../collection-item/CollectionItem';

import './CollectionPreview.scss';

const CollectionPreview = (props) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{props.title.toUpperCase()}</h1>
            <div className='preview'>
                {props.items.filter((item, index) => index < 4)
                            .map(item => {
                                return <CollectionItem key={item.id} 
                                                        name={item.name}
                                                        imageUrl={item.imageUrl}
                                                        price={item.price} />
                            })
                }
            </div>
        </div>
    )
}

export default CollectionPreview