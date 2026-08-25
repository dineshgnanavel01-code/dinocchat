// Dinoc India Edition: the masthead is a friendly city signal with quick search, live notifications, and a direct route to your profile.

import { Bell, ChevronDown, Menu, Search, Sun } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useAuth } from "../context/AuthContext";
import { useMessages } from "../context/MessageContext";

const avatarSizes = { sm: "avatar-size-sm", md: "avatar-size-md", lg: "avatar-size-lg", xl: "avatar-size-xl" };

export function Avatar({ src, initials, alt, size = "md", ring = false, online = false, className = "" }) {
  return <span className={`relative inline-flex shrink-0 ${className}`}><span className={`avatar-shell ${avatarSizes[size] || avatarSizes.md} ${ring ? "avatar-ring" : ""}`}>{src ? <img src={src} alt={alt} onError={(event) => { event.currentTarget.removeAttribute("src"); }} /> : <span aria-hidden="true">{initials}</span>}</span>{online && <span className="status-dot" aria-label="Online" />}</span>;
}

export default function Navbar({ onMenuClick }) {
  const [location, navigate] = useLocation();
  const { user } = useAuth();
  const { unreadTotal } = useMessages();
  const [query, setQuery] = useState("");
  const isNotifications = location === "/notifications";
  const submitSearch = (event) => { if (event.key === "Enter" && query.trim()) navigate(`/explore?q=${encodeURIComponent(query.trim())}`); };
  return <header className="topbar"><div className="topbar-inner"><div className="brand-lockup"><button className="mobile-menu-button icon-button" onClick={onMenuClick} aria-label="Open navigation"><Menu size={19} strokeWidth={1.8} /></button><Link href="/" className="brand-link"><span className="brand-symbol" aria-hidden="true"><Sun size={18} strokeWidth={2.2} /></span><span className="brand-wordmark">Dina Chat</span></Link></div><label className="search-field" aria-label="Search Dina Chat"><Search size={17} strokeWidth={1.8} /><input value={query} onChange={(event) => setQuery(event.target.value)} onKeyDown={submitSearch} placeholder="Search people, notes, places" /><kbd>⌘ K</kbd></label><div className="topbar-actions"><Link href="/notifications" className={`nav-icon-link ${isNotifications ? "is-active" : ""}`} aria-label="Notifications"><Bell size={19} strokeWidth={1.8} />{unreadTotal > 0 && <span className="notification-badge">{unreadTotal}</span>}</Link><Link href="/profile" className="profile-trigger" aria-label={`Open ${user.name}'s profile`}><Avatar src={user.avatar} initials={user.initials} alt={user.name} size="sm" /><ChevronDown size={14} strokeWidth={1.8} /></Link></div></div></header>;
}
