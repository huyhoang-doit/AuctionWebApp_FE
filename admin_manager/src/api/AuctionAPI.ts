import BASE_URL from "../config/config";
import { Auction } from "../models/Auction";
import { MyRequest } from "./MyRequest";

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
    const auctions: Auction[] = [];
    // endpoint
    const URL = `${BASE_URL}/auction/sorted-and-paged?state=${state}&categoryId=${cateId}&page=${pageable.page - 1}&size=${pageable.size}`;
    // request
    const response = await MyRequest(URL);
    const responseData = response.content;
    const totalPages = response.totalPages;
    const totalAuctions = response.totalElements;
    const numberAuctionsPerPage = response.numberOfElements;

    if (responseData) {
        for (const key in responseData) {
            auctions.push({
                id: responseData[key].id,
                name: responseData[key].name,
                description: responseData[key].description,
                firstPrice: responseData[key].firstPrice,
                lastPrice: responseData[key].lastPrice,
                participationFee: responseData[key].participationFee,
                deposit: responseData[key].deposit,
                priceStep: responseData[key].priceStep,
                startDate: responseData[key].startDate,
                endDate: responseData[key].endDate,
                countdownDuration: responseData[key].countdownDuration,
                state: responseData[key].state,
                jewelry: {
                    id: responseData[key].jewelry.id,
                    name: responseData[key].jewelry.name,
                },
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
export async function getAllAuctions(state: string, page: number): Promise<ResultPageableInteface> {
    const auctions: Auction[] = [];
    // endpoint
    const URL = `${BASE_URL}/auction/sorted-and-paged?state=${state}&page=${page - 1}`;
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
                description: response.description,
                firstPrice: response.firstPrice,
                lastPrice: response.lastPrice,
                participationFee: response.participationFee,
                deposit: response.deposit,
                priceStep: response.priceStep,
                startDate: response.startDate,
                endDate: response.endDate,
                countdownDuration: response.countdownDuration,
                state: response.state,
                jewelry: {
                    id: response.jewelry.id,
                    name: response.jewelry.name,
                    description: response.jewelry.description,
                    user: {
                        id: response.jewelry.user.id,
                        username: response.jewelry.user.username,
                        fullName: response.jewelry.user.fullName,
                    },
                    material: response.jewelry.material,
                    weight: response.jewelry.weight
                },
                user: {
                    id: response.user.id,
                    username: response.user.username,
                    fullName: response.user.fullName,
                }
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

export async function gettop3PriceAndState(): Promise<ResultInteface> {
    const auctions: Auction[] = [];
    // endpoint
    const URL = `${BASE_URL}/auction/get-top-3-price?state=ONGOING&state=WAITING`;

    // request
    const response = await MyRequest(URL);

    if (response) {
        for (const key in response) {
            auctions.push({
                id: response[key].id,
                name: response[key].name,
                description: response[key].description,
                firstPrice: response[key].firstPrice,
                lastPrice: response[key].lastPrice,
                participationFee: response[key].participationFee,
                deposit: response[key].deposit,
                priceStep: response[key].priceStep,
                startDate: response[key].startDate,
                endDate: response[key].endDate,
                countdownDuration: response[key].countdownDuration,
                state: response[key].state,
                jewelry: {
                    id: response[key].jewelry.id,
                    name: response[key].jewelry.name
                },
            })
        }
    } else {
        throw new Error("Phiên không tồn tại");
    }
    return { auctionsData: auctions };
}

export async function getAuction(auctionId: number): Promise<Auction | null> {
    // endpoint
    const URL = `${BASE_URL}/auction/id/${auctionId}`;

    try {
        // request
        const response = await MyRequest(URL);

        if (response) {
            return {
                id: response.id,
                name: response.name,
                description: response.description,
                firstPrice: response.firstPrice,
                lastPrice: response.lastPrice,
                participationFee: response.participationFee,
                deposit: response.deposit,
                priceStep: response.priceStep,
                startDate: response.startDate,
                endDate: response.endDate,
                countdownDuration: response.countdownDuration,
                state: response.state,
                jewelry: {
                    id: response.jewelry.id,
                    name: response.jewelry.name,
                    description: response.jewelry.description,
                    user: {
                        id: response.jewelry.user.id,
                        username: response.jewelry.user.username,
                        fullName: response.jewelry.user.fullName,
                    },
                    material: response.jewelry.material,
                    weight: response.jewelry.weight
                },
                user: {
                    id: response.user.id,
                    username: response.user.username,
                    fullName: response.user.fullName,
                }
            }
        } else {
            throw new Error("Phiên không tồn tại");
        }
    } catch (error) {
        console.error("Error", error);
        return null
    }
}

export async function getAuctionByStates(selectedStates: string[], pageable: Pageable): Promise<ResultPageableInteface> {
    const auctions: Auction[] = [];
    const selectedStatesQuery = selectedStates.join(',');
    // endpoint
    const URL = `${BASE_URL}/auction/get-by-states?states=${selectedStatesQuery}&page=${pageable.page - 1}&size=${pageable.size}`;
    // request

    const response = await MyRequest(URL);
    const responseData = response.content;
    const totalPages = response.totalPages;
    const totalAuctions = response.totalElements;
    const numberAuctionsPerPage = response.numberOfElements;
    if (response) {
        for (const key in responseData) {
            auctions.push({
                id: responseData[key].id,
                name: responseData[key].name,
                description: responseData[key].description,
                firstPrice: responseData[key].firstPrice,
                lastPrice: responseData[key].lastPrice,
                participationFee: responseData[key].participationFee,
                deposit: responseData[key].deposit,
                priceStep: responseData[key].priceStep,
                startDate: responseData[key].startDate,
                endDate: responseData[key].endDate,
                countdownDuration: responseData[key].countdownDuration,
                state: responseData[key].state,
                jewelry: {
                    id: responseData[key].jewelry.id,
                    name: responseData[key].jewelry.name
                },
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

export async function getAuctionByFilterDay(startDate: string, endDate: string): Promise<ResultInteface> {
    const auctions: Auction[] = [];
    // endpoint
    const URL = `${BASE_URL}/auction/get-by-day/${startDate}/${endDate}`;

    // request
    const response = await MyRequest(URL);

    if (response) {
        for (const key in response) {
            auctions.push({
                id: response[key].id,
                name: response[key].name,
                description: response[key].description,
                firstPrice: response[key].firstPrice,
                lastPrice: response[key].lastPrice,
                participationFee: response[key].participationFee,
                deposit: response[key].deposit,
                priceStep: response[key].priceStep,
                startDate: response[key].startDate,
                endDate: response[key].endDate,
                countdownDuration: response[key].countdownDuration,
                state: response[key].state,
                jewelry: {
                    id: response[key].jewelry.id,
                    name: response[key].jewelry.name
                },
            })
        }
    } else {
        throw new Error("Phiên không tồn tại");
    }
    return { auctionsData: auctions };
}

export async function changeStateAuction(auctionId: number, state: string): Promise<boolean> {
    // endpoint
    const URL = `${BASE_URL}/auction/set-state/${auctionId}?state=${state}`;
    // request
    console.log(URL)
    const response = await fetch(URL, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok) {
        const errorDetails = await response.text();  // Get error details as text
        console.error('Failed to update the book:', errorDetails);
        return false
    }

    return true;
}

export async function getAuctionsByName(txtSearch: string): Promise<ResultInteface> {
    const auctions: Auction[] = [];
    // endpoint
    const URL = `${BASE_URL}/auction/get-by-name/${txtSearch}`;
    // request
    const response = await MyRequest(URL);

    if (response) {
        for (const key in response) {
            auctions.push({
                id: response[key].id,
                name: response[key].name,
                description: response[key].description,
                firstPrice: response[key].firstPrice,
                lastPrice: response[key].lastPrice,
                participationFee: response[key].participationFee,
                deposit: response[key].deposit,
                priceStep: response[key].priceStep,
                startDate: response[key].startDate,
                endDate: response[key].endDate,
                countdownDuration: response[key].countdownDuration,
                state: response[key].state,
                jewelry: {
                    id: response[key].jewelry.id,
                    name: response[key].jewelry.name
                },
            })
        }
    } else {
        throw new Error("Phiên không tồn tại");
    }
    return { auctionsData: auctions };
}

export async function getAuctionsByStateNotPageale(state: string): Promise<ResultInteface> {
    const auctions: Auction[] = [];
    // endpoint
    const URL = `${BASE_URL}/auction/get-by-state?state=${state}`;
    // request
    const response = await MyRequest(URL);

    if (response) {
        for (const key in response) {
            auctions.push({
                id: response[key].id,
                name: response[key].name,
                description: response[key].description,
                firstPrice: response[key].firstPrice,
                lastPrice: response[key].lastPrice,
                participationFee: response[key].participationFee,
                deposit: response[key].deposit,
                priceStep: response[key].priceStep,
                startDate: response[key].startDate,
                endDate: response[key].endDate,
                countdownDuration: response[key].countdownDuration,
                state: response[key].state,
                jewelry: {
                    id: response[key].jewelry.id,
                    name: response[key].jewelry.name
                },
            })
        }
    } else {
        throw new Error("Phiên không tồn tại");
    }
    return { auctionsData: auctions };
}

export async function getAuctionByStaffId(staffId: number, page: number): Promise<ResultPageableInteface> {
    const auctions: Auction[] = [];
    // endpoint
    const URL = `${BASE_URL}/auction/get-by-staff/${staffId}?page=${page - 1}`;

    // request
    const response = await MyRequest(URL);
    const responseData = response.content;
    const totalPages = response.totalPages;
    const totalAuctions = response.totalElements;
    const numberAuctionsPerPage = response.totalElements;
    if (response) {
        for (const key in responseData) {
            auctions.push({
                id: responseData[key].id,
                name: responseData[key].name,
                description: responseData[key].description,
                firstPrice: responseData[key].firstPrice,
                lastPrice: responseData[key].lastPrice,
                participationFee: responseData[key].participationFee,
                deposit: responseData[key].deposit,
                priceStep: responseData[key].priceStep,
                startDate: responseData[key].startDate,
                endDate: responseData[key].endDate,
                countdownDuration: responseData[key].countdownDuration,
                state: responseData[key].state,
                jewelry: {
                    id: responseData[key].jewelry.id,
                    name: responseData[key].jewelry.name
                },
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

export async function getAuctionByJewelryId(id: number): Promise<ResultInteface> {
    const auctions: Auction[] = [];
    // endpoint
    const URL = `${BASE_URL}/auction/get-by-jewelry/${id}`;

    // request
    const response = await MyRequest(URL);

    if (response) {
        for (const key in response) {
            auctions.push({
                id: response[key].id,
                name: response[key].name,
                description: response[key].description,
                firstPrice: response[key].firstPrice,
                lastPrice: response[key].lastPrice,
                participationFee: response[key].participationFee,
                deposit: response[key].deposit,
                priceStep: response[key].priceStep,
                startDate: response[key].startDate,
                endDate: response[key].endDate,
                countdownDuration: response[key].countdownDuration,
                state: response[key].state,
                jewelry: {
                    id: response[key].jewelry.id,
                    name: response[key].jewelry.name
                },
            })
        }
    } else {
        throw new Error("Phiên không tồn tại");
    }
    return { auctionsData: auctions };
}