import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { MyTopArtists, myTopArtistsLoader } from "./pages/MyTopArtists";
import { Genre, genreLoader } from "./pages/Genre";
import { Artist, artistLoader } from "./pages/Artist";
import { Logout } from "./pages/Logout";
import { Root } from "./pages/Root";
import { oauthLoader } from "./api/auth/oauthLoader";
import { sessionLoader } from "./api/auth/sessionLoader";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} loader={sessionLoader}>
      <Route path="/" element={<Root />} />
      <Route path="/oauth" loader={oauthLoader} />
      <Route path="/logout" element={<Logout />} />
      <Route
        path="/my-top-artists/:timeRange"
        loader={myTopArtistsLoader}
        element={<MyTopArtists />}
      />
      <Route path="/genre/:genre" loader={genreLoader} element={<Genre />} />
      <Route
        path="/artist/:artistId"
        loader={artistLoader}
        element={<Artist />}
      />
    </Route>
  )
);
