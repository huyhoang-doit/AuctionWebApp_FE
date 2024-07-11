import { RequestApproval } from './../models/RequestApproval';
import { MyRequest } from "./MyRequest";
import { fetchWithToken } from './AuthenticationAPI';
import BASE_URL from "../config/config";
import { mapRequestApproval } from '../mappings/mapRequestApproval';


interface ResultPageableInteface {
  requestsData: RequestApproval[];
  totalElements: number
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

export async function getRequestByRoleOfSender(role: string, jewelryName: string, category: string, page: number): Promise<ResultPageableInteface> {
  // endpoint
  const URL: string = `${BASE_URL}/request-approval/sender/${role}?page=${page - 1}&category=${category}&jewelryName=${jewelryName}`;
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

export async function getRequestNeedConfirmByMember(memberId: number, jewelryName: string, page: number): Promise<ResultPageableInteface> {
  // endpoint
  const URL: string = `${BASE_URL}/request-approval/confirm-by-member/${memberId}?page=${page - 1}&jewelryName=${jewelryName}`;

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
