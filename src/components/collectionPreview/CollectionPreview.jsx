import React from 'react';
import CollectionItem from '../collectionItem/CollectionItem';

import './CollectionPreview.scss';

const CollectionPreview = ({ category, items }) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{category.toUpperCase()}</h1>
            <div className='preview'>
                {items.filter((item, index) => index < 4)
                                .map(item => {
                                    return <CollectionItem key={item.id} item={item} />
                                })
                }
            </div>
        </div>
    )
}

export default CollectionPreview
