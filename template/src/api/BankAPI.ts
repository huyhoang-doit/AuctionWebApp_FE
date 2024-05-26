import { Bank } from "../models/Bank";
import { MyRequest } from "./MyRequest";


async function getBanks(URL: string): Promise<Bank[]> {
    const result: Bank[] = [];

    // request
    const response = await MyRequest(URL);

    for (const key in response) {
        result.push({
            id: response[key].id,
            bankName: response[key].bankName,
            tradingName: response[key].tradingName
        })
    }
    return result;
}

export async function getAllBanks(): Promise<Bank[]> {
    // endpoint
    const URL: string = `http://localhost:8080/api/v1/bank`;

    return getBanks(URL);
}

