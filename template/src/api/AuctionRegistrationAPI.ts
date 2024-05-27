
import { AuctionRegistration } from "../models/AuctionRegistration";
import { MyRequest } from "./MyRequest";

interface ResultInteface {
    auctionRegistrationsData: AuctionRegistration[];
}

export async function getAuctionRegistrationsByAuctionId(auctionId: number): Promise<ResultInteface> {
    const auctionRegistrations: AuctionRegistration[] = [];
    // endpoint
    const URL = `http://localhost:8080/api/v1/auction-registration/auction/${auctionId}`;
    // request
    const response = await MyRequest(URL);

    if (response) {
        for (const key in response) {
            auctionRegistrations.push({
                id: response[key].id,
                registrationFee: response[key].registrationFee,
                registrationDate: response[key].registrationDate,
                state: response[key].state,
                user: {
                    id: response[key].user.id,
                }
            })
        }
    } else {
        throw new Error("Không tìm thấy");
    }
    return { auctionRegistrationsData: auctionRegistrations };
}