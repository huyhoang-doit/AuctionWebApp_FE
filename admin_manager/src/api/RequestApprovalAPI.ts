
import { Jewelry } from './../models/Jewelry';
import { User } from "../models/User";
import { MyRequest } from "./MyRequest";
import { fetchWithToken } from './AuthenticationAPI';
import { RequestApproval } from '../models/RequestApproval';

interface ResultPageableInteface {
  requestsData: RequestApproval[];
  totalElements: number
}

export async function getRequestById(requestId: number): Promise<RequestApproval | null> {
  // endpoint
  const URL = `http://localhost:8080/api/v1/request-approval/id/${requestId}`;

  try {
    // request
    let response = await MyRequest(URL);

    if (response) {
      const jewelry = {
        id: response.jewelry.id,
        name: response.jewelry.name,
        description: response.jewelry.description,
        user: new User(
          response.jewelry.user.id,
          response.jewelry.user.username,
          response.jewelry.user.fullName,
          response.jewelry.user.firstName,
          response.jewelry.user.lastName,
          response.jewelry.user.password,
          response.jewelry.user.email,
          response.jewelry.user.phone,
          response.jewelry.user.address,
          response.jewelry.user.district,
          response.jewelry.user.ward,
          response.jewelry.user.city,
          response.jewelry.user.yob,
          response.jewelry.user.cccd,
          response.jewelry.user.bank,
          response.jewelry.user.bankAccountNumber,
          response.jewelry.user.bankAccountName
        ),
        brand: response.jewelry.brand,
        category: response.jewelry.category,
        material: response.jewelry.material,
        weight: response.jewelry.weight
      };

      const staff = response.staff ? new User(
        response.staff.id,
        response.staff.username,
        response.staff.fullName,
        response.staff.firstName,
        response.staff.lastName,
        response.staff.password,
        response.staff.email,
        response.staff.phone,
        response.staff.address,
        response.staff.district,
        response.staff.ward,
        response.staff.city,
        response.staff.yob,
        response.staff.cccd,
        response.staff.bank,
        response.staff.bankAccountNumber,
        response.staff.bankAccountName
      ) : undefined;

      const sender = response.sender ? new User(
        response.sender.id,
        response.sender.username,
        response.sender.fullName,
        response.sender.firstName,
        response.sender.lastName,
        response.sender.password,
        response.sender.email,
        response.sender.phone,
        response.sender.address,
        response.sender.district,
        response.sender.ward,
        response.sender.city,
        response.sender.yob,
        response.sender.cccd,
        response.sender.bank,
        response.sender.bankAccountNumber,
        response.sender.bankAccountName
      ) : undefined;

      const responder = response.responder ? new User(
        response.responder.id,
        response.responder.username,
        response.responder.fullName,
        response.responder.firstName,
        response.responder.lastName,
        response.responder.password,
        response.responder.email,
        response.responder.phone,
        response.responder.address,
        response.responder.district,
        response.responder.ward,
        response.responder.city,
        response.responder.yob,
        response.responder.cccd,
        response.responder.bank,
        response.responder.bankAccountNumber,
        response.responder.bankAccountName
      ) : undefined;

      response = {
        id: response.id,
        isConfirm: response.confirm,
        desiredPrice: response.desiredPrice,
        valuation: response.valuation,
        requestTime: response.requestTime,
        responseTime: response.responseTime,
        state: response.state,
        jewelry: jewelry,
        staff: staff,
        sender: sender,
        responder: responder,
      };
      return response;

    } else {
      throw new Error("Yêu cầu không tồn tại");
    }
  } catch (error) {
    console.error("Error", error);
    return null
  }
}

export default async function changeStateRequest(requestId: number, responderId: number | undefined, state: string): Promise<boolean> {
  // endpoint
  const URL = `http://localhost:8080/api/v1/request-approval/set-state/${requestId}?responderId=${responderId}&state=${state}`;
  // request
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
export async function confirmRequest(requestId: number, responderId: number | undefined): Promise<boolean> {
  // endpoint
  const URL = `http://localhost:8080/api/v1/request-approval/confirm/${requestId}?responderId=${responderId}`;

  // request
  console.log(URL)
  const response = await fetch(URL, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  console.log(response);

  if (!response.ok) {
    const errorDetails = await response.text();  // Get error details as text
    console.error('Failed to update the book:', errorDetails);
    return false
  }

  return true;
}

export async function getRequestByRoleOfSender(role: string, page: number): Promise<ResultPageableInteface> {
  // endpoint
  const URL: string = `http://localhost:8080/api/v1/request-approval/sender/${role}?page=${page - 1}`;

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

  }

  return {
    requestsData: requests,
    totalElements: totalElements
  };
}


export async function getRequestPassed(page: number): Promise<ResultPageableInteface> {
  // endpoint
  const URL: string = `http://localhost:8080/api/v1/request-approval/request-passed?page=${page - 1}`;

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

  }

  return {
    requestsData: requests,
    totalElements: totalElements
  };
}

interface SendRequestFromUser {
  senderId: number | undefined;
  jewelryId: number;
  requestTime: string
}

export const sendRequestApprovalFromUser = async (request: SendRequestFromUser): Promise<boolean> => {
  const accessToken = localStorage.getItem('access_token');
  // end-point
  const URL = `http://localhost:8080/api/v1/request-approval/send-from-user`;
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

interface SendRequestFromManager {
  senderId: number | undefined;
  requestApprovalId: number;
  requestTime: string;
}

export const sendRequestApprovalFromManager = async (request: SendRequestFromManager): Promise<boolean> => {
  const accessToken = localStorage.getItem('access_token');
  // end-point
  const URL = `http://localhost:8080/api/v1/request-approval/send-from-manager`;
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
  const URL: string = `http://localhost:8080/api/v1/request-approval/user/${userId}?page=${page - 1}`;

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
