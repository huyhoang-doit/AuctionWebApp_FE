import BASE_URL from "../config/config";
import { Transaction } from "../models/Transaction";
import { User } from "../models/User";
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
    const transactions: Transaction[] = [];
    // end-point
    const URL = `${BASE_URL}/transaction/get-by-username?username=${username}&page=${page - 1}`;
    // call api
    const response = await MyRequest(URL);
    const responseData = response.content;
    if (response) {
        for (const key in responseData) {
            transactions.push({
                id: responseData[key].id,
                createDate: responseData[key].createDate,
                totalPrice: responseData[key].totalPrice,
                feesIncurred: responseData[key].feesIncurred,
                state: responseData[key].state,
                type: responseData[key].type,
                auction: responseData[key].auction
            })
        }
    } else {
        throw new Error("Transaction không tồn tại");
    }
    return {
        transactions: transactions,
        totalElements: response.totalElements
    };
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

export async function getTransactionsByTypeAndState(type: string, state: string, page: number): Promise<ResultInteface> {
    const transactions: Transaction[] = [];
    // end-point
    const URL = `${BASE_URL}/transaction/get-by-type-state?type=${type}&state=${state}&page=${page - 1}`;
    // call api
    const response = await MyRequest(URL);
    const responseData = response.content;
    if (response) {
        for (const item of responseData) {
            transactions.push({
                id: item.id,
                createDate: item.createDate,
                paymentTime: item.paymentTime,
                totalPrice: item.totalPrice,
                feesIncurred: item.feesIncurred,
                state: item.state,
                type: item.type,
                auction: item.auction,
                paymentMethod: item.paymentMethod,
                user: item.user
            });
        }
    } else {
        throw new Error("Transaction không tồn tại");
    }
    return {
        transactions: transactions,
        totalElements: response.totalElements
    };
}