// Warm Editorial Community: protection is a quiet gate—guests are guided to the doorway without a flash of broken content.

import { useEffect } from "react";
import { useLocation } from "wouter";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();
  useEffect(() => { if (!isAuthenticated) setLocation("/login"); }, [isAuthenticated, setLocation]);
  return isAuthenticated ? children : null;
}
