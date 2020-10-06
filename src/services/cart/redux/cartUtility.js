import { CartItem } from "../models/cartItem";

const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => {
                                        return cartItem.id === cartItemToAdd.id
                                    });

    if (existingCartItem) {
        return cartItems.map(cartItem => {
                            return cartItem.id === cartItemToAdd.id ?
                                new CartItem({id: cartItem.id,
                                            name: cartItem.name,
                                            price: cartItem.price,
                                            imageUrl: cartItem.imageUrl,
                                            quantity: cartItem.quantity + 1 })
                            :
                                cartItem
                        });
    }

    return [...cartItems, cartItemToAdd];
}

export { addItemToCart }