import { createSelector } from 'reselect';

const selectCart = state => {
    return state.cart
};

const selectCartItems = createSelector([selectCart], (cart) => {
    return cart.cartItems;
});

const selectCartItemsCount = createSelector([selectCartItems], cartItems => {
    return cartItems.reduce((totalQuantity, cartItem) => {
        return totalQuantity + cartItem.quantity;
    }, 0);
});

export { selectCart, selectCartItems, selectCartItemsCount };