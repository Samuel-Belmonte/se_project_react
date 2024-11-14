import { Navigate } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    //If user isn't logged in, return a Navigate components that sends the user to /
    return <Navigate to="/" replace />;
  }
  return children;
}

export default ProtectedRoute;
