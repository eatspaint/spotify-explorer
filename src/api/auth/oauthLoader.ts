import {
  LoaderFunction,
  redirect,
} from "react-router-dom";
import { getAccessToken } from "..";

/**
 * Special loader that handles oauth callback
 */
export const oauthLoader: LoaderFunction = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const code = searchParams.get("code");
  if (code) {
    await getAccessToken(code);
  } else {
    // TODO: handle this case
    console.error("Oauth code not found");
  }
  return redirect("/");
};
