// Dina Chat India Edition: login is a warm, direct doorway into a lively local social space.

import { ArrowRight, Mail, Sun } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { toast } from "sonner";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [, setLocation] = useLocation();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const submit = (event) => { event.preventDefault(); if (!email.trim()) return; login(email.trim()); toast("Welcome back to Dina Chat"); setLocation("/"); };
  return <main className="auth-page"><div className="auth-panel"><div className="auth-brand"><span className="brand-symbol"><Sun size={18} /></span><span className="brand-wordmark">Dina Chat</span></div><span className="eyebrow">Your people are here</span><h1>What’s happening in your corner?</h1><p className="auth-copy">A friendly place for city notes, shared moments, and the conversations that make a day feel closer.</p><form className="auth-form" onSubmit={submit}><label>Email address<div className="auth-input"><Mail size={16} /><input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" required /></div></label><button className="primary-button" type="submit">Enter Dina Chat <ArrowRight size={16} /></button></form><p className="auth-switch">New here? <Link href="/signup">Create your corner</Link></p></div><div className="auth-aside"><span className="eyebrow">A small city signal</span><blockquote>“Everyday life is full of stories when we make room to notice one another.”</blockquote><span>— Dina Chat community</span></div></main>;
}
