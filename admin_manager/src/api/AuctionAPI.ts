/* eslint-disable @typescript-eslint/no-explicit-any */
import BASE_URL from "../global_variable/config";
import { Auction } from "../models/Auction";
import { Jewelry } from "../models/Jewelry";
import { User } from "../models/User";
import { fetchNoBodyWithToken, fetchWithToken } from "./AuthenticationAPI";
import { MyRequest } from "./MyRequest";

interface NewAuctionRequestProps {
    id: number;
    name: string;
    startDate: string;
    endDate: string;
    description: string;
    firstPrice: number;
    deposit: number;
    priceStep: number;
    jewelryId: number;
    staffId: number;
}

interface ResultPageableInteface {
    auctionsData: Auction[];
    totalPages: number;
    numberAuctionsPerPage: number;
    totalAuctions: number
}

interface AuctionAndNumberRegisterResponse {
    id: number;
    name: string;
    startDate: string;
    endDate: string;
    state: string;
    numberOfParticipants: number;
}

interface ResultInteface {
    auctionsData: Auction[];
}

interface Pageable {
    page: number;
    size: number;
}

function mapUser(userData: any): User {
    return {
        id: userData.id,
        username: userData.username,
        fullName: userData.fullName,
        firstName: userData.firstName,
        lastName: userData.lastName,
        password: userData.password,
        state: userData.state,
        cccdFirst: userData.cccdFirst,
        cccdLast: userData.cccdLast,
        cccdFrom: userData.cccdFrom,
        email: userData.email,
        phone: userData.phone,
        address: userData.address,
        district: userData.district,
        ward: userData.ward,
        city: userData.city,
        yob: userData.yob,
        cccd: userData.cccd,
        bank: userData.bank,
        bankAccountNumber: userData.bankAccountNumber,
        bankAccountName: userData.bankAccountName,
    };
}

function mapJewelry(jewelryData: any): Jewelry {
    return {
        id: jewelryData.id,
        name: jewelryData.name,
        description: jewelryData.description,
        user: mapUser(jewelryData.user),
        brand: jewelryData.brand,
        category: jewelryData.category,
        material: jewelryData.material,
        weight: jewelryData.weight
    };
}

function mapAuction(auctionData: any): Auction {
    return {
        id: auctionData.id,
        name: auctionData.name,
        description: auctionData.description,
        firstPrice: auctionData.firstPrice,
        lastPrice: auctionData.lastPrice,
        participationFee: auctionData.participationFee,
        deposit: auctionData.deposit,
        priceStep: auctionData.priceStep,
        startDate: auctionData.startDate,
        endDate: auctionData.endDate,
        countdownDuration: auctionData.countdownDuration,
        state: auctionData.state,
        jewelry: mapJewelry(auctionData.jewelry),
        user: mapUser(auctionData.user),
    };
}

export async function getAuctions(state: string, cateId: number, pageable: Pageable): Promise<ResultPageableInteface> {
    // endpoint
    const URL = `${BASE_URL}/auction/sorted-and-paged?state=${state}&categoryId=${cateId}&page=${pageable.page - 1}&size=${pageable.size}`;
    // request
    try {
        const response = await MyRequest(URL);
        const auctionsData: Auction[] = response.content.map((auction: any) => mapAuction(auction));
        const totalPages = response.totalPages;
        const totalAuctions = response.totalElements;
        const numberAuctionsPerPage = response.numberOfElements;

        return {
            auctionsData,
            numberAuctionsPerPage,
            totalPages,
            totalAuctions,
        };
    } catch (error) {
        console.error("Error fetching auctions:", error);
        throw new Error("Phiên không tồn tại");
    }
}

export async function getAllAuctions(state: string, auctionName: string, page: number): Promise<ResultPageableInteface> {
    // endpoint
    const URL = `${BASE_URL}/auction/sorted-and-paged?state=${state}&page=${page - 1}&auctionName=${auctionName}`;
    // request    
    try {
        const response = await MyRequest(URL);
        const auctionsData: Auction[] = response.content.map((auction: any) => mapAuction(auction));
        const totalPages = response.totalPages;
        const totalAuctions = response.totalElements;
        const numberAuctionsPerPage = response.numberOfElements;
        return {
            auctionsData,
            numberAuctionsPerPage,
            totalPages,
            totalAuctions,
        };
    } catch (error) {
        console.error("Error fetching auctions:", error);
        throw new Error("Phiên không tồn tại");
    }
}

export async function gettop3PriceAndState(): Promise<ResultInteface> {
    let auctions: Auction[] = [];
    // endpoint
    const URL = `${BASE_URL}/auction/get-top-3-price?state=ONGOING&state=WAITING`;

    try {
        const response = await MyRequest(URL);
        if (response) {
            auctions = response.map((auctionData: any) => mapAuction(auctionData));
        } else {
            throw new Error("Phiên không tồn tại");
        }

        return { auctionsData: auctions };
    } catch (error) {
        console.error("Error fetching top 3 auctions:", error);
        throw new Error("Phiên không tồn tại");
    }
}

export async function getAuction(auctionId: number): Promise<Auction | null> {
    // endpoint
    const URL = `${BASE_URL}/auction/id/${auctionId}`;

    try {
        // request
        const response = await MyRequest(URL);

        if (response) {
            return mapAuction(response);
        } else {
            throw new Error("Phiên không tồn tại");
        }
    } catch (error) {
        console.error("Error", error);
        return null
    }
}

export async function getAuctionByStates(selectedStates: string[], pageable: Pageable): Promise<ResultPageableInteface> {
    const selectedStatesQuery = selectedStates.join(',');
    // endpoint
    const URL = `${BASE_URL}/auction/get-by-states?states=${selectedStatesQuery}&page=${pageable.page - 1}&size=${pageable.size}`;
    // request
    try {
        const response = await MyRequest(URL);
        const auctionsData: Auction[] = response.content.map((auction: any) => mapAuction(auction));
        const totalPages = response.totalPages;
        const totalAuctions = response.totalElements;
        const numberAuctionsPerPage = response.numberOfElements;
        return {
            auctionsData,
            numberAuctionsPerPage,
            totalPages,
            totalAuctions,
        };
    } catch (error) {
        console.error("Error fetching auctions:", error);
        throw new Error("Phiên không tồn tại");
    }
}

export async function getAuctionByFilterDay(startDate: string, endDate: string): Promise<ResultInteface> {
    let auctions: Auction[] = [];
    // endpoint
    const URL = `${BASE_URL}/auction/get-by-day/${startDate}/${endDate}`;

    // request
    const response = await MyRequest(URL);

    if (response) {
        auctions = response.map((auctionData: any) => mapAuction(auctionData));
    } else {
        throw new Error("Phiên không tồn tại");
    }
    return { auctionsData: auctions };
}

export async function changeStateAuction(auctionId: number, state: string): Promise<boolean> {
    // endpoint
    const URL = `${BASE_URL}/auction/set-state/${auctionId}?state=${state}`;
    // request
    const response = await fetch(URL, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok) {
        const errorDetails = await response.text();
        console.error('Failed to update the book:', errorDetails);
        return false
    }

    return true;
}

export async function getAuctionsByName(txtSearch: string): Promise<ResultInteface> {
    let auctions: Auction[] = [];
    // endpoint
    const URL = `${BASE_URL}/auction/get-by-name/${txtSearch}`;
    // request
    const response = await MyRequest(URL);

    if (response) {
        auctions = response.map((auctionData: any) => mapAuction(auctionData));
    } else {
        throw new Error("Phiên không tồn tại");
    }
    return { auctionsData: auctions };
}

export async function getAuctionsByStateNotPageale(state: string): Promise<ResultInteface> {
    let auctions: Auction[] = [];
    // endpoint
    const URL = `${BASE_URL}/auction/get-by-state?state=${state}`;
    // request
    const response = await MyRequest(URL);

    if (response) {
        auctions = response.map((auctionData: any) => mapAuction(auctionData));
    } else {
        throw new Error("Phiên không tồn tại");
    }
    return { auctionsData: auctions };
}

export async function getAuctionByStaffId(staffId: number, page: number): Promise<ResultPageableInteface> {
    // endpoint
    const URL = `${BASE_URL}/auction/get-by-staff/${staffId}?page=${page - 1}`;
    try {
        // request
        const response = await MyRequest(URL);
        const auctionsData: Auction[] = response.content.map((auction: any) => mapAuction(auction));
        const totalPages = response.totalPages;
        const totalAuctions = response.totalElements;
        const numberAuctionsPerPage = response.totalElements;
        return {
            auctionsData: auctionsData,
            numberAuctionsPerPage: numberAuctionsPerPage,
            totalPages: totalPages,
            totalAuctions: totalAuctions,
        };
    } catch (error) {
        console.error("Error fetching auctions:", error);
        throw new Error("Phiên không tồn tại");
    }
}
export async function getAuctionByJewelryId(id: number): Promise<ResultInteface> {
    let auctions: Auction[] = [];
    // endpoint
    const URL = `${BASE_URL}/auction/get-by-jewelry/${id}`;

    // request
    const response = await MyRequest(URL);

    if (response) {
        auctions = response.map((auctionData: any) => mapAuction(auctionData));
    } else {
        throw new Error("Phiên không tồn tại");
    }
    return { auctionsData: auctions };
}

export const createNewAuctionFromManager = async (request: NewAuctionRequestProps): Promise<boolean> => {
    const accessToken = localStorage.getItem('access_token');
    // end-point
    const URL = `${BASE_URL}/auction/create-new`;
    const participationFee: number = 200000

    // call api
    try {
        const response = await fetchWithToken(URL, 'POST', accessToken, { ...request, participationFee });


        if (!response.ok) {
            throw new Error(`Không thể truy cập ${URL}`);
        }
        return true;
    } catch (error) {
        console.error("Error: " + error);
        return false;
    }
};

export async function getAllAuctionsAndNumberRegister(state: string, auctionName: string, page: number) {
    const auctions: AuctionAndNumberRegisterResponse[] = [];
    // endpoint
    const URL = `${BASE_URL}/auction/get-auction-registration?state=${state}&page=${page - 1}&auctionName=${auctionName}`;
    // request
    const response = await MyRequest(URL);
    const responseData = response.content;

    const totalPages = response.totalPages;
    const totalAuctions = response.totalElements;
    const numberAuctionsPerPage = response.numberOfElements;

    if (responseData) {
        for (const key in responseData) {
            const response = responseData[key]
            auctions.push({
                id: response.id,
                name: response.name,
                startDate: response.startDate,
                endDate: response.endDate,
                state: response.state,
                numberOfParticipants: response.numberOfParticipants,
            })
        }
    } else {
        throw new Error("Phiên không tồn tại");
    }
    return {
        auctionsData: auctions,
        numberAuctionsPerPage: numberAuctionsPerPage,
        totalPages: totalPages,
        totalAuctions: totalAuctions,
    };
}

export async function deleteAuctionResult(transactionId: number): Promise<boolean> {
    const accessToken = localStorage.getItem('access_token');
    // endpoint
    const URL = `${BASE_URL}/auction/delete-result/${transactionId}`;
    // request
    const response = await fetchNoBodyWithToken(URL, 'GET', accessToken);

    if (!response.ok) {
        const errorDetails = await response.text();
        console.error('Failed to update the book:', errorDetails);
        return false
    }

    return true;
}

export async function getAllFailedAuctions(auctionName: string, page: number): Promise<ResultPageableInteface> {
    // endpoint
    const URL = `${BASE_URL}/auction/get-failed-auctions?page=${page - 1}&auctionName=${auctionName}`;
    // request    
    try {
        const response = await MyRequest(URL);
        const auctionsData: Auction[] = response.content.map((auction: any) => mapAuction(auction));
        const totalPages = response.totalPages;
        const totalAuctions = response.totalElements;
        const numberAuctionsPerPage = response.numberOfElements;
        return {
            auctionsData,
            numberAuctionsPerPage,
            totalPages,
            totalAuctions,
        };
    } catch (error) {
        console.error("Error fetching auctions:", error);
        throw new Error("Phiên không tồn tại");
    }
}