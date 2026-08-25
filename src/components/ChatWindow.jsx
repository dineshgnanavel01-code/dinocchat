// Dinoc India Edition: a chat thread feels like a quick exchange between people who share the same corners of the city.

import { ArrowLeft, MoreHorizontal, Paperclip, Send, Smile, Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useMessages } from "../context/MessageContext";
import { Avatar } from "./Navbar";

const suggestions = ["That sounds lovely.", "Tell me more?", "Sending good energy."];

export default function ChatWindow({ onBack }) {
  const { activeConversation, messages, sendMessage } = useMessages();
  const [draft, setDraft] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const submit = () => {
    if (!draft.trim()) return;
    sendMessage(draft);
    setDraft("");
    setIsTyping(false);
  };
  const quickReply = (text) => { setDraft(text); setIsTyping(true); };
  return <section className="thread-panel"><header className="thread-header"><button className="icon-button mobile-back" onClick={onBack} aria-label="Back to messages"><ArrowLeft size={18} /></button><Avatar src={activeConversation.avatar} initials={activeConversation.initials} alt={activeConversation.name} size="sm" online={activeConversation.online} /><div><strong>{activeConversation.name}</strong><span>{activeConversation.online ? "Online now · likely to reply" : "Last seen recently"}</span></div><button className="icon-button thread-more" onClick={() => toast("Thread options", { description: "Mute and pin controls are coming soon." })} aria-label="Thread options"><MoreHorizontal size={18} /></button></header><div className="message-thread"><div className="thread-date">Today · Bengaluru</div>{messages.length ? messages.map((message) => <div className={`message-bubble ${message.from === "me" ? "is-mine" : ""}`} key={message.id}><p>{message.text}</p><time>{message.time}</time></div>) : <div className="empty-thread"><Sparkles size={18} /><strong>Start the conversation</strong><span>Say hello, share a thought, or send a chai break plan.</span></div>}{isTyping && <div className="typing-note"><span></span><span></span><span></span>{activeConversation.name} is readying a reply</div>}</div><div className="quick-replies">{suggestions.map((suggestion) => <button key={suggestion} type="button" onClick={() => quickReply(suggestion)}>{suggestion}</button>)}</div><form className="reply-area" onSubmit={(event) => { event.preventDefault(); submit(); }}><input value={draft} onChange={(event) => { setDraft(event.target.value); setIsTyping(Boolean(event.target.value)); }} placeholder="Write a reply..." aria-label="Write a reply" /><button type="button" className="reply-tool" onClick={() => toast("Attach a moment", { description: "Image and file sharing will be connected to storage next." })} aria-label="Attach"><Paperclip size={17} /></button><button type="button" className="reply-tool" onClick={() => quickReply("☕")} aria-label="Add reaction"><Smile size={17} /></button><button className="send-button" aria-label="Send reply"><Send size={16} /></button></form></section>;
}
