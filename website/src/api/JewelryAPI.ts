import BASE_URL from "../config/config";
import { Jewelry } from "../models/Jewelry";
import { fetchWithToken } from "./AuthenticationAPI";
import { MyRequest } from "./MyRequest";

interface JewelryRequest {
  id: number;
  name: string;
  price: number;
  category: string | undefined;
  description: string;
  material: string;
  brand: string;
  weight: number;
  userId: number | undefined;
}

interface ResultPageableInteface {
  jeweriesData: Jewelry[];
  totalElements: number
}

export async function getJewelriesPagination(username: string, page: number): Promise<ResultPageableInteface> {
  const jeweriesData: Jewelry[] = [];


  const URL = `${BASE_URL}/jewelry/sorted-and-paged?username=${username}&page=${page - 1}`;
  // request
  const response = await MyRequest(URL);
  const responseData = response.content;

  for (const key in responseData) {
    jeweriesData.push({
      id: responseData[key].id,
      name: responseData[key].name,
      price: responseData[key].price,
      state: responseData[key].state,
      category: responseData[key].category,
      description: responseData[key].description,
      material: responseData[key].material,
      brand: responseData[key].brand,
      weight: responseData[key].weight,
      user: responseData[key].user
    })
  }
  return {
    jeweriesData: jeweriesData,
    totalElements: response.totalElements,
  };
}

async function getJewelries(URL: string): Promise<Jewelry[]> {
  const result: Jewelry[] = [];

  // request
  const response = await MyRequest(URL);

  for (const key in response) {
    result.push({
      id: response[key].id,
      name: response[key].name,
      price: response[key].price,
      state: response[key].state,
      category: response[key].category,
      description: response[key].description,
      material: response[key].material,
      brand: response[key].brand,
      weight: response[key].weight,
      user: response[key].user
    })
  }

  return result;
}

export const sendJewelryFromUser = async (jewelryRequest: JewelryRequest): Promise<boolean> => {
  const accessToken = localStorage.getItem('access_token');
  // end-point
  const URL = `${BASE_URL}/jewelry/jewelry-request`;
  // call api
  try {
    const response = await fetchWithToken(URL, 'POST', accessToken, jewelryRequest);

    console.log(response);

    if (!response.ok) {
      throw new Error(`Không thể truy cập ${URL}`);
    }
    return true;
  } catch (error) {
    console.error("Error: " + error);
    return false;
  }
};

export async function getJewelriesWaitList(page: number): Promise<ResultPageableInteface> {
  // endpoint
  const URL: string = `${BASE_URL}/jewelry/in-wait-list?page=${page - 1}`;

  const jewelrys: Jewelry[] = [];
  // request
  const response = await MyRequest(URL);
  const responseData = response.content;
  const totalElements = response.totalElements;
  console.log(responseData)


  for (const key in responseData) {
    jewelrys.push({
      id: responseData[key].id,
      name: responseData[key].name,
      price: responseData[key].price,
      state: responseData[key].state,
      category: responseData[key].category,
      description: responseData[key].description,
      material: responseData[key].material,
      brand: responseData[key].brand,
      weight: responseData[key].weight,
      user: responseData[key].user
    })
  }
  return {
    jeweriesData: jewelrys,
    totalElements: totalElements
  }
}

export async function setJewelryHidden(id: number): Promise<boolean> {
  // endpoint
  const URL: string = `${BASE_URL}/jewelry/${id}`;

  console.log(URL)
  const response = await fetch(URL, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (!response.ok) {
    const errorDetails = await response.text();
    console.error('Failed to delete the jewelry:', errorDetails);
    return false
  }

  return true;
}

export async function getJewelriesHandOverList(page: number): Promise<ResultPageableInteface> {
  // endpoint
  const URL: string = `${BASE_URL}/jewelry/in-handover-list?page=${page - 1}`;
  const jewelrys: Jewelry[] = [];
  // request
  const response = await MyRequest(URL);
  const responseData = response.content;
  const totalElements = response.totalElements;

  for (const key in responseData) {
    jewelrys.push({
      id: responseData[key].id,
      name: responseData[key].name,
      price: responseData[key].price,
      state: responseData[key].state,
      category: responseData[key].category,
      description: responseData[key].description,
      material: responseData[key].material,
      brand: responseData[key].brand,
      weight: responseData[key].weight,
      user: responseData[key].user
    })
  }
  return {
    jeweriesData: jewelrys,
    totalElements: totalElements
  }
}

export async function getLatestJewelry(): Promise<Jewelry> {
  const URL = `${BASE_URL}/jewelry/latest`
  const response = await MyRequest(URL);
  console.log(response);

  return response;
}