import { Auction } from "../models/Auction";
import { MyRequest } from "./MyRequest";

interface ResultInteface {
    auctionsData: Auction[];
}

export async function getAuctionToday(): Promise<ResultInteface> {
    const auctions: Auction[] = [];
    // endpoint
    const URL = `http://localhost:8080/api/v1/auction/get-by-today`;

    // request
    const response = await MyRequest(URL);

    if (response) {
        for (const key in response) {
            auctions.push({
                id: response[key].id,
                name: response[key].name,
                description: response[key].description,
                firstPrice: response[key].firstPrice,
                lastPrice: response[key].lastPrice,
                participationFee: response[key].participationFee,
                deposit: response[key].deposit,
                priceStep: response[key].priceStep,
                startDate: response[key].startDate,
                endDate: response[key].endDate,
                countdownDuration: response[key].countdownDuration
            })
        }
    } else {
        throw new Error("Phiên không tồn tại");
    }
    return { auctionsData: auctions };
}