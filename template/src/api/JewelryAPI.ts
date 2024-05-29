import { Image } from "../models/Image";
import { Jewelry } from "../models/Jewelry";
import { MyRequest } from "./MyRequest";

interface JewelryRequest {
  id: number;
  name: string;
  price: number | string;
  brand: string;
  description?: string;
  images: Array<Image> | string;
  user: string;
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
  // end-point
  const URL = `http://localhost:8080/api/v1/auth/`;
  // call api
  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ ...jewelryRequest }),
    });

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

export async function getJewelriesWaitList(): Promise<Jewelry[]> {
  // endpoint
  const URL: string = `http://localhost:8080/api/v1/jewelry/in-wait-list`;

  return getJewelries(URL);
}

export async function setJewelryHidden(id: number): Promise<boolean> {
  // endpoint
  const URL: string = `http://localhost:8080/api/v1/jewelry/${id}`;

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

export async function getJewelriesHandOverList(): Promise<Jewelry[]> {
  // endpoint
  const URL: string = `http://localhost:8080/api/v1/jewelry/in-handover-list`;

  return getJewelries(URL);
}
