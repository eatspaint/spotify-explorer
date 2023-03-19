import { storageKeys, CLIENT_ID, accessTokenUrl } from "..";
import { handleAccessTokenResponse } from "./getAccessToken";
import { readLocalStorage } from "../../lib/localStorage";
import axios, { AxiosResponse } from "axios";

export const refreshAccessToken = () => {
  const refresh_token = readLocalStorage(storageKeys.REFRESH, "");

  return axios
    .post<
      unknown,
      AxiosResponse<
        {
          access_token: string;
          refresh_token: string;
          expires_in: number;
          token_type: string;
          scope: string;
        },
        unknown
      >
    >(
      accessTokenUrl,
      {
        grant_type: "refresh_token",
        refresh_token,
        client_id: CLIENT_ID,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then(({ data }) => {
      handleAccessTokenResponse(data);
      return data.access_token
    })
    .catch(console.error);
};

export const withFreshAccessToken = async () => {
  const expiry = readLocalStorage(storageKeys.EXPIRY, 0);
  if (new Date().getTime() > expiry) {
    await refreshAccessToken();
  }
};
