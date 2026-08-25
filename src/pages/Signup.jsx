// Dina Chat India Edition: signup invites people into a local, useful, and welcoming social corner.

import { ArrowRight, Mail, Sun, UserRound } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { toast } from "sonner";
import { useAuth } from "../context/AuthContext";

export default function Signup() {
  const [, setLocation] = useLocation();
  const { signup } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const submit = (event) => { event.preventDefault(); if (!name.trim() || !email.trim()) return; signup(name.trim(), email.trim()); toast("Your Dina Chat corner is ready"); setLocation("/"); };
  return <main className="auth-page"><div className="auth-panel"><div className="auth-brand"><span className="brand-symbol"><Sun size={18} /></span><span className="brand-wordmark">Dina Chat</span></div><span className="eyebrow">Make a corner of your own</span><h1>Bring the good parts of your day.</h1><p className="auth-copy">Share city moments, meet curious people, and keep the conversations that make ordinary days better.</p><form className="auth-form" onSubmit={submit}><label>Your name<div className="auth-input"><UserRound size={16} /><input value={name} onChange={(event) => setName(event.target.value)} placeholder="Dinoc" required /></div></label><label>Email address<div className="auth-input"><Mail size={16} /><input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" required /></div></label><button className="primary-button" type="submit">Create Dina Chat <ArrowRight size={16} /></button></form><p className="auth-switch">Already here? <Link href="/login">Return to Dina Chat</Link></p></div><div className="auth-aside"><span className="eyebrow">What belongs here</span><ul><li>A chai break that changed the shape of the afternoon.</li><li>A question you are still carrying.</li><li>A small local detail someone else might have missed.</li></ul></div></main>;
}
