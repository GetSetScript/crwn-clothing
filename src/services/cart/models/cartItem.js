export class CartItem {
    constructor({id, name, price, imageUrl, quantity}) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.quantity = quantity || 0;        
    }
}