import { fetchGetWithToken } from "./AuthenticationAPI";

export const getDashBoardInformation = async () => {
    const token = localStorage.getItem('access_token');
    const URL = `http://localhost:8080/api/v1/dashboard`;
    const response = await fetchGetWithToken(URL, 'GET', token);
    const data = await response.json();
    return data;
};