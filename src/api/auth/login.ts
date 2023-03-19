import { CLIENT_ID, spotifyAuthBase, storageKeys } from "..";
import { buildUrl } from "../../lib/buildUrl";
import { writeLocalStorage } from "../../lib/localStorage";
import { usePKCE } from "../../lib/usePKCE";

export const authRedirectUrl = `${import.meta.env.VITE_URL_DOMAIN as string}/oauth`;

// https://developer.spotify.com/documentation/general/guides/authorization/scopes/
const authScopes = [
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "playlist-read-private",
  "playlist-read-collaborative",
  "playlist-modify-private",
  "playlist-modify-public",
  "user-follow-modify",
  "user-follow-read",
  "user-top-read",
  "user-read-recently-played",
  "user-library-modify",
  "user-library-read",
];

interface getAuthParams {
  client_id: string;
  response_type: "code";
  redirect_uri: string;
  state?: string;
  scope?: string;
  show_dialog?: boolean;
  code_challenge_method: "S256";
  code_challenge: string;
}

const getAuthUrl = ({
  client_id,
  response_type,
  redirect_uri,
  state,
  scope,
  show_dialog = false,
  code_challenge_method,
  code_challenge,
}: getAuthParams) => {
  return buildUrl(`${spotifyAuthBase}/authorize`, {
    client_id,
    response_type,
    redirect_uri,
    state,
    scope,
    show_dialog: show_dialog ? "true" : "false",
    code_challenge_method,
    code_challenge,
  });
};

export const login = () => {
  // generate PKCE values
  usePKCE().then(
    (pkce) => {
      // store verifier for later
      writeLocalStorage(storageKeys.VERIFIER_KEY, pkce.verifier);

      // build authorize url
      const authUrl = getAuthUrl({
        client_id: CLIENT_ID,
        response_type: "code",
        redirect_uri: authRedirectUrl,
        scope: authScopes.join(" "),
        code_challenge_method: "S256",
        code_challenge: pkce.challenge,
      });

      // navigate to auth url
      window.location.href = authUrl;
    },
    console.error
  );
};
