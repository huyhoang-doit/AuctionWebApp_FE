import { Auction } from "./Auction";
import { User } from "./User";

export class Transaction {
    id: number;
    createDate: string;
    totalPrice: number;
    feesIncurred: number;
    state: string;
    type: string;
    auction?: Auction;
    paymentMethod?: string;
    paymentTime?: string;
    user?: User;

    constructor(
        id: number,
        createDate: string,
        totalPrice: number,
        feesIncurred: number,
        state: string,
        type: string,
        auction: Auction,
        paymentMethod?: string,
        paymentTime?: string,
        user?: User) {
        this.id = id;
        this.createDate = createDate;
        this.totalPrice = totalPrice;
        this.feesIncurred = feesIncurred;
        this.state = state;
        this.type = type;
        this.auction = auction;
        this.paymentMethod = paymentMethod;
        this.paymentTime = paymentTime;
        this.user = user;
    }
}