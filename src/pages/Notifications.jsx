// Dinoc Instagram Edition: notifications are an annotated margin—quietly grouped, scannable, and respectful of attention.

import { Bell } from "lucide-react";
import { toast } from "sonner";
import NotificationPanel from "../components/NotificationPanel";

export default function Notifications() {
  return <main className="page-grid single-page-grid"><section className="narrow-page"><div className="page-intro"><div><span className="eyebrow">Your Dinoc space</span><h1>Notifications</h1></div></div><NotificationPanel onRead={() => toast("All caught up", { description: "Your Dinoc space is quiet for now." })} /><div className="empty-note"><Bell size={18} /><p>That’s everything for now.</p><span>New activity will meet you here.</span></div></section></main>;
}
