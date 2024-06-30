import { RequestApproval } from './../models/RequestApproval';
import { User } from "../models/User";
import { MyRequest } from "./MyRequest";
import { fetchWithToken } from './AuthenticationAPI';
import BASE_URL from "../config/config";
import { Jewelry } from '../models/Jewelry';


interface ResultPageableInteface {
  requestsData: RequestApproval[];
  totalElements: number
}

function mapJewelry(jewelryData: any): Jewelry {
  return {
    id: jewelryData.id,
    name: jewelryData.name,
    description: jewelryData.description,
    user: mapUser(jewelryData.user),
    brand: jewelryData.brand,
    category: jewelryData.category,
    material: jewelryData.material,
    weight: jewelryData.weight
  };
}

function mapUser(userData: any): User {
  return {
    id: userData.id,
    username: userData.username,
    fullName: userData.fullName,
    firstName: userData.firstName,
    lastName: userData.lastName,
    password: userData.password,
    state: userData.state,
    cccdFirst: userData.cccdFirst,
    cccdLast: userData.cccdLast,
    cccdFrom: userData.cccdFrom,
    email: userData.email,
    phone: userData.phone,
    address: userData.address,
    district: userData.district,
    ward: userData.ward,
    city: userData.city,
    yob: userData.yob,
    cccd: userData.cccd,
    bank: userData.bank,
    bankAccountNumber: userData.bankAccountNumber,
    bankAccountName: userData.bankAccountName,
  };
}

function mapRequestApproval(response: any): RequestApproval {
  const mappedJewelry: Jewelry = mapJewelry(response.jewelry);
  const mappedStaff: User | undefined = response.staff ? mapUser(response.staff) : undefined;
  const mappedSender: User | undefined = response.sender ? mapUser(response.sender) : undefined;
  const mappedResponder: User | undefined = response.responder ? mapUser(response.responder) : undefined;

  return {
    id: response.id,
    isConfirm: response.confirm,
    desiredPrice: response.desiredPrice,
    valuation: response.valuation,
    requestTime: response.requestTime,
    responseTime: response.responseTime,
    state: response.state,
    jewelry: mappedJewelry,
    staff: mappedStaff,
    sender: mappedSender,
    responder: mappedResponder,
    note: response.note
  };
}

export async function getRequestById(requestId: number): Promise<RequestApproval | null> {
  // endpoint
  const URL = `${BASE_URL}/request-approval/id/${requestId}`;

  try {
    // request
    let response = await MyRequest(URL);

    if (!response) {
      throw new Error("Yêu cầu không tồn tại");
    }

    const mappedResponse: RequestApproval = mapRequestApproval(response);

    return mappedResponse;
  } catch (error) {
    console.error("Error", error);
    return null
  }
}

export default async function changeStateRequest(requestId: number, responderId: number | undefined, state: string): Promise<boolean> {
  // endpoint
  const URL = `${BASE_URL}/request-approval/set-state/${requestId}?responderId=${responderId}&state=${state}`;
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
  const URL = `${BASE_URL}/request-approval/confirm/${requestId}?responderId=${responderId}`;

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

interface cancelRequestProps {
  requestId: number,
  note: string
}

export async function cancelRequest(request: cancelRequestProps): Promise<boolean> {
  const accessToken = localStorage.getItem('access_token');
  // endpoint
  const URL = `${BASE_URL}/request-approval/cancel-request`;

  try {
    const response = await fetchWithToken(URL, 'PUT', accessToken, request);

    if (!response.ok) {
      throw new Error(`Không thể truy cập ${URL}`);
    }
    return true;
  } catch (error) {
    console.error("Error: " + error);
    return false;
  }
}

export async function getRequestByRoleOfSender(role: string, page: number): Promise<ResultPageableInteface> {
  // endpoint
  const URL: string = `${BASE_URL}/request-approval/sender/${role}?page=${page - 1}`;
  try {
    const response = await MyRequest(URL);

    const requests: RequestApproval[] = response.content.map((request: any) => mapRequestApproval(request));

    const totalElements: number = response.totalElements;

    return {
      requestsData: requests,
      totalElements: totalElements
    };
  } catch (error) {
    console.error("Error fetching requests by sender role:", error);
    return {
      requestsData: [],
      totalElements: 0
    };
  }
}

export async function getRequestNeedConfirmByMember(memberId: number, page: number): Promise<ResultPageableInteface> {
  // endpoint
  const URL: string = `${BASE_URL}/request-approval/confirm-by-member/${memberId}?page=${page - 1}`;

  try {
    const response = await MyRequest(URL);

    const requests: RequestApproval[] = response.content.map((request: any) => mapRequestApproval(request));
    const totalElements: number = response.totalElements;

    return {
      requestsData: requests,
      totalElements: totalElements
    };
  } catch (error) {
    console.error("Error fetching requests needing confirmation by member:", error);
    return {
      requestsData: [],
      totalElements: 0
    };
  }
}

interface SendRequestFromUser {
  senderId: number | undefined;
  jewelryId: number;
  requestTime: string
}

export const sendRequestApprovalFromUser = async (request: SendRequestFromUser): Promise<boolean> => {
  const accessToken = localStorage.getItem('access_token');
  // end-point
  const URL = `${BASE_URL}/request-approval/send-from-user`;
  // call api
  try {
    const response = await fetchWithToken(URL, 'POST', accessToken, request);


    if (!response.ok) {
      throw new Error(`Không thể truy cập ${URL}`);
    }
    return true;
  } catch (error) {
    console.error("Error: " + error);
    return false;
  }
};

interface SendRequestFromStaff {
  senderId: number | undefined;
  requestApprovalId: number;
  valuation: number | undefined;
  requestTime: string;
}

export const sendRequestApprovalFromStaff = async (request: SendRequestFromStaff): Promise<boolean> => {
  const accessToken = localStorage.getItem('access_token');
  // end-point
  const URL = `${BASE_URL}/request-approval/send-from-staff`;
  // call api
  try {
    const response = await fetchWithToken(URL, 'POST', accessToken, request);


    if (!response.ok) {
      throw new Error(`Không thể truy cập ${URL}`);
    }
    return true;
  } catch (error) {
    console.error("Error: " + error);
    return false;
  }
};
export async function getRequestByUserId(userId: number, jewelryName: string, page: number): Promise<ResultPageableInteface> {
  // endpoint
  const URL: string = `${BASE_URL}/request-approval/user/${userId}?jewelryName=${jewelryName}&page=${page - 1}`;
  try {
    // request
    const response = await MyRequest(URL);
    const requests: RequestApproval[] = response.content.map((request: any) => mapRequestApproval(request));
    const totalElements = response.totalElements;

    return {
      requestsData: requests,
      totalElements: totalElements
    };
  } catch (error) {
    console.error("Error fetching requests needing confirmation by member:", error);
    return {
      requestsData: [],
      totalElements: 0
    };
  }
}
