import { LoaderFunction, useLoaderData } from "react-router-dom";
import { checkFollowingArtists, getUserTopArtists } from "../api";
import { terms } from "../api/getUserTopArtists";
import { Card, CardGrid } from "../components/Artist";

interface MyTopArtistsLoaderData {
  artists: SpotifyApi.UsersTopArtistsResponse["items"];
  favorites: SpotifyApi.UserFollowsUsersOrArtistsResponse;
}

export const myTopArtistsLoader: LoaderFunction = async ({
  params,
}): Promise<MyTopArtistsLoaderData> => {
  const timeRange = params.timeRange;
  const result = await getUserTopArtists(timeRange as terms | undefined);
  const favorites = await checkFollowingArtists(
    result.items.map(({ id }) => id)
  );
  return { artists: result.items, favorites };
};

export const MyTopArtists = () => {
  const { artists, favorites } = useLoaderData() as MyTopArtistsLoaderData;

  return (
    <CardGrid>
      {artists.map((artist, i) => (
        <li key={artist.id}>
          <Card artist={artist} favorite={favorites[i]} />
        </li>
      ))}
    </CardGrid>
  );
};
