import { Link } from "react-router-dom";

export const GenreTags = ({ genres }: { genres: string[] }) => {
  return (
    <ul className="flex flex-row flex-wrap gap-1">
      {genres.map((genre) => (
        <li key={genre} className="rounded-sm bg-zinc-700 px-1.5 text-sm">
          <Link to={`/genre/${genre}`}>#{genre}</Link>
        </li>
      ))}
    </ul>
  );
};
