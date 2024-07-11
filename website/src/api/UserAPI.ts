
import BASE_URL from "../config/config";
import { User } from "../models/User";
import { fetchNoBodyWithToken, fetchWithToken } from "./AuthenticationAPI";
import { MyRequest } from "./MyRequest";

export const checkEmailExist = async (email: string) => {
    const URL = `${BASE_URL}/user/by-email/${email}`;
    try {
        const response = await MyRequest(URL);

        if (response) {
            return true;
        }
        return false;
    } catch (error) {
        return false;
    }
};

export const checkUsernameExist = async (username: string) => {
    const URL = `${BASE_URL}/user/by-username/${username}`;
    try {
        const response = await MyRequest(URL);
        if (response) {
            return true;
        }
        return false;
    } catch (error) {
        return false;
    }
};

export const getUserLogin = async (username: string): Promise<User> => {
    const URL = `${BASE_URL}/user/by-username/${username}`;
    const response = await MyRequest(URL);
    return response;
};

export const getUserById = async (id: number): Promise<User> => {
    const token = localStorage.getItem('access_token');
    if (!token) {
        throw new Error("No access token found");
    }
    const URL = `${BASE_URL}/user/${id}`;
    const response = await fetch(URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });
    const data = await response.json();
    return data;
};

export const getWinnerByAuctionId = async (auctionID: number | undefined): Promise<User> => {
    const URL = `${BASE_URL}/user/get-winner-auction/${auctionID}`;
    const response = await MyRequest(URL);
    return response;
};

export const editProfileUser = async (user: User): Promise<User> => {
    const URL = `${BASE_URL}/user`;

    // await ensureAccessToken();
    const token = localStorage.getItem("access_token");
    const response = await fetchWithToken(URL, 'PUT', token, user);
    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
    }
    return user;
};

export async function getUserRegistrationByAuction(auctionId: number) {
    const token = localStorage.getItem('access_token');
    if (!token) {
        throw new Error("No access token found");
    }

    const URL = `${BASE_URL}/user/get-user-registration/${auctionId}`;

    const response = await fetchNoBodyWithToken(URL, 'GET', token);

    if (!response.ok) {
        throw new Error(`Cannot access ${URL}`);
    }

    const data = await response.json();

    const users: User[] = data.map((item: any) => ({
        id: item.id,
        username: item.username,
        firstName: item.firstName,
        lastName: item.lastName,
        email: item.email,
        fullName: item.fullName,
        phone: item.phone,
        address: item.address,
        district: item.district,
        ward: item.ward,
        city: item.city,
        yob: item.yob,
        cccd: item.cccd,
        state: item.state,
        avatar: item.avatar,
        bankAccountNumber: item.bankAccountNumber,
        bankAccountName: item.bankAccountName
    }));

    return users;
}
