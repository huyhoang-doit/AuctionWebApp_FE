import { AuctionHistory } from "../models/AuctionHistory";
import { MyRequest } from "./MyRequest";

interface ResultInteface {
    auctionHistoriesData: AuctionHistory[];
}

export async function getAuctionHistoriesByAuctionId(auctionId: number): Promise<ResultInteface> {
    const auctionHistories: AuctionHistory[] = [];
    // endpoint
    const URL = `http://localhost:8080/api/v1/aution-history/get-by-auction?id=${auctionId}`;
    // request
    const response = await MyRequest(URL);
    const responseData = response.content;
    if (response) {
        for (const key in responseData) {
            auctionHistories.push({
                id: responseData[key].id,
                priceGiven: responseData[key].priceGiven,
                time: responseData[key].time,
                user: {
                    id: responseData[key].user.id,
                    fullName: responseData[key].user.fullName,
                },
            })
        }
    } else {
        throw new Error("Không tìm thấy");
    }
    return { auctionHistoriesData: auctionHistories };
}

export async function getAuctionHistoriesByUsername(username: string): Promise<ResultInteface> {
    const auctionHistories: AuctionHistory[] = [];
    // endpoint
    const URL = `http://localhost:8080/api/v1/aution-history/get-by-username?username=${username}`;
    // request
    const response = await MyRequest(URL);
    const responseData = response.content;
    if (response) {
        for (const key in responseData) {
            auctionHistories.push({
                id: responseData[key].id,
                priceGiven: responseData[key].priceGiven,
                time: responseData[key].time,
                user: {
                    id: responseData[key].user.id,
                    fullName: responseData[key].user.fullName,
                },
            })
        }
    } else {
        throw new Error("Không tìm thấy");
    }
    return { auctionHistoriesData: auctionHistories };
}