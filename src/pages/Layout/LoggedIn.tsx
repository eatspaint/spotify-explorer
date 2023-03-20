import {
  Outlet,
  useNavigate,
  useNavigationType,
  useParams,
} from "react-router-dom";
import { terms } from "../../api/getUserTopArtists";
import { Button } from "../../components/Button";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const LoggedIn = () => {
  const navigate = useNavigate();
  const navigationType = useNavigationType();
  const { timeRange } = useParams();
  const location = useLocation();

  // react router doesn't do this natively 🙃
  useEffect(() => {
    // attempting to preserve scroll location on back navigation
    // really wish RR had more intuitive controls here
    if (navigationType === "POP") {
      return;
    }
    window.scrollTo(0, 0);
  }, [location]);

  const handleGetTopArtists = (range: terms) => () => {
    navigate(`/my-top-artists/${range}`);
  };

  const handleLogout = () => {
    navigate("/logout");
  };

  return (
    <div>
      <div className="my-3 mx-6 flex flex-wrap justify-between gap-2">
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
