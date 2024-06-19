import BASE_URL from "../global_variable/config";
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
            logo: response[key].logo,
            tradingName: response[key].tradingName
        })
    }
    return result;
}

export async function getAllBanks(): Promise<Bank[]> {
    // endpoint
    const URL: string = `${BASE_URL}/bank`;

    return getBanks(URL);
}

