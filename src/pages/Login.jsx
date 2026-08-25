// Warm Editorial Community: login feels like opening a familiar notebook—focused, warm, and free of unnecessary friction.

import { ArrowRight, Mail, Sun } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { toast } from "sonner";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [, setLocation] = useLocation();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const submit = (event) => { event.preventDefault(); if (!email.trim()) return; login(email.trim()); toast("Good to see you again"); setLocation("/"); };
  return <main className="auth-page"><div className="auth-panel"><div className="auth-brand"><span className="brand-symbol"><Sun size={18} /></span><span className="brand-wordmark">commonplace</span></div><span className="eyebrow">Return to your journal</span><h1>Make room for what caught your eye.</h1><p className="auth-copy">A quieter place for notes, questions, and the ordinary details worth carrying.</p><form className="auth-form" onSubmit={submit}><label>Email address<div className="auth-input"><Mail size={16} /><input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" required /></div></label><button className="primary-button" type="submit">Continue <ArrowRight size={16} /></button></form><p className="auth-switch">New here? <Link href="/signup">Make a commonplace</Link></p></div><div className="auth-aside"><span className="eyebrow">A small invitation</span><blockquote>“The world is full of magic things, patiently waiting for our senses to grow sharper.”</blockquote><span>— W. B. Yeats</span></div></main>;
}
