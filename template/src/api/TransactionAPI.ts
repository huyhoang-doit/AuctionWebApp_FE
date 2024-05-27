import { Transaction } from "../models/Transaction";
import { MyRequest } from "./MyRequest";

interface ResultInteface {
    transactionsData: Transaction[];
}

export const getTransactionsByUsername = async (username: string): Promise<ResultInteface> => {
    const transactions: Transaction[] = [];
    // end-point
    const URL = `http://localhost:8080/api/v1/transaction/get-by-user-name/${username}`;
    // call api
    const response = await MyRequest(URL);

    if (response) {
        for (const key in response) {
            transactions.push({
                id: response[key].id,
                createDate: response[key].createDate,
                totalPrice: response[key].totalPrice,
                feesIncurred: response[key].feesIncurred,
                state: response[key].state,
                type: response[key].type,
            })
        }
    } else {
        throw new Error("Transaction không tồn tại");
    }
    return {
        transactionsData: transactions
    };
};