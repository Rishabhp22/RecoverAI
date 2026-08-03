import { getApp, getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getStorage, type FirebaseStorage } from "firebase/storage";

import { firebaseConfig, isFirebaseConfigured } from "@/lib/firebase/firebase-config";
import { ServiceConfigurationError } from "@/utils/service-errors";

export function getFirebaseApp(): FirebaseApp {
  if (!isFirebaseConfigured()) {
    throw new ServiceConfigurationError(
      "Firebase is not configured. Add the required values to .env.local.",
    );
  }

  return getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
}

export function getFirebaseAuth(): Auth {
  return getAuth(getFirebaseApp());
}

export function getFirebaseFirestore(): Firestore {
  return getFirestore(getFirebaseApp());
}

export function getFirebaseStorage(): FirebaseStorage {
  return getStorage(getFirebaseApp());
}
