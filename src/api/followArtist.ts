import { put } from "./spotify";

export const followArtist = async (id: string) => {
  return await put<unknown, unknown, SpotifyApi.FollowArtistsOrUsersResponse>(
    '/me/following',
    { ids: [id] },
    { type: "artist" }
  );
}
