
import { Category } from "./Category";
import { User } from "./User";

export class Jewelry {
    id: number;
    name: string;
    price?: number;
    state?: boolean;
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
        price?: number,
        state?: boolean,
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
        this.price = price;
        this.brand = brand;
        this.state = state;
        this.description = description;
        this.material = material;
        this.weight = weight;
        this.user = user;
        this.category = category;
        this.isHolding = isHolding
    }
}
