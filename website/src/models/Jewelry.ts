
import { Category } from "./Category";
import { User } from "./User";

export class Jewelry {
    id: number;
    name: string;
    buyNowPrice?: number;
    state?: string;
    receivedDate?: string;
    deliveryDate?: string;
    category?: Category;
    description?: string;
    material?: string;
    brand?: string;
    weight?: number;
    user?: User;
    isHolding?: boolean;

    constructor(
        id: number,
        name: string,
        buyNowPrice?: number,
        state?: string,
        receivedDate?: string,
        deliveryDate?: string,
        brand?: string,
        description?: string,
        material?: string,
        weight?: number,
        user?: User,
        category?: Category,
        isHolding?: boolean
    ) {
        this.id = id;
        this.name = name;
        this.buyNowPrice = buyNowPrice;
        this.brand = brand;
        this.state = state;
        this.receivedDate = receivedDate;
        this.deliveryDate = deliveryDate;
        this.description = description;
        this.material = material;
        this.weight = weight;
        this.user = user;
        this.category = category;
        this.isHolding = isHolding
    }
}
