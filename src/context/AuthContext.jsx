// Dinoc India Edition: authentication is a lightweight local doorway with enough state for a believable social app demo.

import { createContext, useContext, useMemo, useState } from "react";
import { currentUser } from "../data/mockData";

const AuthContext = createContext(null);

function loadSession() {
  if (typeof window === "undefined") return true;
  return window.localStorage.getItem("dinoc-session") !== "signed-out";
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(currentUser);
  const [isAuthenticated, setIsAuthenticated] = useState(loadSession);

  const login = (emailOrDetails) => {
    const email = typeof emailOrDetails === "string" ? emailOrDetails : emailOrDetails?.email;
    setUser((existing) => ({ ...existing, email: email || existing.email }));
    setIsAuthenticated(true);
    window.localStorage?.setItem("dinoc-session", "signed-in");
  };

  const signup = (nameOrDetails, email) => {
    const details = typeof nameOrDetails === "object" ? nameOrDetails : { name: nameOrDetails, email };
    const nextName = details.name?.trim() || currentUser.name;
    setUser((existing) => ({ ...existing, name: nextName, handle: nextName.toLowerCase().replace(/[^a-z0-9]+/g, "").slice(0, 18) || existing.handle, email: details.email || existing.email }));
    setIsAuthenticated(true);
    window.localStorage?.setItem("dinoc-session", "signed-in");
  };

  const updateProfile = (updates) => setUser((existing) => ({ ...existing, ...updates }));
  const logout = () => { setIsAuthenticated(false); window.localStorage?.setItem("dinoc-session", "signed-out"); };

  const value = useMemo(() => ({ user, isAuthenticated, login, signup, updateProfile, logout }), [user, isAuthenticated]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) throw new Error("useAuth must be used inside AuthProvider");
  return value;
}
