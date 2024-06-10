
import { RequestApproval } from './../models/RequestApproval';

import { User } from "../models/User";
import { MyRequest } from "./MyRequest";
import { fetchWithToken } from './AuthenticationAPI';
import BASE_URL from '../config/config';

interface ResultPageableInteface {
  requestsData: RequestApproval[];
  totalElements: number
}


export async function getRequestById(requestId: number): Promise<RequestApproval | null> {
  // endpoint
  const URL = `${BASE_URL}/request-approval/id/${requestId}`;

  try {
    // request
    const response = await MyRequest(URL);

    if (response) {
      return {
        id: response.id,
        isConfirm: response?.confirm,
        desiredPrice: response?.desiredPrice,
        valuation: response?.valuation,
        requestTime: response?.requestTime,
        responseTime: response?.responseTime,
        state: response?.state,
        jewelry: {
          id: response.jewelry.id,
          name: response.jewelry.name,
          description: response.jewelry.description,
          user: {
            id: response.jewelry.user.id,
            username: response.jewelry.user.username,
            fullName: response.jewelry.user.fullName,
          },
          material: response.jewelry.material,
          weight: response.jewelry.weight
        },
        staff: {
          id: response?.staff.id,
          username: response?.staff.username,
          fullName: response?.staff.fullName,
        },
        sender: {
          id: response?.sender.id,
          username: response?.sender.username,
          fullName: response?.sender.fullName,
        },
        responder: {
          id: response?.responder.id,
          username: response?.responder.username,
          fullName: response?.responder.fullName,
        },
      }
    } else {
      throw new Error("Phiên không tồn tại");
    }
  } catch (error) {
    console.error("Error", error);
    return null
  }
}

export default async function changeStateRequest(requestId: number, state: string): Promise<boolean> {
  // endpoint
  const URL = `${BASE_URL}/request-approval/set-state/${requestId}?state=${state}`;
  // request
  console.log(URL)
  const response = await fetch(URL, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (!response.ok) {
    const errorDetails = await response.text();  // Get error details as text
    console.error('Failed to update the book:', errorDetails);
    return false
  }

  return true;
}

export async function getRequestByRoleOfSender(role: string, page: number): Promise<ResultPageableInteface> {
  // endpoint
  const URL: string = `${BASE_URL}/request-approval/sender/${role}?page=${page - 1}`;

  const requests: RequestApproval[] = [];
  // request
  const response = await MyRequest(URL);
  const responseData = response.content;
  const totalElements = response.totalElements;

  for (const key in responseData) {
    const request = responseData[key];

    const jewelry = {
      id: request.jewelry.id,
      name: request.jewelry.name,
      description: request.jewelry.description,
      user: new User(
        request.jewelry.user.id,
        request.jewelry.user.username,
        request.jewelry.user.fullName,
        request.jewelry.user.firstName,
        request.jewelry.user.lastName,
        request.jewelry.user.password,
        request.jewelry.user.email,
        request.jewelry.user.phone,
        request.jewelry.user.address,
        request.jewelry.user.district,
        request.jewelry.user.ward,
        request.jewelry.user.city,
        request.jewelry.user.yob,
        request.jewelry.user.cccd,
        request.jewelry.user.bank,
        request.jewelry.user.bankAccountNumber,
        request.jewelry.user.bankAccountName
      ),
      brand: request.jewelry.brand,
      category: request.jewelry.category,
      material: request.jewelry.material,
      weight: request.jewelry.weight
    };

    const staff = request.staff ? new User(
      request.staff.id,
      request.staff.username,
      request.staff.fullName,
      request.staff.firstName,
      request.staff.lastName,
      request.staff.password,
      request.staff.email,
      request.staff.phone,
      request.staff.address,
      request.staff.district,
      request.staff.ward,
      request.staff.city,
      request.staff.yob,
      request.staff.cccd,
      request.staff.bank,
      request.staff.bankAccountNumber,
      request.staff.bankAccountName
    ) : undefined;

    const sender = request.sender ? new User(
      request.sender.id,
      request.sender.username,
      request.sender.fullName,
      request.sender.firstName,
      request.sender.lastName,
      request.sender.password,
      request.sender.email,
      request.sender.phone,
      request.sender.address,
      request.sender.district,
      request.sender.ward,
      request.sender.city,
      request.sender.yob,
      request.sender.cccd,
      request.sender.bank,
      request.sender.bankAccountNumber,
      request.sender.bankAccountName
    ) : undefined;

    const responder = request.responder ? new User(
      request.responder.id,
      request.responder.username,
      request.responder.fullName,
      request.responder.firstName,
      request.responder.lastName,
      request.responder.password,
      request.responder.email,
      request.responder.phone,
      request.responder.address,
      request.responder.district,
      request.responder.ward,
      request.responder.city,
      request.responder.yob,
      request.responder.cccd,
      request.responder.bank,
      request.responder.bankAccountNumber,
      request.responder.bankAccountName
    ) : undefined;

    requests.push({
      id: request.id,
      isConfirm: request.confirm,
      desiredPrice: request.desiredPrice,
      valuation: request.valuation,
      requestTime: request.requestTime,
      responseTime: request.responseTime,
      state: request.state,
      jewelry: jewelry,
      staff: staff,
      sender: sender,
      responder: responder,
    });

    console.log(requests);
  }

  return {
    requestsData: requests,
    totalElements: totalElements
  };
}

interface SendReqeustFromUser {
  senderId: number | undefined;
  jewelryId: number;
  requestTime: string
}

export const sendRequestApprovalFromUser = async (request: SendReqeustFromUser): Promise<boolean> => {
  const accessToken = localStorage.getItem('access_token');
  // end-point
  const URL = `${BASE_URL}/request-approval/send-from-user`;
  // call api
  try {
    const response = await fetchWithToken(URL, 'POST', accessToken, request);

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
export async function getRequestByUserId(userId: number, page: number): Promise<ResultPageableInteface> {
  // endpoint
  const URL: string = `${BASE_URL}/request-approval/user/${userId}?page=${page - 1}`;

  console.log(URL);

  const requests: RequestApproval[] = [];
  // request
  const response = await MyRequest(URL);

  const responseData = response.content;
  const totalElements = response.totalElements;

  for (const key in responseData) {
    const request = responseData[key];

    const jewelry = {
      id: request.jewelry.id,
      name: request.jewelry.name,
      description: request.jewelry.description,
      user: new User(
        request.jewelry.user.id,
        request.jewelry.user.username,
        request.jewelry.user.fullName,
        request.jewelry.user.firstName,
        request.jewelry.user.lastName,
        request.jewelry.user.password,
        request.jewelry.user.email,
        request.jewelry.user.phone,
        request.jewelry.user.address,
        request.jewelry.user.district,
        request.jewelry.user.ward,
        request.jewelry.user.city,
        request.jewelry.user.yob,
        request.jewelry.user.cccd,
        request.jewelry.user.bank,
        request.jewelry.user.bankAccountNumber,
        request.jewelry.user.bankAccountName
      ),
      brand: request.jewelry.brand,
      category: request.jewelry.category,
      material: request.jewelry.material,
      weight: request.jewelry.weight
    };

    const staff = request.staff ? new User(
      request.staff.id,
      request.staff.username,
      request.staff.fullName,
      request.staff.firstName,
      request.staff.lastName,
      request.staff.password,
      request.staff.email,
      request.staff.phone,
      request.staff.address,
      request.staff.district,
      request.staff.ward,
      request.staff.city,
      request.staff.yob,
      request.staff.cccd,
      request.staff.bank,
      request.staff.bankAccountNumber,
      request.staff.bankAccountName
    ) : undefined;

    const sender = request.sender ? new User(
      request.sender.id,
      request.sender.username,
      request.sender.fullName,
      request.sender.firstName,
      request.sender.lastName,
      request.sender.password,
      request.sender.email,
      request.sender.phone,
      request.sender.address,
      request.sender.district,
      request.sender.ward,
      request.sender.city,
      request.sender.yob,
      request.sender.cccd,
      request.sender.bank,
      request.sender.bankAccountNumber,
      request.sender.bankAccountName
    ) : undefined;

    const responder = request.responder ? new User(
      request.responder.id,
      request.responder.username,
      request.responder.fullName,
      request.responder.firstName,
      request.responder.lastName,
      request.responder.password,
      request.responder.email,
      request.responder.phone,
      request.responder.address,
      request.responder.district,
      request.responder.ward,
      request.responder.city,
      request.responder.yob,
      request.responder.cccd,
      request.responder.bank,
      request.responder.bankAccountNumber,
      request.responder.bankAccountName
    ) : undefined;

    requests.push({
      id: request.id,
      isConfirm: request.confirm,
      desiredPrice: request.desiredPrice,
      valuation: request.valuation,
      requestTime: request.requestTime,
      responseTime: request.responseTime,
      state: request.state,
      jewelry: jewelry,
      staff: staff,
      sender: sender,
      responder: responder,
    });

    console.log(requests);
  }

  return {
    requestsData: requests,
    totalElements: totalElements
  };
}
