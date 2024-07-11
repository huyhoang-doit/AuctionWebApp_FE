import { Auction } from "../models/Auction";
import { mapJewelry } from "./mapJewelry";
import { mapUser } from "./mapUser";

export function mapAuction(auctionData: any): Auction {
    return {
        id: auctionData.id,
        name: auctionData.name,
        description: auctionData.description,
        firstPrice: auctionData.firstPrice,
        lastPrice: auctionData.lastPrice,
        participationFee: auctionData.participationFee,
        deposit: auctionData.deposit,
        priceStep: auctionData.priceStep,
        startDate: auctionData.startDate,
        endDate: auctionData.endDate,
        countdownDuration: auctionData.countdownDuration,
        state: auctionData.state,
        jewelry: mapJewelry(auctionData.jewelry),
        user: mapUser(auctionData.user),
    };
}