import BASE_URL from "../config/config";
import { Transaction } from "../models/Transaction";
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