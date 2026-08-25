// Dinoc India Edition: signup invites people into a local, useful, and welcoming social corner, with clear validation before the first post.

import { ArrowRight, Mail, Sun, UserRound } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { toast } from "sonner";
import { useAuth } from "../context/AuthContext";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Signup() {
  const [, setLocation] = useLocation();
  const { signup } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const submit = (event) => {
    event.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    if (trimmedName.length < 2) {
      setError("Add at least two characters for your name.");
      return;
    }
    if (!emailPattern.test(trimmedEmail)) {
      setError("Use a valid email address, such as you@example.com.");
      return;
    }
    signup(trimmedName, trimmedEmail);
    setError("");
    toast("Your Dinoc corner is ready");
    setLocation("/");
  };

  return <main className="auth-page"><div className="auth-panel"><div className="auth-brand"><span className="brand-symbol"><Sun size={18} /></span><span className="brand-wordmark">Dinoc</span></div><span className="eyebrow">Make a corner of your own</span><h1>Bring the good parts of your day.</h1><p className="auth-copy">Share city moments, meet curious people, and keep the conversations that make ordinary days better.</p><form className="auth-form" onSubmit={submit} noValidate><label>Your name<div className="auth-input"><UserRound size={16} /><input value={name} onChange={(event) => { setName(event.target.value); setError(""); }} placeholder="Dinoc" autoComplete="name" required aria-invalid={Boolean(error)} aria-describedby={error ? "signup-error" : undefined} /></div></label><label>Email address<div className="auth-input"><Mail size={16} /><input type="email" value={email} onChange={(event) => { setEmail(event.target.value); setError(""); }} placeholder="you@example.com" autoComplete="email" required aria-invalid={Boolean(error)} aria-describedby={error ? "signup-error" : undefined} /></div></label>{error && <p className="auth-error" id="signup-error" role="alert">{error}</p>}<button className="primary-button" type="submit">Create Dinoc <ArrowRight size={16} /></button></form><p className="auth-switch">Already here? <Link href="/login">Return to Dinoc</Link></p></div><div className="auth-aside"><span className="eyebrow">What belongs here</span><ul><li>A chai break that changed the shape of the afternoon.</li><li>A question you are still carrying.</li><li>A small local detail someone else might have missed.</li></ul></div></main>;
}
