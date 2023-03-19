import { useLoaderData } from "react-router-dom";
import { LoggedIn } from "./LoggedIn";
import { LoggedOut } from "./LoggedOut";

export const Layout = () => {
  const { session } = useLoaderData() as { session?: boolean };

  return <div>{session ? <LoggedIn /> : <LoggedOut />}</div>;
};
