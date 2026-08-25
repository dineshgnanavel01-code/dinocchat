// Dinoc India Edition: login is a warm, direct doorway into a lively local social space, with clear validation before entry.

import { ArrowRight, Mail, Sun } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { toast } from "sonner";
import { useAuth } from "../context/AuthContext";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Login() {
  const [, setLocation] = useLocation();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const submit = (event) => {
    event.preventDefault();
    const value = email.trim();
    if (!value) {
      setError("Enter your email address to continue.");
      return;
    }
    if (!emailPattern.test(value)) {
      setError("Use a valid email address, such as you@example.com.");
      return;
    }
    login(value);
    setError("");
    toast("Welcome back to Dinoc");
    setLocation("/");
  };

  return <main className="auth-page"><div className="auth-panel"><div className="auth-brand"><span className="brand-symbol"><Sun size={18} /></span><span className="brand-wordmark">Dinoc</span></div><span className="eyebrow">Your people are here</span><h1>What’s happening in your corner?</h1><p className="auth-copy">A friendly place for city notes, shared moments, and the conversations that make a day feel closer.</p><form className="auth-form" onSubmit={submit} noValidate><label>Email address<div className="auth-input"><Mail size={16} /><input type="email" value={email} onChange={(event) => { setEmail(event.target.value); setError(""); }} placeholder="you@example.com" autoComplete="email" required aria-invalid={Boolean(error)} aria-describedby={error ? "login-error" : undefined} /></div></label>{error && <p className="auth-error" id="login-error" role="alert">{error}</p>}<button className="primary-button" type="submit">Enter Dinoc <ArrowRight size={16} /></button></form><p className="auth-switch">New here? <Link href="/signup">Create your corner</Link></p></div><div className="auth-aside"><span className="eyebrow">A small city signal</span><blockquote>“Everyday life is full of stories when we make room to notice one another.”</blockquote><span>— Dinoc community</span></div></main>;
}
