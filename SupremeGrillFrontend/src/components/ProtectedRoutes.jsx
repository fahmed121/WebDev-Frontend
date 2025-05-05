import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UseAuth } from "../context/AuthContext.jsx";

const ProtectedRoutes = ({ children, roleRequirement }) => {
  const { user } = UseAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }

  if (roleRequirement && user.role !== roleRequirement) {
    return <Navigate to="/unauthorised" />;
  }
  return children;
};

export default ProtectedRoutes;
