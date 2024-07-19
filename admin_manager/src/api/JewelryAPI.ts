import BASE_URL from "../global_variable/config";
import { mapJewelry } from "../mappings/mapJewelry";
import { Jewelry } from "../models/Jewelry";
import { fetchWithToken } from "./AuthenticationAPI";
import { MyRequest } from "./MyRequest";

interface ResultPageableInteface {
    jewelriesData: Jewelry[];
    totalElements: number
}

interface EditJewelryRequest {
    id: number;
    name: string;
    buyNowPrice: number | undefined;
    state: string | undefined;
    category: string | undefined;
    receivedDate: string;
    deliveryDate: string;
    description: string | undefined;
    material: string | undefined;
    brand: string | undefined;
    weight: number | undefined;
    isHolding: boolean | undefined;
    createDate: string | undefined;
}

interface AddJewelryRequest {
    id: number;
    name: string;
    buyNowPrice: number;
    category: string;
    description: string;
    material: string;
    brand: string;
    weight: number;
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
        throw new Error("Failed to fetch jewelries");
    }
}

export async function getAllJewelriesManager(jewelryName: string, category: string, state: string, page: number): Promise<ResultPageableInteface> {
    const jewelriesData: Jewelry[] = [];

    const URL = `${BASE_URL}/jewelry/manager-list?page=${page - 1}&category=${category}&state=${state}&jewelryName=${jewelryName}`;

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
        throw new Error("Failed to fetch jewelries");
    }
}

export async function editJewelryById(jewelry: EditJewelryRequest): Promise<Jewelry> {
    const access_token = localStorage.getItem("access_token");
    const URL = `${BASE_URL}/jewelry/edit`;
    try {
        const response = await fetchWithToken(URL, "PUT", access_token, jewelry);

        if (!response.ok) {
            throw new Error(`Cannot access ${URL}`);
        }
        const data = await response.json();
        return mapJewelry(data);
    } catch (error) {
        throw new Error("Failed to fetch jewelry");
    }
}

export async function addNewJewelry(jewelry: AddJewelryRequest): Promise<Jewelry> {
    const access_token = localStorage.getItem("access_token");
    const URL = `${BASE_URL}/jewelry`;
    const jewelryData = { ...jewelry, token: access_token };
    try {
        const response = await fetchWithToken(URL, "POST", access_token, jewelryData);

        if (!response.ok) {
            throw new Error(`Cannot access ${URL}`);
        }
        const data = await response.json();
        return mapJewelry(data);
    } catch (error) {
        throw new Error("Failed to fetch jewelry");
    }
}

export async function getJewelryPassed(jewelryName: string, category: string, page: number): Promise<ResultPageableInteface> {
    const jewelriesData: Jewelry[] = [];

    const URL = `${BASE_URL}/jewelry/jewelry-passed?page=${page - 1}&category=${category}&jewelryName=${jewelryName}`;

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
        throw new Error("Failed to fetch jewelries");
    }
}