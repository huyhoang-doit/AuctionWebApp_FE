import { Image } from "./Image";
import { User } from "./User";

export class Jewelry {
    id: number;
    name: string;
    price: number;
    description?: string;
    material?: string;
    brand: string;
    weight?: number;
    images: Array<Image>;
    user?: User;

    constructor(
        id: number,
        name: string,
        price: number,
        brand: string,
        images: Array<Image>,
        description?: string,
        material?: string,
        weight?: number,
        user?: User
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.brand = brand;
        this.images = images;
        this.description = description;
        this.material = material;
        this.weight = weight;
        this.user = user;
    }
}
