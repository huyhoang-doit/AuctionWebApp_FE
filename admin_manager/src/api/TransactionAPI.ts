import BASE_URL from "../global_variable/config";
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

export const getTransactionsByUsername = async (username: string, page: number): Promise<ResultInteface> => {
    // end-point
    const URL = `${BASE_URL}/transaction/get-by-username?username=${username}&page=${page - 1}`;
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

export async function getTransactionsByTypeAndState(type: string, userName: string, state: string, page: number): Promise<ResultInteface> {
    // end-point
    const URL = `${BASE_URL}/transaction/get-by-type-state?type=${type}&state=${state}&userName=${userName}&page=${page - 1}`;
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

export async function changeStateTransaction(transactionId: number, state: string): Promise<boolean> {
    const accessToken = localStorage.getItem('access_token');
    // endpoint
    const URL = `${BASE_URL}/transaction/set-state/${transactionId}?state=${state}`;
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



export async function getOverdueTransactions(userName: string, page: number): Promise<ResultInteface> {
    // end-point
    const URL = `${BASE_URL}/transaction/get-overdue?page=${page - 1}&userName=${userName}`;
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