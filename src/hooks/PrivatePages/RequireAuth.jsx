import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    return <Navigate to={"/"} state={{ from: location }} />;
  } else {
    return children;
  }
};
export default RequireAuth;
