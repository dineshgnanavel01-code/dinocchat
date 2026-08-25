// Warm Editorial Community: navigation reads like a magazine index—quiet labels, clear markers, and one warm action for contributing.

import { Bookmark, Compass, Home, LogOut, MessageCircle, MoreHorizontal, PenLine, Settings, UserRound } from "lucide-react";
import { Link, useLocation } from "wouter";
import { toast } from "sonner";
import { useAuth } from "../context/AuthContext";

const navItems = [{ label: "Home", icon: Home, href: "/" }, { label: "Explore", icon: Compass, href: "/explore" }, { label: "Messages", icon: MessageCircle, href: "/messages" }, { label: "Saved notes", icon: Bookmark, href: "/saved" }, { label: "Profile", icon: UserRound, href: "/profile" }];

export default function Sidebar({ mobile = false, onNavigate }) {
  const [location] = useLocation();
  const { user, logout } = useAuth();
  return <aside className={mobile ? "mobile-drawer" : "sidebar"}>{mobile && <div className="drawer-heading"><span>Menu</span><button className="icon-button" onClick={onNavigate} aria-label="Close navigation">×</button></div>}<div className="sidebar-profile"><div className="sidebar-profile-top"><span className="eyebrow">Your Dinoc space</span><MoreHorizontal size={16} /></div><Link href="/profile" className="sidebar-identity" onClick={onNavigate}><span className="mini-avatar"><img src={user.avatar} alt="" /></span><span><strong>{user.name}</strong><small>@{user.handle}</small></span></Link></div><nav className="side-nav" aria-label="Primary navigation"><span className="eyebrow nav-label">Read & share</span>{navItems.map(({ label, icon: Icon, href }) => { const active = location === href || (href !== "/" && location.startsWith(href)); return <Link href={href} className={`side-nav-link ${active ? "is-active" : ""}`} onClick={onNavigate} key={href}><Icon size={18} strokeWidth={active ? 2.15 : 1.7} /><span>{label}</span>{label === "Messages" && <span className="nav-count">2</span>}</Link>; })}</nav><button className="share-button" onClick={() => toast("Share a small wonder", { description: "The composer is waiting in your home feed." })}><PenLine size={16} /> Share a small wonder</button><div className="sidebar-footer"><Link href="/settings" className="side-nav-link" onClick={onNavigate}><Settings size={18} strokeWidth={1.7} /><span>Settings</span></Link><button className="side-nav-link text-button" onClick={() => { logout(); toast("You have signed out"); }}><LogOut size={18} strokeWidth={1.7} /><span>Sign out</span></button><p className="sidebar-note">A social journal for noticing what matters.</p></div></aside>;
}
