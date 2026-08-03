import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  type Unsubscribe,
  type User,
} from "firebase/auth";

import { getFirebaseAuth } from "@/lib/firebase/firebase-app";
import type {
  AuthUser,
  EmailPasswordCredentials,
  PasswordResetCredentials,
} from "@/types/auth";
import type { ServiceFailure, ServiceResult } from "@/types/service";
import { toAuthenticationFailure } from "@/utils/firebase-auth-errors";

function toAuthUser(user: User): AuthUser {
  return {
    id: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoUrl: user.photoURL,
  };
}

export async function signUp(
  credentials: EmailPasswordCredentials,
): Promise<ServiceResult<AuthUser>> {
  try {
    const credential = await createUserWithEmailAndPassword(
      getFirebaseAuth(),
      credentials.email,
      credentials.password,
    );

    return { success: true, data: toAuthUser(credential.user) };
  } catch (error: unknown) {
    return toAuthenticationFailure(error);
  }
}

export async function signIn(
  credentials: EmailPasswordCredentials,
): Promise<ServiceResult<AuthUser>> {
  try {
    const credential = await signInWithEmailAndPassword(
      getFirebaseAuth(),
      credentials.email,
      credentials.password,
    );

    return { success: true, data: toAuthUser(credential.user) };
  } catch (error: unknown) {
    return toAuthenticationFailure(error);
  }
}

export async function signInWithGoogle(): Promise<ServiceResult<AuthUser>> {
  try {
    const credential = await signInWithPopup(
      getFirebaseAuth(),
      new GoogleAuthProvider(),
    );

    return { success: true, data: toAuthUser(credential.user) };
  } catch (error: unknown) {
    return toAuthenticationFailure(error);
  }
}

export async function requestPasswordReset(
  credentials: PasswordResetCredentials,
): Promise<ServiceResult<null>> {
  try {
    await sendPasswordResetEmail(getFirebaseAuth(), credentials.email);
    return { success: true, data: null };
  } catch (error: unknown) {
    return toAuthenticationFailure(error);
  }
}

export async function signOutUser(): Promise<ServiceResult<null>> {
  try {
    await signOut(getFirebaseAuth());
    return { success: true, data: null };
  } catch (error: unknown) {
    return toAuthenticationFailure(error);
  }
}

export function subscribeToAuthState(
  onChange: (user: AuthUser | null) => void,
  onError: (failure: ServiceFailure) => void,
): Unsubscribe {
  return onAuthStateChanged(
    getFirebaseAuth(),
    (user) => onChange(user === null ? null : toAuthUser(user)),
    (error) => onError(toAuthenticationFailure(error)),
  );
}
