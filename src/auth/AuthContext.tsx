import { useCallback, useEffect, useState, type ReactNode } from "react";
import { Hub } from "aws-amplify/utils";
import { getCurrentUser, signOut as amplifySignOut } from "aws-amplify/auth";
import { AuthContext, type AuthStatus } from "./authContextValue";
import type { AuthUser } from "aws-amplify/auth";

// Provides the app's authentication state (backed directly by Amplify's
// Cognito auth APIs) so any component can read the current user / auth
// status or trigger sign-out, without depending on the Authenticator UI
// component. Login.tsx talks to the same underlying Amplify auth functions
// (signIn/signUp/confirmSignUp/etc.) and this provider picks up the
// resulting session via Amplify's Hub auth events.
export function AuthProvider({ children }: { children: ReactNode }) {
  const [authStatus, setAuthStatus] = useState<AuthStatus>("configuring");
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function checkCurrentUser() {
      try {
        const currentUser = await getCurrentUser();
        if (!cancelled) {
          setUser(currentUser);
          setAuthStatus("authenticated");
        }
      } catch {
        if (!cancelled) {
          setUser(null);
          setAuthStatus("unauthenticated");
        }
      }
    }

    checkCurrentUser();

    const unsubscribe = Hub.listen("auth", ({ payload }) => {
      switch (payload.event) {
        case "signedIn":
          checkCurrentUser();
          break;
        case "signedOut":
          setUser(null);
          setAuthStatus("unauthenticated");
          break;
      }
    });

    return () => {
      cancelled = true;
      unsubscribe();
    };
  }, []);

  const refresh = useCallback(async () => {
    try {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
      setAuthStatus("authenticated");
    } catch {
      setUser(null);
      setAuthStatus("unauthenticated");
    }
  }, []);

  const signOut = useCallback(async () => {
    await amplifySignOut();
    setUser(null);
    setAuthStatus("unauthenticated");
  }, []);

  return (
    <AuthContext.Provider value={{ authStatus, user, signOut, refresh }}>
      {children}
    </AuthContext.Provider>
  );
}
