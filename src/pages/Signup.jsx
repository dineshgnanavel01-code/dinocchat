// Warm Editorial Community: signup is an invitation to notice more closely, with a short, human-scale first step.

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
  const submit = (event) => { event.preventDefault(); if (!name.trim() || !email.trim()) return; signup(name.trim(), email.trim()); toast("Your commonplace is ready"); setLocation("/"); };
  return <main className="auth-page"><div className="auth-panel"><div className="auth-brand"><span className="brand-symbol"><Sun size={18} /></span><span className="brand-wordmark">commonplace</span></div><span className="eyebrow">Start a quiet collection</span><h1>Keep the good details nearby.</h1><p className="auth-copy">Create a small corner for the places, questions, and observations you want to remember.</p><form className="auth-form" onSubmit={submit}><label>Your name<div className="auth-input"><UserRound size={16} /><input value={name} onChange={(event) => setName(event.target.value)} placeholder="Dinesh" required /></div></label><label>Email address<div className="auth-input"><Mail size={16} /><input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" required /></div></label><button className="primary-button" type="submit">Create your space <ArrowRight size={16} /></button></form><p className="auth-switch">Already have a place? <Link href="/login">Return to it</Link></p></div><div className="auth-aside"><span className="eyebrow">What belongs here</span><ul><li>A walk that changed the shape of the day.</li><li>A question you’re not ready to answer.</li><li>A small wonder you almost missed.</li></ul></div></main>;
}
