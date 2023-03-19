import { get } from "./spotify";

export const getArtist = async (id: string) => {
  return await get<never, SpotifyApi.SingleArtistResponse>(
    `/artists/${id}`
  );
};
