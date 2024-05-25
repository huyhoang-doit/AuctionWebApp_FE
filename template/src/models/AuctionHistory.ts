import { User } from "./User";

export class AuctionHistory {
    id: number;
    priceGiven: number;
    time?: string;
    user: User;

	constructor(id: number, priceGiven: number, time: string, user: User) {
        this.id = id;
        this.priceGiven = priceGiven;
        this.time = time;
        this.user = user;
	}
    
}