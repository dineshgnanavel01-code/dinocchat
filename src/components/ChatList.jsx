// Warm Editorial Community: the inbox reads like a small stack of letters, with calm separators and an obvious current thread.

import { Search } from "lucide-react";
import { useMessages } from "../context/MessageContext";
import { Avatar } from "./Navbar";

export default function ChatList() {
  const { conversations, activeConversationId, setActiveConversationId } = useMessages();
  return <div className="conversation-list"><label className="inbox-search"><Search size={15} /><input placeholder="Search messages" aria-label="Search messages" /></label>{conversations.map((conversation) => <button className={`conversation-row ${activeConversationId === conversation.id ? "is-active" : ""}`} key={conversation.id} onClick={() => setActiveConversationId(conversation.id)}><Avatar src={conversation.avatar} initials={conversation.initials} alt={conversation.name} size="md" online={conversation.online} /><span className="conversation-copy"><strong>{conversation.name}</strong><small>{conversation.preview}</small></span><span className="conversation-meta"><time>{conversation.time}</time>{conversation.unread > 0 && <b>{conversation.unread}</b>}</span></button>)}</div>;
}
