"use client";

import {
  createContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  requestPasswordReset,
  signIn,
  signInWithGoogle,
  signOutUser,
  signUp,
  subscribeToAuthState,
} from "@/services/firebase/auth-service";
import type {
  AuthUser,
  EmailPasswordCredentials,
  PasswordResetCredentials,
} from "@/types/auth";
import type { ServiceFailure, ServiceResult } from "@/types/service";
import { toAuthenticationFailure } from "@/utils/firebase-auth-errors";

export interface AuthContextValue {
  user: AuthUser | null;
  isLoading: boolean;
  error: ServiceFailure | null;
  signIn: (credentials: EmailPasswordCredentials) => Promise<ServiceResult<AuthUser>>;
  signInWithGoogle: () => Promise<ServiceResult<AuthUser>>;
  signOut: () => Promise<ServiceResult<null>>;
  signUp: (credentials: EmailPasswordCredentials) => Promise<ServiceResult<AuthUser>>;
  requestPasswordReset: (
    credentials: PasswordResetCredentials,
  ) => Promise<ServiceResult<null>>;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps): ReactNode {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<ServiceFailure | null>(null);

  useEffect(() => {
    try {
      const unsubscribe = subscribeToAuthState(
        (nextUser) => {
          setUser(nextUser);
          setError(null);
          setIsLoading(false);
        },
        (failure) => {
          setError(failure);
          setIsLoading(false);
        },
      );

      return unsubscribe;
    } catch (caughtError: unknown) {
      setError(toAuthenticationFailure(caughtError));
      setIsLoading(false);
      return undefined;
    }
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isLoading,
      error,
      signIn,
      signInWithGoogle,
      signOut: signOutUser,
      signUp,
      requestPasswordReset,
    }),
    [error, isLoading, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
