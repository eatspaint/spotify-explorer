import { login } from "../../api";
import { Button } from "../../components/Button";

export const LoggedOut = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Button size="big" onClick={login}>
        SIGN IN WITH SPOTIFY
      </Button>
    </div>
  );
};
