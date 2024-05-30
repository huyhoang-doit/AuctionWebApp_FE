import { Auction } from "./Auction";

export class Transaction {
    id: number;
    createDate: string;
    totalPrice: number;
    feesIncurred: number;
    state: string;
    type: string;
    auction?: Auction;

    constructor(id: number, createDate: string, totalPrice: number, feesIncurred: number, state: string, type: string, auction: Auction) {
        this.id = id;
        this.createDate = createDate;
        this.totalPrice = totalPrice;
        this.feesIncurred = feesIncurred;
        this.state = state;
        this.type = type;
        this.auction = auction;
    }


}