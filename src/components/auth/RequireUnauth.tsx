import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { PROFILE_PAGE } from "../../lib/constants";

const RequireUnauth = () => {
  const { auth } = useAuth();
  const location = useLocation();
  const to = location.state?.from?.pathname || PROFILE_PAGE;

  return auth?.username ? (
    <Navigate to={to} state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};

export default RequireUnauth;
