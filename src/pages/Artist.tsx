import { LoaderFunction, useLoaderData } from "react-router-dom";
import { checkFollowingArtists, getArtist, getRelatedArtists } from "../api";
import { Card, Favorite, GenreTags, Image } from "../components/Artist";

interface ArtistLoaderData {
  artist: SpotifyApi.SingleArtistResponse;
  followingArtist: boolean;
  relatedArtists: SpotifyApi.ArtistsRelatedArtistsResponse;
  favorites: SpotifyApi.UserFollowsUsersOrArtistsResponse;
}

export const artistLoader: LoaderFunction = async ({
  params,
}): Promise<ArtistLoaderData> => {
  const [artist, followingArtist, relatedArtists] = await Promise.all([
    getArtist(params.artistId ?? ""),
    checkFollowingArtists([params.artistId ?? ""]),
    getRelatedArtists(params.artistId ?? ""),
  ]);
  const favorites = await checkFollowingArtists(
    relatedArtists.artists.map(({ id }) => id)
  );
  return {
    artist,
    followingArtist: followingArtist[0],
    relatedArtists,
    favorites,
  };
};

export const Artist = () => {
  const { artist, followingArtist, relatedArtists, favorites } =
    useLoaderData() as ArtistLoaderData;

  return (
    <div>
      <div className="m-6 flex gap-6">
        <Image url={artist.images[0]?.url} size="large" />
        <div>
          <h1 className="pb-6 text-6xl">
            {artist.name}
            <Favorite favorite={followingArtist} id={artist.id} />
          </h1>
          <GenreTags genres={artist.genres} />
        </div>
      </div>
      <ul className="mx-6 my-3 grid grid-cols-4 gap-3">
        {relatedArtists.artists.map((related, i) => (
          <li key={related.id}>
            <Card artist={related} favorite={favorites[i]} />
          </li>
        ))}
      </ul>
    </div>
  );
};
