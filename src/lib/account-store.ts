import type { UserProfile } from "@/lib/account";
import { defaultProfile, loadProfile, loadSession } from "@/lib/account";

let version = 0;
const listeners = new Set<() => void>();

/** Stable snapshot for SSR / server components. `useSyncExternalStore` requires referential stability. */
const SERVER_SNAPSHOT: { v: number; profile: UserProfile; signedIn: boolean } = {
  v: -1,
  profile: { ...defaultProfile },
  signedIn: false,
};

/** Cached client snapshot; same reference until `version` changes (after emit). */
let clientCache: typeof SERVER_SNAPSHOT | null = null;

export function subscribeAccountStore(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/** Call after mutating localStorage session or profile so subscribers re-read. */
export function emitAccountStoreChange() {
  version += 1;
  clientCache = null;
  listeners.forEach((l) => l());
}

export function getAccountStoreSnapshot(): {
  v: number;
  profile: UserProfile;
  signedIn: boolean;
} {
  if (clientCache && clientCache.v === version) {
    return clientCache;
  }
  clientCache = {
    v: version,
    profile: loadProfile(),
    signedIn: loadSession(),
  };
  return clientCache;
}

export function getAccountStoreServerSnapshot(): {
  v: number;
  profile: UserProfile;
  signedIn: boolean;
} {
  return SERVER_SNAPSHOT;
}
