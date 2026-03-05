import { Navigate, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../features/login/reducer/selector";

const PublicRoute = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  return isAuthenticated ? <Navigate to="/" replace /> : <Outlet />;
};

export default PublicRoute;
