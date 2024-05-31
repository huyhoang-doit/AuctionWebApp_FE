import { User } from "../models/User";
import { ensureAccessToken, fetchWithToken } from "./AuthenticationAPI";
import { MyRequest } from "./MyRequest";

export const checkEmailExist = async (email: string) => {
  const URL = `http://localhost:8080/api/v1/user/by-email/${email}`;
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
  const URL = `http://localhost:8080/api/v1/user/by-username/${username}`;
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
  const URL = `http://localhost:8080/api/v1/user/by-username/${username}`;
  const response = await MyRequest(URL);
  // console.log(response)
  return response;
};

export const editProfileUser = async (user: User): Promise<User> => {
  const URL = `http://localhost:8080/api/v1/user`;

  await ensureAccessToken();

  const token = localStorage.getItem("access_token");
  const response = await fetchWithToken(URL, 'PUT', token, user);
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  return response.json();
};

export const getUserById = async (id: number): Promise<User> => {
  const URL = `http://localhost:8080/api/v1/user//${id}`;
  const response = await MyRequest(URL);
  console.log(response)
  return response;
};

export const getWinnerByAuctionId = async (auctionID: number | undefined): Promise<User> => {
  const URL = `http://localhost:8080/api/v1/user/get-winner-auction/${auctionID}`;
  const response = await MyRequest(URL);
  // console.log(response)
  return response;
};

