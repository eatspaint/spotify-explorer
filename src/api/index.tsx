export { getAccessToken } from "./auth/getAccessToken";
export { refreshAccessToken } from "./auth/refreshAccessToken";
export { login } from "./auth/login";
export { logout } from "./auth/logout";
export { getUserTopArtists } from "./getUserTopArtists";
export { checkFollowingArtists } from "./checkFollowingArtists";
export { followArtist } from "./followArtist";
export { getArtist } from "./getArtist";
export { getGenre } from "./getGenre";
export { getRelatedArtists } from "./getRelatedArtists";
export { unfollowArtist } from "./unfollowArtist";

export const spotifyAuthBase = "https://accounts.spotify.com";
export const spotifyApiBase = "https://api.spotify.com/v1";
export const accessTokenUrl = `${spotifyAuthBase}/api/token`;

export const CLIENT_ID = import.meta.env.VITE_CLIENT_ID as string;
export const storageKeys = {
  VERIFIER_KEY: "explorer_pkce_verifier",
  ACCESS: "expolorer_access_token",
  REFRESH: "explorer_refresh_token",
  EXPIRY: "explorer_expires_at",
};
