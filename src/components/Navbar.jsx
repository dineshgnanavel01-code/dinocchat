// Warm Editorial Community: the nav is a calm masthead, pairing a small sun-mark with precise wayfinding and generous breathing room.

import { Bell, ChevronDown, Menu, Search, Sun } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useAuth } from "../context/AuthContext";

const avatarSizes = { sm: "avatar-size-sm", md: "avatar-size-md", lg: "avatar-size-lg", xl: "avatar-size-xl" };

export function Avatar({ src, initials, alt, size = "md", ring = false, online = false, className = "" }) {
  return <span className={`relative inline-flex shrink-0 ${className}`}><span className={`avatar-shell ${avatarSizes[size] || avatarSizes.md} ${ring ? "avatar-ring" : ""}`}>{src ? <img src={src} alt={alt} /> : <span aria-hidden="true">{initials}</span>}</span>{online && <span className="status-dot" aria-label="Online" />}</span>;
}

export default function Navbar({ onMenuClick }) {
  const [location] = useLocation();
  const { user } = useAuth();
  const isNotifications = location === "/notifications";
  return <header className="topbar"><div className="topbar-inner"><div className="brand-lockup"><button className="mobile-menu-button icon-button" onClick={onMenuClick} aria-label="Open navigation"><Menu size={19} strokeWidth={1.8} /></button><Link href="/" className="brand-link"><span className="brand-symbol" aria-hidden="true"><Sun size={18} strokeWidth={2.2} /></span><span className="brand-wordmark">commonplace</span></Link></div><label className="search-field" aria-label="Search commonplace"><Search size={17} strokeWidth={1.8} /><input placeholder="Search people, notes, places" /><kbd>⌘ K</kbd></label><div className="topbar-actions"><Link href="/notifications" className={`nav-icon-link ${isNotifications ? "is-active" : ""}`} aria-label="Notifications"><Bell size={19} strokeWidth={1.8} /><span className="notification-badge">2</span></Link><Link href="/profile" className="profile-trigger" aria-label="Open profile"><Avatar src={user.avatar} initials={user.initials} alt={user.name} size="sm" /><ChevronDown size={14} strokeWidth={1.8} /></Link></div></div></header>;
}
