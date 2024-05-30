import { AuctionHistory } from "../models/AuctionHistory";
import { fetchWithToken } from "./AuthenticationAPI";
import { MyRequest } from "./MyRequest";

interface ResultInteface {
    auctionHistoriesData: AuctionHistory[];
}

interface ResultIntefacePageable {
    auctionHistoriesData: AuctionHistory[];
    totalElements: number;
}

export async function getAuctionHistoriesByAuctionId(auctionId: number): Promise<ResultInteface> {
    const auctionHistories: AuctionHistory[] = [];
    // endpoint
    const URL = `http://localhost:8080/api/v1/auction-history/get-by-auction?id=${auctionId}`;
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

export async function getBidByUsername(username: string, page: number): Promise<ResultIntefacePageable> {
    const auctionHistories: AuctionHistory[] = [];
    // endpoint
    const URL = `http://localhost:8080/api/v1/auction-history/get-by-username?username=${username}&page=${page - 1}`;
    // request
    const response = await MyRequest(URL);
    const responseData = response.content;
    if (response) {
        for (const key in responseData) {
            auctionHistories.push({
                id: responseData[key].id,
                priceGiven: responseData[key].priceGiven,
                time: responseData[key].time,
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
    const URL = `http://localhost:8080/api/v1/auction-history`;
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
    const URL = `http://localhost:8080/api/v1/auction-history/get-when-auction-finished/${auctionId}`;
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