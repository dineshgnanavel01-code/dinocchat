// Warm Editorial Community: notifications are an annotated margin—quietly grouped, scannable, and respectful of attention.

import { Bell, Check, Heart, MessageCircle, UserPlus } from "lucide-react";
import { notifications } from "../data/mockData";
import { Avatar } from "./Avatar";

const icons = { like: Heart, follow: UserPlus, comment: MessageCircle };

export default function NotificationPanel({ onRead }) {
  return <div className="notification-list">{notifications.map((notification) => { const Icon = icons[notification.type]; return <article className={`notification-row ${notification.unread ? "is-unread" : ""}`} key={notification.id}><Avatar src={notification.actor.avatar} initials={notification.actor.initials} alt={notification.actor.name} size="md" /><div className="notification-copy"><p><strong>{notification.actor.name}</strong> {notification.text}</p><span><time>{notification.time}</time><i>·</i><Icon size={13} /></span></div>{notification.unread && <span className="unread-dot" aria-label="Unread" />}</article>; })}<button className="quiet-action notification-read" onClick={onRead}><Check size={15} /> Mark all read</button></div>;
}
