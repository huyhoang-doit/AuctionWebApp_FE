import { Auction } from "./Auction";
import { User } from "./User";

export class AuctionRegistration {
    id: number;
    registrationFee?: number;
    registrationDate?: string;
    state?: string;
    user?: User;
    auction?: Auction;

    constructor(
        id: number,
        user?: User,
        auction?: Auction,
        registrationFee?: number,
        registrationDate?: string,
        state?: string
    ) {
        this.id = id;
        this.user = user;
        this.registrationFee = registrationFee;
        this.registrationDate = registrationDate;
        this.state = state;
        this.auction = auction;
    }
}
