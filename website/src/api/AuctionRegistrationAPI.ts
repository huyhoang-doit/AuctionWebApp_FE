
import BASE_URL from "../config/config";
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
    const auctionRegistrations: AuctionRegistration[] = [];
    // endpoint
    const URL = `${BASE_URL}/auction-registration/auction/${auctionId}`;
    // request
    const response = await MyRequest(URL);

    if (response) {
        for (const key in response) {
            auctionRegistrations.push({
                id: response[key].id,
                registrationFee: response[key].registrationFee,
                registrationDate: response[key].registrationDate,
                state: response[key].auctionRegistrationState,
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

export async function getAuctionRegistrationByUserId(userId: number, auctionName: string, page: number): Promise<ResultPagingInteface> {
    const auctionRegistrations: AuctionRegistration[] = [];
    const URL = `${BASE_URL}/auction-registration/get-by-user?userId=${userId}&auctionName=${auctionName}&page=${page - 1}`;
    try {
        const response = await MyRequest(URL);
        console.log(response);

        if (!response || !response.content) {
            throw new Error("Không tìm thấy");
        }

        const responseData = response.content;

        for (const item of responseData) {
            auctionRegistrations.push({
                id: item.id,
                registrationFee: item.registrationFee,
                registrationDate: item.registrationDate,
                state: item.auctionRegistrationState,
                user: item.user,
                auction: item.auction,
            });
        }

        return {
            auctionRegistrationsData: auctionRegistrations,
            totalElements: response.totalElements,
        };
    } catch (error) {
        console.error('Error fetching auction registrations:', error);
        throw error;
    }
}

