export interface AuthUser {
  id: string;
  email: string | null;
  displayName: string | null;
  photoUrl: string | null;
}

export interface EmailPasswordCredentials {
  email: string;
  password: string;
}

export interface PasswordResetCredentials {
  email: string;
}
