import BASE_URL from "../config/config";
import { Category } from "../models/Category";
import { MyRequest } from "./MyRequest";

async function getCategories(URL: string): Promise<Category[]> {
    const result: Category[] = [];

    // request
    const response = await MyRequest(URL);

    for (const key in response) {
        result.push({
            id: response[key].id,
            name: response[key].name,
        })
    }

    return result;
}

export async function getAllCategories(): Promise<Category[]> {
    // endpoint
    const URL: string = `${BASE_URL}/jewelry-category/get-all`;

    return getCategories(URL);
}
