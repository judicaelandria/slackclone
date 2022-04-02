import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactElement;
}

const PublicRoute = ({ children }: ProtectedRouteProps) => {
  const [cookies] = useCookies(["slack-token"]);
  if (cookies["slack-token"]) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default PublicRoute;
