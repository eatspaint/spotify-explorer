import { Image } from "./Image";
import { Link } from "react-router-dom";
import { GenreTags } from "./GenreTags";
import { Favorite } from "./Favorite";

interface CardParams {
  artist: SpotifyApi.ArtistObjectFull;
  favorite?: boolean;
}

export const Card = ({
  artist: { id, name, genres, images, popularity },
  favorite,
}: CardParams) => {
  return (
    <div className="h-full rounded border border-zinc-500 bg-zinc-800 p-3">
      <div className="mb-3 flex flex-row gap-2 align-middle">
        <Image url={images[0]?.url} size="small" />
        <div className="flex flex-col justify-center">
          <p className="pb-1 text-xl font-bold">
            <Link to={`/artist/${id}`}>{name}</Link>
            <Favorite favorite={favorite} id={id} />
          </p>
          <p>{popularity}% popularity</p>
        </div>
      </div>
      <GenreTags genres={genres} />
    </div>
  );
};
