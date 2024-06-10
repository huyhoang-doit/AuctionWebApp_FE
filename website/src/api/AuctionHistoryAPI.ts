import BASE_URL from "../config/config";
import { AuctionHistory } from "../models/AuctionHistory";
import { fetchNoBodyWithToken, fetchWithToken } from "./AuthenticationAPI";
import { MyRequest } from "./MyRequest";

interface ResultInteface {
    auctionHistoriesData: AuctionHistory[];
}

interface ResultIntefacePageable {
    auctionHistoriesData: AuctionHistory[];
    totalElements: number;
}


export async function getAuctionHistoriesByAuctionId(auctionId: number, perPage: number): Promise<ResultInteface> {
    const auctionHistories: AuctionHistory[] = [];
    // endpoint
    const URL = `${BASE_URL}/auction-history/get-by-auction?id=${auctionId}&size=${perPage}`;
    // request
    const response = await MyRequest(URL);
    const responseData = response.content;
    if (response) {
        for (const key in responseData) {
            auctionHistories.push({
                id: responseData[key].id,
                priceGiven: responseData[key].priceGiven,
                time: responseData[key].time,
                bidCode: responseData[key].bidCode,
                user: {
                    id: responseData[key].user.id,
                    fullName: responseData[key].user.fullName,
                },
                auction: {
                    id: responseData[key].auction.id,
                    name: responseData[key].auction.name,
                    description: responseData[key].auction.description,
                    firstPrice: responseData[key].auction.firstPrice,
                    lastPrice: responseData[key].auction.lastPrice,
                    priceStep: responseData[key].auction.priceStep,
                    participationFee: responseData[key].auction.participationFee,
                    deposit: responseData[key].auction.deposit,
                    state: responseData[key].auction.state,
                    startDate: responseData[key].auction.startDate,
                    endDate: responseData[key].auction.endDate,
                    countdownDuration: responseData[key].auction.countdownDuration,
                    jewelry: responseData[key].jewelry
                }
            })
        }
    } else {
        throw new Error("Không tìm thấy");
    }
    return { auctionHistoriesData: auctionHistories };
}

export async function getBidByUsername(username: string, page: number): Promise<ResultIntefacePageable> {
    const auctionHistories: AuctionHistory[] = [];
    // endpoint
    const URL = `${BASE_URL}/auction-history/get-by-username?username=${username}&page=${page - 1}`;
    // request
    const response = await MyRequest(URL);
    const responseData = response.content;
    if (response) {
        for (const key in responseData) {
            auctionHistories.push({
                id: responseData[key].id,
                priceGiven: responseData[key].priceGiven,
                time: responseData[key].time,
                bidCode: responseData[key].bidCode,
                auction: {
                    id: responseData[key].auction.id,
                    name: responseData[key].auction.name,
                    description: responseData[key].auction.description,
                    firstPrice: responseData[key].auction.firstPrice,
                    lastPrice: responseData[key].auction.lastPrice,
                    priceStep: responseData[key].auction.priceStep,
                    participationFee: responseData[key].auction.participationFee,
                    deposit: responseData[key].auction.deposit,
                    state: responseData[key].auction.state,
                    startDate: responseData[key].auction.startDate,
                    endDate: responseData[key].auction.endDate,
                    countdownDuration: responseData[key].auction.countdownDuration,
                    jewelry: responseData[key].jewelry
                },
                user: {
                    id: responseData[key].user.id,
                    fullName: responseData[key].user.fullName,
                }
            })
        }
    } else {
        throw new Error("Không tìm thấy");
    }
    return {
        auctionHistoriesData: auctionHistories,
        totalElements: response.totalElements,
    };
}


export async function bidByUser(username: string, auctionId: number, priceGiven: number): Promise<boolean> {
    const token = localStorage.getItem("access_token");
    const bidTime = new Date().toISOString();

    const bid = {
        username: username,
        auctionId: auctionId,
        priceGiven: priceGiven,
        bidTime: bidTime
    }
    // // endpoint
    const URL = `${BASE_URL}/auction-history`;
    // // request
    try {
        const response = await fetchWithToken(URL, 'POST', token, bid);

        if (!response.ok) {
            throw new Error(`Không thể truy cập ${URL}`);
        }
        return true;
    } catch (error) {
        console.error("Error: " + error);
        return false;
    }
}
export async function getAuctionHistoriesWhenFinished(auctionId: number | undefined): Promise<ResultInteface> {
    const auctionHistories: AuctionHistory[] = [];
    // endpoint
    const URL = `${BASE_URL}/auction-history/get-when-auction-finished/${auctionId}`;
    // request
    const response = await MyRequest(URL);
    const responseData = response.content;
    if (response) {
        for (const key in responseData) {
            auctionHistories.push({
                id: responseData[key].id,
                priceGiven: responseData[key].priceGiven,
                time: responseData[key].time,
                bidCode: responseData[key].bidCode,
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

export const confirmDeleteBid = async (userId: number, auctionId: number) => {
    const token = localStorage.getItem("access_token");
    const URL = `${BASE_URL}/auction-history/bids/${userId}/${auctionId}`;
    try {
        const response = await fetchNoBodyWithToken(URL, "DELETE", token);

        if (!response.ok) {
            throw new Error(`Không thể truy cập ${URL}`);
        }
        return true;
    } catch (error) {
        console.error("Error: " + error);
        return false;
    }
};
