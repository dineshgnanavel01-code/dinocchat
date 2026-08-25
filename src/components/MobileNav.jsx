// Warm Editorial Community: mobile navigation is a compact footer index—clear, thumb-friendly, and intentionally quiet.

import { Bell, Compass, Home, MessageCircle, UserRound } from "lucide-react";
import { Link, useLocation } from "wouter";

const items = [{ href: "/", label: "Home", Icon: Home }, { href: "/explore", label: "Explore", Icon: Compass }, { href: "/messages", label: "Messages", Icon: MessageCircle }, { href: "/profile", label: "Profile", Icon: UserRound }];

export default function MobileNav() {
  const [location] = useLocation();
  return <nav className="mobile-nav" aria-label="Mobile navigation">{items.map(({ href, label, Icon }) => <Link href={href} className={location === href ? "is-active" : ""} key={href}><Icon size={18} /><span>{label}</span></Link>)}<Link href="/notifications" className={location === "/notifications" ? "is-active" : ""}><Bell size={18} /><span>Alerts</span></Link></nav>;
}
