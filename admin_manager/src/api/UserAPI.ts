
import { fetchGetWithToken, fetchNoBodyWithToken, fetchWithToken } from "./AuthenticationAPI";
import { MyRequest } from "../../../website/src/api/MyRequest";
import { User } from "../models/User";
import BASE_URL from "../global_variable/config";

interface ResultPageableInteface {
    usersData: User[];
    totalElements: number
}

interface RegisterRequest {
    id: number,
    role: string,
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
    district: string;
    ward: string;
    city: string;
    yob: string;
    cccd: string;
}

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
    // console.log(response)
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
    if (!response.ok) {
        throw new Error('Failed to fetch user');
    }
    const data = await response.json();
    return data;
};

export const getWinnerByAuctionId = async (auctionID: number | undefined): Promise<User> => {
    const URL = `${BASE_URL}/user/get-winner-auction/${auctionID}`;
    const response = await MyRequest(URL);
    // console.log(response)
    return response;
};

export async function getMembers(role: string, txtSearch: string, page: number): Promise<ResultPageableInteface> {
    const token = localStorage.getItem('access_token');
    if (!token) {
        throw new Error("No access token found");
    }

    const URL = `${BASE_URL}/user/staff?page=${page - 1}&role=${role}&fullName=${txtSearch}&sortOrder=desc`;

    const response = await fetchGetWithToken(URL, 'GET', token)

    if (!response.ok) {
        throw new Error(`Cannot access ${URL}`);
    }

    const data = await response.json();

    const users: User[] = data.content.map((user: User) => ({
        id: user.id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        fullName: user.fullName,
        phone: user.phone,
        address: user.address,
        district: user.district,
        ward: user.ward,
        city: user.city,
        yob: user.yob,
        cccd: user.cccd,
        state: user.state,
        avatar: user.avatar,
        bankAccountNumber: user.bankAccountNumber,
        bankAccountName: user.bankAccountName
    }));

    return {
        usersData: users,
        totalElements: data.totalElements,
    };
}

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

export async function getTopSpentUser() {
    const token = localStorage.getItem('access_token');
    if (!token) {
        throw new Error("No access token found");
    }

    const URL = `${BASE_URL}/user/get-top-spent-user`;

    const response = await fetchGetWithToken(URL, 'GET', token)

    if (!response.ok) {
        throw new Error(`Cannot access ${URL}`);
    }

    const data = await response.json();

    const users: User[] = data.map((item: { user: User, totalSpent: number }) => ({
        id: item.user.id,
        username: item.user.username,
        firstName: item.user.firstName,
        lastName: item.user.lastName,
        email: item.user.email,
        fullName: item.user.fullName,
        phone: item.user.phone,
        address: item.user.address,
        district: item.user.district,
        ward: item.user.ward,
        city: item.user.city,
        yob: item.user.yob,
        cccd: item.user.cccd,
        state: item.user.state,
        avatar: item.user.avatar,
        bankAccountNumber: item.user.bankAccountNumber,
        bankAccountName: item.user.bankAccountName,
        totalSpent: item.totalSpent,
    }));


    return users;
}

export async function getUsersUnVerify(page: number): Promise<ResultPageableInteface> {
    const token = localStorage.getItem('access_token');
    if (!token) {
        throw new Error("No access token found");
    }

    const URL = `${BASE_URL}/user/get-by-state?state=VERIFIED&page=${page - 1}`;

    const response = await fetchGetWithToken(URL, 'GET', token)

    if (!response.ok) {
        throw new Error(`Cannot access ${URL}`);
    }

    const data = await response.json();

    const users: User[] = data.content.map((user: User) => ({
        id: user.id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        fullName: user.fullName,
        phone: user.phone,
        address: user.address,
        district: user.district,
        ward: user.ward,
        city: user.city,
        yob: user.yob,
        cccd: user.cccd,
        state: user.state,
        avatar: user.avatar,
        bankAccountNumber: user.bankAccountNumber,
        bankAccountName: user.bankAccountName
    }));

    return {
        usersData: users,
        totalElements: data.totalElements,
    };
}

export async function changeStateUser(id: number, state: string) {
    const URL = `${BASE_URL}/user/set-state/${id}`;

    // await ensureAccessToken();
    const token = localStorage.getItem("access_token");
    const response = await fetchWithToken(URL, 'PUT', token, state);
    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
    }
    return true;
}

export async function rejectVerifyUser(id: number) {
    const URL = `${BASE_URL}/user/reject-verify/${id}`;

    // await ensureAccessToken();
    const token = localStorage.getItem("access_token");
    const response = await fetchNoBodyWithToken(URL, 'PUT', token);
    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
    }
}


export const registerAccountStaff = async (registerRequest: RegisterRequest): Promise<boolean> => {
    // end-point
    const URL = `${BASE_URL}/user/staff/register`;
    // call api
    try {
        const token = localStorage.getItem("access_token");
        const response = await fetchWithToken(URL, 'POST', token, registerRequest);

        if (!response.ok) {
            throw new Error(`Không thể truy cập ${URL}`);
        }
        return true;
    } catch (error) {
        console.error("Error: " + error);
        return false;
    }
};