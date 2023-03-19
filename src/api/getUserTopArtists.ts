import { get } from "./spotify";

export type terms = 'short_term' | 'medium_term' | 'long_term';

export const getUserTopArtists = async (time_range: terms = 'medium_term') => {
  return await get<unknown, SpotifyApi.UsersTopArtistsResponse>('/me/top/artists', {
    limit: 50,
    time_range,
  })
}
