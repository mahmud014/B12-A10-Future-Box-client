import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import LoadingPage from "../Components/LoadingPage";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <LoadingPage></LoadingPage>;
  }
  if (user && user?.email) {
    return children;
  } else {
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
  }
};

export default PrivateRoute;
