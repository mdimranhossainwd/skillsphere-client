import { Navigate, useLocation } from "react-router-dom";

import useAuth from "../hooks/useAuth";
const PrivateRouter = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return <span>loading....</span>;
  }
  if (user) return children;

  return <Navigate to="/signin" state={location?.pathname} replace={true} />;
};

export default PrivateRouter;
