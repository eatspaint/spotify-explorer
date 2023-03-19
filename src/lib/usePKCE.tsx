// https://github.com/tobika/spotify-auth-PKCE-example/blob/main/public/main.js

const generateCodeVerifier = (length = 64) => {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

export const generateCodeChallengeFromVerifier = async (verifier: string) => {
  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(verifier)
  );

  return btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
};

export const usePKCE = async () => {
  const verifier = generateCodeVerifier();
  const challenge = await generateCodeChallengeFromVerifier(verifier);

  return { verifier, challenge };
};
