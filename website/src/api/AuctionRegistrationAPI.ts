
import BASE_URL from "../config/config";
import { mapAuctionRegistration } from "../mappings/mapAuctionRegistration";
import { AuctionRegistration } from "../models/AuctionRegistration";
import { MyRequest } from "./MyRequest";

interface ResultInteface {
    auctionRegistrationsData: AuctionRegistration[];
}

interface ResultPagingInteface {
    auctionRegistrationsData: AuctionRegistration[]
    totalElements: number
}


export async function getAuctionRegistrationsByAuctionId(auctionId: number): Promise<ResultInteface> {
    // endpoint
    const URL = `${BASE_URL}/auction-registration/auction/${auctionId}`;
    // request
    try {
        const response = await MyRequest(URL);
        const auctionRegistrationsData = response.map((item: any) => mapAuctionRegistration(item));
        
        return { auctionRegistrationsData };
    } catch (error) {
        console.error('Error fetching auction registrations:', error);
        throw error;
    }
}

export async function getAuctionRegistrationByUserId(userId: number, auctionName: string, page: number): Promise<ResultPagingInteface> {
    const URL = `${BASE_URL}/auction-registration/get-by-user?userId=${userId}&auctionName=${auctionName}&page=${page - 1}`;
    try {
        const response = await MyRequest(URL);
        if (!response || !response.content) {
            throw new Error("Không tìm thấy");
        }

        const auctionRegistrationsData: AuctionRegistration[] = response.content.map((item: any) => mapAuctionRegistration(item));
        const totalElements = response.totalElements;

        return {
            auctionRegistrationsData,
            totalElements,
        };
    } catch (error) {
        console.error('Error fetching auction registrations:', error);
        throw error;
    }
}

