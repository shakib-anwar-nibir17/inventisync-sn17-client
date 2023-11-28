import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useManager from "../Hooks/useManager";
import PropTypes from "prop-types";

const ManagerRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isManager, isManagerLoading] = useManager();
  const location = useLocation();

  if (loading || isManagerLoading) {
    return (
      <div className="container mx-auto min-h-screen flex justify-center">
        <div>
          <progress className="progress w-56 mt-96"></progress>
        </div>
      </div>
    );
  }

  if (user && isManager) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};
ManagerRoute.propTypes = {
  children: PropTypes.node,
};

export default ManagerRoute;
