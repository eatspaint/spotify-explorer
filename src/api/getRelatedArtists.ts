import { get } from "./spotify";

export const getRelatedArtists = async (id: string) => {
  return await get<never, SpotifyApi.ArtistsRelatedArtistsResponse>(
    `/artists/${id}/related-artists`
  );
};
