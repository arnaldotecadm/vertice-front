import { useContext } from "react";
import { AuthContext } from "./authContextValue";

// Reads the app's authentication state/actions provided by <AuthProvider>
// (see AuthContext.tsx), backed directly by Amplify's Cognito auth APIs.
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
