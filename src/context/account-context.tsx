"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import type { UserProfile } from "@/lib/account";
import {
  clearSession,
  loadProfile,
  persistProfile,
  saveSession,
} from "@/lib/account";
import {
  emitAccountStoreChange,
  getAccountStoreServerSnapshot,
  getAccountStoreSnapshot,
  subscribeAccountStore,
} from "@/lib/account-store";

type AccountContextValue = {
  profile: UserProfile;
  signedIn: boolean;
  ready: boolean;
  updateProfile: (patch: Partial<UserProfile>) => void;
  replaceProfile: (profile: UserProfile) => void;
  signIn: () => void;
  signOut: () => void;
};

const AccountContext = createContext<AccountContextValue | null>(null);

export function AccountProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const state = useSyncExternalStore(subscribeAccountStore, getAccountStoreSnapshot, getAccountStoreServerSnapshot);
  const ready = state.v !== -1;

  const updateProfile = useCallback((patch: Partial<UserProfile>) => {
    const next = { ...loadProfile(), ...patch };
    persistProfile(next);
    emitAccountStoreChange();
  }, []);

  const replaceProfile = useCallback((p: UserProfile) => {
    persistProfile(p);
    emitAccountStoreChange();
  }, []);

  const signIn = useCallback(() => {
    saveSession(true);
    emitAccountStoreChange();
  }, []);

  const signOut = useCallback(() => {
    clearSession();
    emitAccountStoreChange();
    router.replace("/login");
  }, [router]);

  const value = useMemo(
    () => ({
      profile: state.profile,
      signedIn: state.signedIn,
      ready,
      updateProfile,
      replaceProfile,
      signIn,
      signOut,
    }),
    [state.profile, state.signedIn, ready, updateProfile, replaceProfile, signIn, signOut],
  );

  return <AccountContext.Provider value={value}>{children}</AccountContext.Provider>;
}

export function useAccount() {
  const ctx = useContext(AccountContext);
  if (!ctx) throw new Error("useAccount must be used within AccountProvider");
  return ctx;
}

export function RequireAuth({ children }: { children: ReactNode }) {
  const { signedIn, ready } = useAccount();
  const router = useRouter();

  useEffect(() => {
    if (!ready) return;
    if (!signedIn) router.replace("/login");
  }, [ready, signedIn, router]);

  if (!ready) {
    return (
      <div className="flex min-h-[100dvh] items-center justify-center bg-[var(--background)]">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-[var(--navy)] border-t-transparent" />
      </div>
    );
  }

  if (!signedIn) return null;

  return <>{children}</>;
}
