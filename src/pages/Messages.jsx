// Warm Editorial Community: messages feel like a quiet correspondence desk, with a readable thread and enough margin around every reply.

import { useState } from "react";
import { toast } from "sonner";
import ChatList from "../components/ChatList";
import ChatWindow from "../components/ChatWindow";

export default function Messages() {
  const [showThread, setShowThread] = useState(true);
  return <main className="page-grid single-page-grid messages-page"><section className="messages-panel"><div className="page-intro messages-intro"><div><span className="eyebrow">Correspondence</span><h1>Messages</h1></div><button className="primary-button small-button" onClick={() => toast("New message is coming soon")}>New note</button></div><div className={`messages-layout ${showThread ? "show-thread" : ""}`}><div className="chat-list-wrap"><ChatList /></div><div className="chat-window-wrap"><ChatWindow onBack={() => setShowThread(false)} /></div></div></section></main>;
}
