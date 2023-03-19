import { get } from "./spotify";

export const checkFollowingArtists = async (ids: string[]) => {
  return await get<unknown, SpotifyApi.UserFollowsUsersOrArtistsResponse>(
    '/me/following/contains',
    {
      type: "artist",
      ids: ids.join(","),
    },
  );
}
