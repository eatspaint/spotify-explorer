import classNames from "classnames";
import { useEffect, useState } from "react";
import { followArtist } from "../../api/followArtist";
import { unfollowArtist } from "../../api/unfollowArtist";

export const Favorite = ({
  favorite: initialFavorite,
  id,
}: {
  favorite?: boolean;
  id: string;
}) => {
  const [favorite, setFavorite] = useState<boolean>(Boolean(initialFavorite));

  // Keep state in sync when the initial value changes
  useEffect(() => {
    setFavorite(Boolean(initialFavorite));
  }, [initialFavorite]);

  // If no known initial value, get out
  if (initialFavorite === undefined) {
    return null;
  }

  const handleFavoriteClick = () => {
    if (favorite === false) {
      followArtist(id)
        .then(() => setFavorite(true))
        .catch(console.error);
    } else {
      unfollowArtist(id)
        .then(() => setFavorite(false))
        .catch(console.error);
    }
  };

  return (
    <span
      className={classNames("cursor-pointer", { "text-red-500": favorite })}
      onClick={handleFavoriteClick}
    >
      {favorite ? " ♥" : " ♡"}
    </span>
  );
};
