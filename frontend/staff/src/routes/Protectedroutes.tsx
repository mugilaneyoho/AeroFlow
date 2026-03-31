import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
 
  const isAuthenticated = useSelector((state:any) =>state.login.isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;

};

export default ProtectedRoute;