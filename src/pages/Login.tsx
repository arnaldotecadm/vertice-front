import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";

// Renders Amplify's Authenticator component, which provides both the sign-in
// form and the "Create Account" registration flow out of the box. Once the
// user authenticates, they are redirected to the page they originally
// requested (or home by default). Requires an ancestor <Authenticator.Provider>
// (set up once in main.tsx) so useAuthenticator has context to read from.
function Login() {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (authStatus === "authenticated") {
      const from = (location.state as { from?: Location })?.from?.pathname ?? "/";
      navigate(from, { replace: true });
    }
  }, [authStatus, location.state, navigate]);

  return <Authenticator />;
}

export default Login;
