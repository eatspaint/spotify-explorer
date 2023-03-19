import { Outlet, useNavigate, useParams } from "react-router-dom";
import { terms } from "../../api/getUserTopArtists";
import { Button } from "../../components/Button";

export const LoggedIn = () => {
  const navigate = useNavigate();
  const { timeRange } = useParams();

  const handleGetTopArtists = (range: terms) => () => {
    navigate(`/my-top-artists/${range}`);
  };

  const handleLogout = () => {
    navigate("/logout");
  };

  return (
    <div>
      <div className="my-3 mx-6 flex flex-wrap justify-between">
        <div className="flex gap-2">
          <Button
            active={timeRange === "short_term"}
            onClick={handleGetTopArtists("short_term")}
          >
            SHORT TERM
          </Button>
          <Button
            active={timeRange === "medium_term"}
            onClick={handleGetTopArtists("medium_term")}
          >
            MID TERM
          </Button>
          <Button
            active={timeRange === "long_term"}
            onClick={handleGetTopArtists("long_term")}
          >
            LONG TERM
          </Button>
        </div>
        <Button onClick={handleLogout}>LOGOUT</Button>
      </div>
      <Outlet />
    </div>
  );
};
