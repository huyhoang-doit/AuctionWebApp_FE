import BASE_URL from "../config/config";
import { mapAuctionHistory } from "../mappings/mapAuctionHistory";
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


export async function getAuctionHistoriesByAuctionIdAndUserId(auctionId: number | undefined, userId: number, state: string, page: number): Promise<ResultIntefacePageable> {
    // endpoint
    const URL = `${BASE_URL}/auction-history/get-by-auction-and-user?auctionId=${auctionId}&userId=${userId}&state=${state}&page=${page - 1}`;
    // request
    try {
        const response = await MyRequest(URL);
        const auctionHistoriesData: AuctionHistory[] = response.content.map((auctionHistory: any) => mapAuctionHistory(auctionHistory));
        const totalElements = response.totalElements;

        return {
            auctionHistoriesData,
            totalElements,
        };
    } catch (error) {
        console.error('Error fetching auction histories:', error);
        throw error;
    }
}

export async function getAuctionHistoriesByAuctionId(auctionId: number, perPage: number): Promise<ResultInteface> {
    // endpoint
    const URL = `${BASE_URL}/auction-history/get-by-auction?id=${auctionId}&size=${perPage}`;
    // request
    try {
        const response = await MyRequest(URL);
        const auctionHistoriesData: AuctionHistory[] = response.content.map((auctionHistory: any) => mapAuctionHistory(auctionHistory));
        return {
            auctionHistoriesData
        };
    } catch (error) {
        console.error('Error fetching auction histories:', error);
        throw error;
    }
}

export async function getBidByUsername(username: string, page: number): Promise<ResultIntefacePageable> {
    // endpoint
    const URL = `${BASE_URL}/auction-history/get-by-username?username=${username}&page=${page - 1}`;
    // request
    try {
        const response = await MyRequest(URL);
        const auctionHistoriesData: AuctionHistory[] = response.content.map((auctionHistory: any) => mapAuctionHistory(auctionHistory));
        const totalElements = response.totalElements;

        return {
            auctionHistoriesData,
            totalElements,
        };
    } catch (error) {
        console.error('Error fetching auction histories:', error);
        throw error;
    }
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
        return false;
    }
}
export async function getAuctionHistoriesWhenFinished(auctionId: number | undefined): Promise<ResultInteface> {
    // endpoint
    const URL = `${BASE_URL}/auction-history/get-when-auction-finished/${auctionId}`;
    // request
    try {
        const response = await MyRequest(URL);
        const auctionHistoriesData: AuctionHistory[] = response.content.map((auctionHistory: any) => mapAuctionHistory(auctionHistory));
        return {
            auctionHistoriesData
        };
    } catch (error) {
        console.error('Error fetching auction histories:', error);
        throw error;
    }
}

export const confirmDeleteBid = async (userId: number, auctionId: number, reason: string) => {
    const token = localStorage.getItem("access_token");
    const URL = `${BASE_URL}/auction-history/bids/${userId}/${auctionId}?reason=${reason}`;
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
