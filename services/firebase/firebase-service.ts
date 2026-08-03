import type { FirebaseApp } from "firebase/app";
import type { Auth } from "firebase/auth";
import type { Firestore } from "firebase/firestore";
import type { FirebaseStorage } from "firebase/storage";

import {
  getFirebaseApp,
  getFirebaseAuth,
  getFirebaseFirestore,
  getFirebaseStorage,
} from "@/lib/firebase/firebase-app";

export interface FirebaseServices {
  app: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
  storage: FirebaseStorage;
}

export function getFirebaseServices(): FirebaseServices {
  return {
    app: getFirebaseApp(),
    auth: getFirebaseAuth(),
    firestore: getFirebaseFirestore(),
    storage: getFirebaseStorage(),
  };
}
