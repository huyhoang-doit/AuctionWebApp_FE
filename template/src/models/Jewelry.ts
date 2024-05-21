import { User } from "./User";

export class Jewelry {
    id: number;
    name: string;
    description: string;
    user: User;

	constructor(id: number, name: string, 
        description: string, user: User) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.user = user;
	}
    

}