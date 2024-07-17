import BASE_URL from "../global_variable/config";
import { mapJewelry } from "../mappings/mapJewelry";
import { Jewelry } from "../models/Jewelry";
import { MyRequest } from "./MyRequest";

interface ResultPageableInteface {
    jewelriesData: Jewelry[];
    totalElements: number
  }

export async function getJewelriesPagination(page: number): Promise<ResultPageableInteface> {
    const jewelriesData: Jewelry[] = [];

    const URL = `${BASE_URL}/jewelry/sorted-and-paged?page=${page - 1}`;
    // request
    try {
        const response = await MyRequest(URL);
        const responseData = response.content;

        if (responseData) {
            responseData.forEach((jewelryData: any) => {
                jewelriesData.push(mapJewelry(jewelryData));
            });
        }
        return {
            jewelriesData: jewelriesData,
            totalElements: response.totalElements,
        };
    } catch (error) {
        console.error("Error fetching jewelries:", error);
        throw new Error("Failed to fetch jewelries");
    }
}