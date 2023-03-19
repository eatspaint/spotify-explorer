import {
  LoaderFunction,
  redirect,
} from "react-router-dom";
import { storageKeys } from "..";
import { readLocalStorage } from "../../lib/localStorage";

/**
 * Loader that switches between LoggedIn & LoggedOut roots
 */
export const sessionLoader: LoaderFunction = ({ request: { url } }) => {
  const accessToken = readLocalStorage<string | undefined>(
    storageKeys.ACCESS,
    undefined
  );

  if (accessToken) {
    return { session: true };
  } else {
    const path = new URL(url).pathname;
    // If we're mid oauth flow, assume a session is starting
    if (path === "/oauth") {
      return { session: true };
    }
    // If we're on root, no session
    if (path === "/") {
      return { session: false };
    }
    // For any other route, bounce back to root
    return redirect("/");
  }
};
