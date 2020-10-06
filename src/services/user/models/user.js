export class User {
    constructor({id, displayName, email, createdAt}) {
        this.id = id;
        this.displayName = displayName;
        this.email = email;      
        this.createdAt = createdAt;      
    }
}