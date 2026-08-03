import { FirebaseError } from "firebase/app";

import type { ServiceFailure } from "@/types/service";
import { ServiceConfigurationError } from "@/utils/service-errors";

const AUTHENTICATION_ERROR_MESSAGES: Readonly<Record<string, string>> = {
  "auth/email-already-in-use": "An account already exists for this email address.",
  "auth/invalid-credential": "The email address or password is incorrect.",
  "auth/invalid-email": "Enter a valid email address.",
  "auth/popup-closed-by-user": "Google sign-in was cancelled. Please try again.",
  "auth/too-many-requests": "Too many attempts were made. Please try again later.",
  "auth/user-not-found": "The email address or password is incorrect.",
  "auth/weak-password": "Use a password with at least 8 characters.",
  "auth/wrong-password": "The email address or password is incorrect.",
  "auth/operation-not-allowed": "Google Sign-In is disabled in your Firebase Console under Authentication > Sign-in method.",
  "auth/unauthorized-domain": "This domain is not authorized for OAuth in your Firebase Console under Authentication > Settings > Authorized domains.",
  "auth/invalid-api-key": "Invalid Firebase API Key. Please check your NEXT_PUBLIC_FIREBASE_API_KEY in .env.local.",
  "auth/api-key-not-valid-please-pass-a-valid-api-key": "Invalid Firebase API Key. Please check your NEXT_PUBLIC_FIREBASE_API_KEY in .env.local.",
};

export function toAuthenticationFailure(error: unknown): ServiceFailure {
  if (error instanceof ServiceConfigurationError) {
    return {
      success: false,
      code: "configuration",
      message: "Authentication is not configured yet. Please try again later.",
    };
  }

  if (error instanceof FirebaseError) {
    return {
      success: false,
      code: "authentication",
      message:
        AUTHENTICATION_ERROR_MESSAGES[error.code] ??
        "We could not complete that authentication request. Please try again.",
    };
  }

  return {
    success: false,
    code: "unknown",
    message: "We could not complete that authentication request. Please try again.",
  };
}
