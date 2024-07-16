import { AuctionHistory } from "../models/AuctionHistory";
import { mapAuction } from "./mapAuction";
import { mapUser } from "./mapUser";

export function mapAuctionHistory(data: any): AuctionHistory {
    return {
        id: data.id,
        priceGiven: data.priceGiven,
        time: data.time,
        user: mapUser(data.user),
        auction: mapAuction(data.auction),
        bidCode: data.bidCode
    };
}