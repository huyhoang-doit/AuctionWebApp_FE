import BASE_URL from "../config/config";
import { mapTransaction } from "../mappings/mapTransaction";
import { Transaction } from "../models/Transaction";
import { User } from "../models/User";
import { fetchNoBodyWithToken } from "./AuthenticationAPI";
import { MyRequest } from "./MyRequest";

interface ResultInteface {
    transactions: Transaction[]
    totalElements: number
}

interface ResultIntefaceDashboard {
    numberTransactionsRequest: number;
    totalPriceJewelryWonByUsername: number;
    totalJewelryWon: number,
    totalBid: number;
}

export const getTransactionsDashboardByUsername = async (username: string): Promise<ResultIntefaceDashboard> => {
    // end-point
    const URL = `${BASE_URL}/transaction/get-by-user-name/${username}`;
    // call api
    const response = await MyRequest(URL);
    return {
        numberTransactionsRequest: response.numberTransactionsRequest,
        totalPriceJewelryWonByUsername: response.totalPriceJewelryWonByUsername,
        totalJewelryWon: response.totalJewelryWon,
        totalBid: response.totalBid,
    };
};

export const getTransactionsByUsername = async (username: string, assetName: string, page: number): Promise<ResultInteface> => {
    // end-point
    const URL = `${BASE_URL}/transaction/get-by-username?username=${username}&assetName=${assetName}&page=${page - 1}`;
    // call api
    try {
        const response = await MyRequest(URL);
        const transactions: Transaction[] = response.content.map((transaction: any) => mapTransaction(transaction));
        const totalElements: number = response.totalElements;

        return {
            transactions: transactions,
            totalElements: totalElements
        };
    } catch (error) {
        console.error("Error fetching requests by sender role:", error);
        return {
            transactions: [],
            totalElements: 0
        };
    }
};

export const createTransactionForWinner = async (auctionId: number): Promise<User | null> => {
    // end-point
    const URL = `${BASE_URL}/transaction/create-transaction-for-winner/${auctionId}`;
    try {
        // call api
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            return null;
        }

        const userWinner = await response.json();
        return userWinner;
    } catch (error) {
        return null;
    }
};

export const createTransactionForSeller = async (auctionId: number): Promise<User | null> => {
    // end-point
    const URL = `${BASE_URL}/transaction/create-transaction-for-seller/${auctionId}`;
    try {
        // call api
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            return null;
        }

        const userWinner = await response.json();
        return userWinner;
    } catch (error) {
        return null;
    }
};

export const createTransactionForWinnerIfNotExist = async (userId: number): Promise<Transaction[]> => {
    // end-point
    const URL = `${BASE_URL}/transaction/create-transaction-for-winner-if-not-exist/${userId}`;
    try {
        // call api
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to create transaction');
        }
        const createdTransactions: Transaction[] = await response.json();
        return createdTransactions;
    } catch (error) {
        throw error;
    }
};

export async function getTransactionsByTypeAndState(type: string, state: string, page: number): Promise<ResultInteface> {
    // end-point
    const URL = `${BASE_URL}/transaction/get-by-type-state?type=${type}&state=${state}&page=${page - 1}`;
    // call api
    try {
        const response = await MyRequest(URL);

        const transactions: Transaction[] = response.content.map((transaction: any) => mapTransaction(transaction));
        const totalElements: number = response.totalElements;
        return {
            transactions: transactions,
            totalElements: totalElements
        };
    } catch (error) {
        console.error("Error fetching requests by sender role:", error);
        return {
            transactions: [],
            totalElements: 0
        };
    }
}

export async function getHandoverTransaction(type: string, jewelryName: string, category: string, page: number): Promise<ResultInteface> {
    // end-point
    const URL = `${BASE_URL}/transaction/get-handover?type=${type}&jewelryName=${jewelryName}&category=${category}&page=${page - 1}`;
    // call api
    try {
        const response = await MyRequest(URL);

        const transactions: Transaction[] = response.content.map((transaction: any) => mapTransaction(transaction));
        const totalElements: number = response.totalElements;
        return {
            transactions: transactions,
            totalElements: totalElements
        };
    } catch (error) {
        console.error("Error fetching requests by sender role:", error);
        return {
            transactions: [],
            totalElements: 0
        };
    }
}

export async function setMethodTransaction(transactionId: number, method: string): Promise<boolean> {
    const accessToken = localStorage.getItem('access_token');
    // endpoint
    const URL = `${BASE_URL}/transaction/set-method/${transactionId}?method=${method}`;
    // call api
    try {
        const response = await fetchNoBodyWithToken(URL, 'PUT', accessToken);
        if (!response.ok) {
            throw new Error(`Không thể truy cập ${URL}`);
        }
        return true;
    } catch (error) {
        console.error("Error: " + error);
        return false;
    }
}
