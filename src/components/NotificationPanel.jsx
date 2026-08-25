// Dinoc India Edition: notifications surface the people and moments that are moving through the community.

import { Bell, Check, Heart, MessageCircle, UserPlus } from "lucide-react";
import { useMemo, useState } from "react";
import { notifications as seedNotifications } from "../data/mockData";
import { Avatar } from "./Navbar";

const icons = { like: Heart, follow: UserPlus, comment: MessageCircle };

export default function NotificationPanel({ onRead }) {
  const [items, setItems] = useState(seedNotifications);
  const unreadCount = useMemo(() => items.filter((item) => item.unread).length, [items]);
  const markAllRead = () => { setItems((current) => current.map((item) => ({ ...item, unread: false }))); onRead?.(); };
  const markRead = (id) => setItems((current) => current.map((item) => item.id === id ? { ...item, unread: false } : item));
  return <div className="notification-list"><div className="notification-summary"><span><Bell size={15} /> {unreadCount ? `${unreadCount} new updates` : "You are all caught up"}</span>{unreadCount > 0 && <button className="quiet-action" onClick={markAllRead}><Check size={15} /> Mark all read</button>}</div>{items.map((notification) => { const Icon = icons[notification.type] || Bell; return <button className={`notification-row ${notification.unread ? "is-unread" : ""}`} key={notification.id} onClick={() => markRead(notification.id)}><Avatar src={notification.actor.avatar} initials={notification.actor.initials} alt={notification.actor.name} size="md" /><span className="notification-copy"><p><strong>{notification.actor.name}</strong> {notification.text}</p><span><time>{notification.time}</time><i>·</i><Icon size={13} /></span></span>{notification.unread && <span className="unread-dot" aria-label="Unread" />}</button>; })}</div>;
}
