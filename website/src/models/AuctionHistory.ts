import { Auction } from "./Auction";
import { User } from "./User";

export class AuctionHistory {
    id: number;
    priceGiven: number;
    time?: string;
    user: User;
    auction?: Auction;
    bidCode: string;

	constructor(id: number, priceGiven: number, time: string, user: User, auction: Auction, bidCode: string) {
        this.id = id;
        this.priceGiven = priceGiven;
        this.time = time;
        this.user = user;
        this.auction = auction;
        this.bidCode = bidCode;
	}
    
}