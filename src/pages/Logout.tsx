import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../api";

/**
 * Component for use in /logout route. Destroys session and redirects to root.
 */
export const Logout = () => {
  const navigate = useNavigate();
  logout();
  useEffect(() => {
    navigate("/");
  });
  return null;
};
