import { cartActionTypes } from './cartActionTypes';

const toggleCartHidden = () => {
    return {
        type: cartActionTypes.TOGGLE_CART_HIDDEN
    }
};

const addItem = item => {
    return {
        type: cartActionTypes.ADD_ITEM,
        payload: item
    }
}

export { toggleCartHidden, addItem };