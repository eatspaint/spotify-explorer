import { get } from "./spotify";

export const getGenre = async (genre: string) => {
  return await get<unknown, SpotifyApi.ArtistSearchResponse>('/search', {
    type: "artist",
    q: `genre:"${genre}"`,
    limit: 50,
  });
}
