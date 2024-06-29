
import BASE_URL from "../global_variable/config";
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
                    username: response[key].user.username,
                },
                auction: {
                    id: response[key].auction.id,
                    name: response[key].auction.name,
                    description: response[key].auction.description,
                    firstPrice: response[key].auction.firstPrice,
                    lastPrice: response[key].auction.lastPrice,
                    participationFee: response[key].auction.participationFee,
                    deposit: response[key].auction.deposit,
                    priceStep: response[key].auction.priceStep,
                    startDate: response[key].auction.startDate,
                    endDate: response[key].auction.endDate,
                    countdownDuration: response[key].auction.countdownDuration,
                    state: response[key].auction.state,
                }
            })
        }
    } else {
        throw new Error("Không tìm thấy");
    }
    return { auctionRegistrationsData: auctionRegistrations };
}

export async function getAuctionRegistrationByUserId(userId: number, page: number): Promise<ResultPagingInteface> {
    const auctionRegistrations: AuctionRegistration[] = [];
    const URL = `${BASE_URL}/auction-registration/get-by-user?userId=${userId}&page=${page - 1}`;

    try {
        const response = await MyRequest(URL);

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

