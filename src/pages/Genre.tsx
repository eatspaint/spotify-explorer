import { LoaderFunction, useLoaderData } from "react-router-dom";
import { checkFollowingArtists, getGenre } from "../api";
import { Card } from "../components/Artist";

interface GenreLoaderData {
  artists: SpotifyApi.ArtistSearchResponse["artists"]["items"];
  favorites: SpotifyApi.UserFollowsUsersOrArtistsResponse;
}

export const genreLoader: LoaderFunction = async ({
  params,
}): Promise<GenreLoaderData> => {
  const result = await getGenre(params.genre ?? "");
  const favorites = await checkFollowingArtists(
    result.artists.items.map(({ id }) => id)
  );
  return { artists: result.artists.items, favorites };
};

export const Genre = () => {
  const { artists, favorites } = useLoaderData() as GenreLoaderData;

  if (artists) {
    return (
      <ul className="mx-6 my-3 grid grid-cols-4 gap-3">
        {artists.map((artist, i) => (
          <li key={artist.id}>
            <Card artist={artist} favorite={favorites[i]} />
          </li>
        ))}
      </ul>
    );
  }

  return null;
};
