import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Warm Editorial Community: navigation reads like a magazine index—quiet labels, clear markers, and one warm action for contributing.
import { Bookmark, Compass, Home, LogOut, MessageCircle, MoreHorizontal, PenLine, Settings, UserRound } from "lucide-react";
import { Link, useLocation } from "wouter";
import { toast } from "sonner";
import { useApp } from "../context/AppContext";
const navItems = [
    { label: "Home", icon: Home, href: "/", key: "home" },
    { label: "Discover", icon: Compass, href: "/discover", key: "discover" },
    { label: "Messages", icon: MessageCircle, href: "/messages", key: "messages" },
    { label: "Saved notes", icon: Bookmark, href: "/saved", key: "saved" },
    { label: "Profile", icon: UserRound, href: "/profile", key: "profile" },
];
function handlePlaceholder(label) {
    toast(`${label} is taking shape`, { description: "This quiet corner is coming soon." });
}
export function Sidebar({ mobile = false, onNavigate }) {
    const [location] = useLocation();
    const { currentUser, setActiveNav } = useApp();
    return (_jsxs("aside", { className: mobile ? "mobile-drawer" : "sidebar", children: [mobile && _jsxs("div", { className: "drawer-heading", children: [_jsx("span", { children: "Menu" }), _jsx("button", { className: "icon-button", onClick: onNavigate, "aria-label": "Close navigation", children: "\u00D7" })] }), _jsxs("div", { className: "sidebar-profile", children: [_jsxs("div", { className: "sidebar-profile-top", children: [_jsx("span", { className: "eyebrow", children: "Your commonplace" }), _jsx(MoreHorizontal, { size: 16 })] }), _jsxs(Link, { href: "/profile", className: "sidebar-identity", onClick: () => { setActiveNav("profile"); onNavigate?.(); }, children: [_jsx("span", { className: "mini-avatar", children: _jsx("img", { src: currentUser.avatar, alt: "" }) }), _jsxs("span", { children: [_jsx("strong", { children: currentUser.name }), _jsxs("small", { children: ["@", currentUser.handle] })] })] })] }), _jsxs("nav", { className: "side-nav", "aria-label": "Primary navigation", children: [_jsx("span", { className: "eyebrow nav-label", children: "Read & share" }), navItems.map(({ label, icon: Icon, href, key }) => {
                        const active = location === href || (href !== "/" && location.startsWith(href));
                        return (_jsxs(Link, { href: href, className: `side-nav-link ${active ? "is-active" : ""}`, onClick: () => { setActiveNav(key); onNavigate?.(); }, children: [_jsx(Icon, { size: 18, strokeWidth: active ? 2.15 : 1.7 }), _jsx("span", { children: label }), key === "messages" && _jsx("span", { className: "nav-count", children: "2" })] }, key));
                    })] }), _jsxs("button", { className: "share-button", onClick: () => handlePlaceholder("Share a small wonder"), children: [_jsx(PenLine, { size: 16 }), " Share a small wonder"] }), _jsxs("div", { className: "sidebar-footer", children: [_jsxs(Link, { href: "/settings", className: "side-nav-link", onClick: () => { setActiveNav("settings"); onNavigate?.(); }, children: [_jsx(Settings, { size: 18, strokeWidth: 1.7 }), _jsx("span", { children: "Settings" })] }), _jsxs("button", { className: "side-nav-link text-button", onClick: () => handlePlaceholder("Sign out"), children: [_jsx(LogOut, { size: 18, strokeWidth: 1.7 }), _jsx("span", { children: "Sign out" })] }), _jsx("p", { className: "sidebar-note", children: "A social journal for noticing what matters." })] })] }));
}
export function MobileNav() {
    const [location] = useLocation();
    const { setActiveNav } = useApp();
    const items = navItems.filter((item) => ["home", "discover", "messages", "profile"].includes(item.key));
    return _jsx("nav", { className: "mobile-nav", "aria-label": "Mobile navigation", children: items.map(({ label, icon: Icon, href, key }) => _jsxs(Link, { href: href, className: `mobile-nav-link ${location === href ? "is-active" : ""}`, onClick: () => setActiveNav(key), children: [_jsx(Icon, { size: 19, strokeWidth: location === href ? 2.2 : 1.8 }), _jsx("span", { children: label })] }, key)) });
}
