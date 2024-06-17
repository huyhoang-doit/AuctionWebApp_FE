import BASE_URL from "../global_variable/config";
import { fetchGetWithToken } from "./AuthenticationAPI";

export const getDashBoardInformation = async (yearGetRegisterAccount: number, yearGetAuction: number) => {
    const token = localStorage.getItem('access_token');
    const URL = `${BASE_URL}/dashboard?yearGetRegisterAccount=${yearGetRegisterAccount}&yearGetAuction=${yearGetAuction}`;
    const response = await fetchGetWithToken(URL, 'GET', token);
    const data = await response.json();
    return data;
};