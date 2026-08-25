// Warm Editorial Community: a chat thread feels like an exchange of folded notes rather than a generic messaging pane.

import { ArrowLeft, MoreHorizontal, Paperclip, Send, Smile } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useMessages } from "../context/MessageContext";
import { Avatar } from "./Navbar";

export default function ChatWindow({ onBack }) {
  const { activeConversation, messages, sendMessage } = useMessages();
  const [draft, setDraft] = useState("");
  const submit = () => { if (!draft.trim()) return; sendMessage(draft); setDraft(""); };
  return <section className="thread-panel"><header className="thread-header"><button className="icon-button mobile-back" onClick={onBack} aria-label="Back to messages"><ArrowLeft size={18} /></button><Avatar src={activeConversation.avatar} initials={activeConversation.initials} alt={activeConversation.name} size="sm" online={activeConversation.online} /><div><strong>{activeConversation.name}</strong><span>{activeConversation.online ? "Online now" : "Last seen recently"}</span></div><button className="icon-button thread-more" onClick={() => toast("Thread options are coming soon")} aria-label="Thread options"><MoreHorizontal size={18} /></button></header><div className="message-thread"><div className="thread-date">Today</div>{messages.map((message) => <div className={`message-bubble ${message.from === "me" ? "is-mine" : ""}`} key={message.id}><p>{message.text}</p><time>{message.time}</time></div>)}</div><form className="reply-area" onSubmit={(event) => { event.preventDefault(); submit(); }}><input value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="Write a reply..." aria-label="Write a reply" /><button type="button" className="reply-tool" onClick={() => toast("Attachments are coming soon")} aria-label="Attach"><Paperclip size={17} /></button><button type="button" className="reply-tool" onClick={() => toast("Reactions are coming soon")} aria-label="Add reaction"><Smile size={17} /></button><button className="send-button" aria-label="Send reply"><Send size={16} /></button></form></section>;
}
