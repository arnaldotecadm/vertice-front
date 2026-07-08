import { createContext } from "react";
import type { AuthUser } from "aws-amplify/auth";

export type AuthStatus = "configuring" | "authenticated" | "unauthenticated";

export interface AuthContextValue {
  authStatus: AuthStatus;
  user: AuthUser | null;
  signOut: () => Promise<void>;
  refresh: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);
