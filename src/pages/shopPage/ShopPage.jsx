import React, { Component } from 'react'
import CollectionPreview from '../../components/collectionPreview/CollectionPreview.jsx';

import SHOP_DATA from './data/shopData.js';

export class ShopPage extends Component {
    state = {
        collections: SHOP_DATA
    }

    render() {
        return (
            <div className='shop-page'>
                {this.state.collections.map(collection => {
                    return <CollectionPreview key={collection.id}
                                            title={collection.title}
                                            routeName={collection.RouteName}
                                            items={collection.items}/>
                })}
            </div>
        )
    }
}

export default ShopPage
