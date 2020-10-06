import APPAREL_DATA from '../../data/apparelData';
import { Apparel } from '../../models/apparel';
import { ApparelItem } from '../../models/apparelItem';

const getAllApparel = () => {
    return APPAREL_DATA.map(apparel => {
        return new Apparel({ id: apparel.id, 
                            category: apparel.category, 
                            routeName: apparel.routeName, 
                            items: apparel.items.map(item => {
                                                    return new ApparelItem({id: item.id,
                                                                            name: item.name,
                                                                            imageUrl: item.imageUrl,
                                                                            price: item.price});
                                                })
                        });
    });
}

export { getAllApparel }