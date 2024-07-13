import { AuctionRegistration } from "../models/AuctionRegistration";
import { mapAuction } from "./mapAuction";
import { mapUser } from "./mapUser";

export function mapAuctionRegistration(data: any): AuctionRegistration {
    return {
        id: data.id,
        registrationFee: data.registrationFee,
        registrationDate: data.registrationDate,
        state: data.auctionRegistrationState,
        kickReason: data.kickReason,
        user: mapUser(data.user),
        auction: mapAuction(data.auction)
    };
}