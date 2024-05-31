import { City } from "../models/City";

export const getAddressVietNam = async (): Promise<City[] | null> => {
  const URL = `https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json`;
  try {
    const response = await fetch(URL); // Use fetch to make the HTTP request

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json(); // Parse JSON response
    return data; // Return the fetched data
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};