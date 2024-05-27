import { Image } from "../models/Image";

interface JewelryRequest {
  id: number;
  name: string;
  price: number | string;
  brand: string;
  description?: string;
  images: Array<Image> | string;
  user: string;
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