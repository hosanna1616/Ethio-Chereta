export type UserProfile = {
  fullName: string;
  company: string;
  jobTitle: string;
  email: string;
  phone: string;
  city: string;
};

const PROFILE_KEY = "ethiochereta-profile";
const SESSION_KEY = "ethiochereta-session";

export const defaultProfile: UserProfile = {
  fullName: "Selam Tadesse",
  company: "EthioChereta Trading PLC",
  jobTitle: "Lead Procurement",
  email: "selam@example.com",
  phone: "+251 911 000 000",
  city: "Addis Ababa",
};

function isBrowser() {
  return typeof window !== "undefined";
}

export function loadProfile(): UserProfile {
  if (!isBrowser()) return { ...defaultProfile };
  try {
    const raw = localStorage.getItem(PROFILE_KEY);
    if (!raw) return { ...defaultProfile };
    const parsed = JSON.parse(raw) as Partial<UserProfile>;
    return { ...defaultProfile, ...parsed };
  } catch {
    return { ...defaultProfile };
  }
}

export function persistProfile(profile: UserProfile) {
  if (!isBrowser()) return;
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
}

export function loadSession(): boolean {
  if (!isBrowser()) return false;
  return localStorage.getItem(SESSION_KEY) === "1";
}

export function saveSession(signedIn: boolean) {
  if (!isBrowser()) return;
  if (signedIn) localStorage.setItem(SESSION_KEY, "1");
  else localStorage.removeItem(SESSION_KEY);
}

export function clearSession() {
  if (!isBrowser()) return;
  localStorage.removeItem(SESSION_KEY);
}
