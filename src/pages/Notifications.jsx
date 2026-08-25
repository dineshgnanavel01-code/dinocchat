import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Warm Editorial Community: notifications are an annotated margin—quietly grouped, scannable, and respectful of attention.
import { Bell, Check, Heart, MessageCircle, UserPlus } from "lucide-react";
import { notifications } from "../data/mockData";
import { Avatar } from "../components/Avatar";
import { useApp } from "../context/AppContext";
const icons = { like: Heart, follow: UserPlus, comment: MessageCircle };
export default function Notifications() {
    const { unreadCount, markNotificationsRead } = useApp();
    return _jsx("main", { className: "page-grid single-page-grid", children: _jsxs("section", { className: "narrow-page", children: [_jsxs("div", { className: "page-intro", children: [_jsxs("div", { children: [_jsx("span", { className: "eyebrow", children: "Your commonplace" }), _jsx("h1", { children: "Notifications" })] }), _jsxs("button", { className: "quiet-action", onClick: markNotificationsRead, children: [_jsx(Check, { size: 15 }), " ", unreadCount ? "Mark all read" : "All read"] })] }), _jsx("div", { className: "notification-list", children: notifications.map((notification) => { const Icon = icons[notification.type]; return _jsxs("article", { className: `notification-row ${notification.unread ? "is-unread" : ""}`, children: [_jsx(Avatar, { src: notification.actor.avatar, initials: notification.actor.initials, alt: notification.actor.name, size: "md" }), _jsxs("div", { className: "notification-copy", children: [_jsxs("p", { children: [_jsx("strong", { children: notification.actor.name }), " ", notification.text] }), _jsxs("span", { children: [_jsx("time", { children: notification.time }), _jsx("i", { children: "\u00B7" }), _jsx(Icon, { size: 13 })] })] }), notification.unread && _jsx("span", { className: "unread-dot", "aria-label": "Unread" })] }, notification.id); }) }), _jsxs("div", { className: "empty-note", children: [_jsx(Bell, { size: 18 }), _jsx("p", { children: "That\u2019s everything for now." }), _jsx("span", { children: "New activity will meet you here." })] })] }) });
}
