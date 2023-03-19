import { del } from "./spotify";

export const unfollowArtist = async (id: string) => {
  return await del<unknown, SpotifyApi.UnfollowArtistsOrUsersResponse>('/me/following', {
    ids: id,
    type: "artist",
  });
}
