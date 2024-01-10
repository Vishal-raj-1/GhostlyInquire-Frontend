import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  const token = localStorage.getItem("token");
  if (token) {
    return element;
  } else {
    return <Navigate to="/register" />;
  }
};

export default PrivateRoute;
