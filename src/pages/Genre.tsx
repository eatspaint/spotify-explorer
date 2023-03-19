import { LoaderFunction, useLoaderData, useParams } from "react-router-dom";
import { checkFollowingArtists, getGenre } from "../api";
import { Card, CardGrid } from "../components/Artist";

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
  const { genre } = useParams();

  if (artists) {
    return (
      <div>
        <h1 className="mx-6 text-xl text-red-500">{`#${String(genre)}`}</h1>
        <CardGrid>
          {artists.map((artist, i) => (
            <li key={artist.id}>
              <Card artist={artist} favorite={favorites[i]} />
            </li>
          ))}
        </CardGrid>
      </div>
    );
  }

  return null;
};
