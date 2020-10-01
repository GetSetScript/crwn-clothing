import React, { Component } from 'react'
import CollectionPreview from '../../components/collectionPreview/CollectionPreview.jsx';

import { apparelRepository } from '../../services/apparel/repository/repositoryProvider';

export class ShopPage extends Component {
    state = {
        collections: apparelRepository.getAllApparel()
    }

    render() {
        return (
            <div className='shop-page'>
                {this.state.collections.map(({id, ...props}) => {
                        return <CollectionPreview key={id} {...props}/>
                    })
                }
            </div>
        )
    }
}

export default ShopPage
