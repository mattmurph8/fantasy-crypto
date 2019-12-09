import axios from 'axios';
import * as qs from 'query-string';
// import { ApiResponse, ApiCredential } from './types';
import { API_URL } from '../config';


const createApiResponseSuccess = (data: any) => {
  console.log(data);
  return { success: true, data };
}

const handleApiResponseError = (data: any) => {
  console.log({ success: false, data });
  return { success: false, data };
}

//txID, earliestLedgerVersion

export function sendPayment(
  // token: AuthToken,
  sender: string,
  receiver: string,
  amount: string,
): any {

  const data = {
    sender,
    receiver,
    amount,
  };

  const url = `/api/payment`;
  return axios({
    method: 'POST',
    url: `${API_URL}${url}`,
    data,
    // headers: { Authorization: `Bearer ${token.accessToken}` },
  })
    .then(response => createApiResponseSuccess(response.data))
    .catch(handleApiResponseError);
}

export function checkPayment(
  // token: AuthToken,
  txID: string,
  earliestLedgerVersion: string,
): any {
  const queryString = qs.stringify({
    txID,
    earliestLedgerVersion,
  });
  const url = `/api/payment?${queryString}`;
  return axios({
    method: 'GET',
    url: `${API_URL}${url}`,
    // headers: { Authorization: `Bearer ${token.accessToken}` },
  })
    .then(response => createApiResponseSuccess(response.data))
    .catch(handleApiResponseError);
}

export function checkBalance(
  // token: AuthToken,
  account: string,
): any {
  const queryString = qs.stringify({
    account,
  });
  const url = `/api/account?${queryString}`;
  return axios({
    method: 'GET',
    url: `${API_URL}${url}`,
    // headers: { Authorization: `Bearer ${token.accessToken}` },
  })
    .then(response => createApiResponseSuccess(response.data))
    .catch(handleApiResponseError);
}
