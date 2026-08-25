import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Warm Editorial Community: the nav is a calm masthead, pairing a small sun-mark with precise wayfinding and generous breathing room.
import { Bell, ChevronDown, Menu, Search, Sun } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useApp } from "../context/AppContext";
import { Avatar } from "./Avatar";
export function Navbar({ onMenuClick }) {
    const [location] = useLocation();
    const { currentUser, unreadCount, setActiveNav } = useApp();
    const isNotifications = location === "/notifications";
    return (_jsx("header", { className: "topbar", children: _jsxs("div", { className: "topbar-inner", children: [_jsxs("div", { className: "brand-lockup", children: [_jsx("button", { className: "mobile-menu-button icon-button", onClick: onMenuClick, "aria-label": "Open navigation", children: _jsx(Menu, { size: 19, strokeWidth: 1.8 }) }), _jsxs(Link, { href: "/", className: "brand-link", onClick: () => setActiveNav("home"), children: [_jsx("span", { className: "brand-symbol", "aria-hidden": "true", children: _jsx(Sun, { size: 18, strokeWidth: 2.2 }) }), _jsx("span", { className: "brand-wordmark", children: "commonplace" })] })] }), _jsxs("label", { className: "search-field", "aria-label": "Search commonplace", children: [_jsx(Search, { size: 17, strokeWidth: 1.8 }), _jsx("input", { placeholder: "Search people, notes, places" }), _jsx("kbd", { children: "\u2318 K" })] }), _jsxs("div", { className: "topbar-actions", children: [_jsxs(Link, { href: "/notifications", className: `nav-icon-link ${isNotifications ? "is-active" : ""}`, "aria-label": `Notifications${unreadCount ? `, ${unreadCount} unread` : ""}`, onClick: () => setActiveNav("notifications"), children: [_jsx(Bell, { size: 19, strokeWidth: 1.8 }), unreadCount > 0 && _jsx("span", { className: "notification-badge", children: unreadCount })] }), _jsxs(Link, { href: "/profile", className: "profile-trigger", "aria-label": "Open profile", children: [_jsx(Avatar, { src: currentUser.avatar, initials: currentUser.initials, alt: currentUser.name, size: "sm" }), _jsx(ChevronDown, { size: 14, strokeWidth: 1.8 })] })] })] }) }));
}
