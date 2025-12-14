import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isLogin = localStorage.getItem("isLogin");

  return children;
}

export default ProtectedRoute;
