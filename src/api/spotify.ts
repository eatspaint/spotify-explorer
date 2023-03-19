import axios, { AxiosResponse } from "axios";
import { spotifyApiBase, storageKeys } from ".";
import { readLocalStorage } from "../lib/localStorage";
import { withFreshAccessToken } from "./auth/refreshAccessToken";

const get = async <Params, Response>(
  uri: string,
  params?: Params
) => {
  await withFreshAccessToken();

  const url = `${spotifyApiBase}${uri}`;
  const accessToken = readLocalStorage(storageKeys.ACCESS, "");

  const response = await axios.get<unknown, AxiosResponse<Response>>(url, {
    headers: {
      "Authorization": `Bearer ${accessToken}`,
    },
    ...(params ? { params } : {}),
  })

  return response.data;
}

const put = async <Data, Params, Response>(
  uri: string, data?: Data, params?: Params
) => {
  await withFreshAccessToken();

  const url = `${spotifyApiBase}${uri}`;
  const accessToken = readLocalStorage(storageKeys.ACCESS, "");

  const response = await axios.put<unknown, AxiosResponse<Response>>(
    url,
    data,
    {
      params,
      headers: {
        "Authorization": `Bearer ${accessToken}`,
      },
    },
  )

  return response.data;
}

const del = async <Params, Response>(uri: string, params?: Params) => {
  await withFreshAccessToken();

  const url = `${spotifyApiBase}${uri}`;
  const accessToken = readLocalStorage(storageKeys.ACCESS, "");

  const response = await axios.delete<unknown, AxiosResponse<Response>>(
    url,
    {
      params,
      headers: {
        "Authorization": `Bearer ${accessToken}`,
      },
    },
  )

  return response.data;
}

export {
  get,
  put,
  del,
}
