import { useRouteError } from "react-router-dom";

export const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="mt-20 flex flex-col items-center">
      <p className="mb-3 text-8xl">🫠</p>
      <p className="text-xl">Oops. Something's off. Maybe try again?</p>
    </div>
  );
};
