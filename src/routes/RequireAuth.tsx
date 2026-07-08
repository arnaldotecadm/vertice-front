import type { ReactElement } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

// Guards a route so it is only rendered when the user is authenticated.
// Unauthenticated users are redirected to /login, with the originally
// requested location stashed in navigation state so Login can send them
// back afterwards.
function RequireAuth({ children }: { children: ReactElement }) {
  const { authStatus } = useAuth();
  const location = useLocation();

  if (authStatus === "configuring") {
    return null;
  }

  if (authStatus !== "authenticated") {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
}

export default RequireAuth;
