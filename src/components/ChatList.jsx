// Dinoc India Edition: the inbox is a compact city noticeboard for choosing the next conversation.

import { MessageCircle, Search, UserPlus } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { useMessages } from "../context/MessageContext";
import { Avatar } from "./Navbar";

export default function ChatList() {
  const { conversations, activeConversationId, selectConversation } = useMessages();
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => conversations.filter((item) => `${item.name} ${item.handle} ${item.preview}`.toLowerCase().includes(query.toLowerCase())), [conversations, query]);

  return <aside className="conversation-list"><div className="inbox-heading"><div><span className="eyebrow">Your adda</span><h2><MessageCircle size={16} /> Messages</h2></div><button className="icon-button" onClick={() => toast("New chat search is ready", { description: "Choose someone from your people list to begin." })} aria-label="Start a new chat"><UserPlus size={17} /></button></div><label className="inbox-search"><Search size={15} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search chats" aria-label="Search chats" /></label><div className="conversation-items">{filtered.length ? filtered.map((conversation) => <button key={conversation.id} className={`conversation-row ${activeConversationId === conversation.id ? "is-active" : ""}`} onClick={() => selectConversation(conversation.id)}><Avatar src={conversation.avatar} initials={conversation.initials} alt={conversation.name} size="md" online={conversation.online} /><span className="conversation-copy"><strong>{conversation.name}</strong><small>{conversation.preview}</small></span><span className="conversation-meta"><time>{conversation.time}</time>{conversation.unread > 0 && <b>{conversation.unread}</b>}</span></button>) : <div className="empty-chat"><strong>No chats found</strong><span>Try a name or a recent note.</span></div>}</div></aside>;
}
