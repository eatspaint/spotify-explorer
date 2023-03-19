import { storageKeys, CLIENT_ID, accessTokenUrl } from "..";
import { readLocalStorage, writeLocalStorage } from "../../lib/localStorage";
import axios, { AxiosResponse } from "axios";
import { authRedirectUrl } from "./login";

export const handleAccessTokenResponse = ({
  access_token,
  refresh_token,
  expires_in,
}: {
  access_token: string;
  refresh_token: string;
  expires_in: number;
}) => {
  writeLocalStorage(storageKeys.ACCESS, access_token);
  writeLocalStorage(storageKeys.REFRESH, refresh_token);
  const t = new Date();
  writeLocalStorage(
    storageKeys.EXPIRY,
    t.setSeconds(t.getSeconds() + expires_in)
  );
};

// interface getAccessTokenParams {
//   grant_type: "authorization_code";
//   code: string;
//   redirect_uri: string;
//   client_id: string;
//   code_verifier: string;
// }

export const getAccessToken = async (code: string) => {
  const verifier = readLocalStorage(storageKeys.VERIFIER_KEY, "");

  const { data } = await axios
    .post<
      unknown,
      AxiosResponse<
        { access_token: string; refresh_token: string; expires_in: number },
        unknown
      >
    >(
      accessTokenUrl,
      {
        grant_type: "authorization_code",
        code,
        redirect_uri: authRedirectUrl,
        client_id: CLIENT_ID,
        code_verifier: verifier,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )

    handleAccessTokenResponse(data);
};
