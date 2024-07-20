import { Auction } from "../models/Auction";
import { MyRequest } from "./MyRequest";
import BASE_URL from '../config/config';
import { mapAuction } from "../mappings/mapAuction";

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

export async function getAuctions(state: string, cateId: number, pageable: Pageable): Promise<ResultPageableInteface> {
    // endpoint
    const URL = `${BASE_URL}/auction/sorted-and-paged?&state=${state}&categoryId=${cateId}&page=${pageable.page - 1}&size=${pageable.size}`;
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

export async function updateAuctionEndTime(auctionId: number, time: number) {
    // endpoint
    const URL = `${BASE_URL}/auction/update-end-date/${auctionId}?time=${time}`;
    // request
    try {
        // Make PUT request to update auction end time
        const response = await fetch(URL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const updatedAuction = await response.json();

        return updatedAuction;
    } catch (error) {
        console.error('Error updating auction end time:', error);
        throw new Error('Phiên không tồn tại');
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

export async function getAuctionByFilterDay(startDate: string, endDate: string, pageable: Pageable): Promise<ResultPageableInteface> {
    // endpoint
    const URL = `${BASE_URL}/auction/get-by-day?startDate=${startDate}&endDate=${endDate}&page=${pageable.page - 1}&size=${pageable.size}`;

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

export async function getAuctionsByName(txtSearch: string, pageable: Pageable): Promise<ResultPageableInteface> {
    // endpoint
    const URL = `${BASE_URL}/auction/sorted-and-paged?auctionName=${txtSearch}&page=${pageable.page - 1}&size=${pageable.size}`;
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

    // request
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