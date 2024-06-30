import { Auction } from "../models/Auction";
import { MyRequest } from "./MyRequest";
import BASE_URL from '../config/config';
import { Jewelry } from "../models/Jewelry";
import { User } from "../models/User";

interface ResultPageableInteface {
    auctionsData: Auction[];
    totalPages: number;
    numberAuctionsPerPage: number;
    totalAuctions: number
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
        const errorDetails = await response.text();  // Get error details as text
        console.error('Failed to update the auction state:', errorDetails);
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

export async function getAuctionByStaffId(staffId: number, auctionName: string, page: number): Promise<ResultPageableInteface> {
    // endpoint
    const URL = `${BASE_URL}/auction/get-by-staff/${staffId}?auctionName=${auctionName}&page=${page - 1}`;
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


export async function getCurrentAuctionByJewelryId(id: number): Promise<Auction> {
    // endpoint
    const URL = `${BASE_URL}/auction/get-current-by-jewelry/${id}`;

    // request
    const response = await MyRequest(URL);

    if (response) {

        return response
    } else {
        throw new Error("Phiên không tồn tại");
    }
}