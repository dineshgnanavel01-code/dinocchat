// Warm Editorial Community: authentication is a quiet doorway into the journal, with clear state and no distracting ceremony.

import { createContext, useContext, useMemo, useState } from "react";
import { currentUser } from "../data/mockData";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(currentUser);
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const login = (email) => {
    setUser((existing) => ({ ...existing, email }));
    setIsAuthenticated(true);
  };

  const signup = (name, email) => {
    setUser((existing) => ({ ...existing, name: name || existing.name, email }));
    setIsAuthenticated(true);
  };

  const logout = () => setIsAuthenticated(false);

  const value = useMemo(() => ({ user, isAuthenticated, login, signup, logout }), [user, isAuthenticated]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) throw new Error("useAuth must be used inside AuthProvider");
  return value;
}
