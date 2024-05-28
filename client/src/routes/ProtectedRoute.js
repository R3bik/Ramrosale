import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Correct import path

const ProtectedRoute = ({ children, redirectTo }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to={redirectTo} />;
  }

  return children;
};

export default ProtectedRoute;
