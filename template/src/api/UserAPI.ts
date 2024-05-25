import { User } from "../models/User";
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