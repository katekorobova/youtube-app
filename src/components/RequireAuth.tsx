import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { LOGIN_PAGE } from "../lib/constants";

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth ? (
    <Outlet />
  ) : (
    <Navigate to={LOGIN_PAGE} state={{ from: location }} replace />
  );
};

export default RequireAuth;
