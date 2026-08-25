// Warm Editorial Community: correspondence should feel close and legible, with only the state needed to keep a quiet thread alive.

import { createContext, useContext, useMemo, useState } from "react";
import { conversations, messagesByConversation } from "../data/mockData";

const MessageContext = createContext(null);

export function MessageProvider({ children }) {
  const [activeConversationId, setActiveConversationId] = useState(conversations[0].id);
  const [threads, setThreads] = useState(messagesByConversation);
  const activeConversation = conversations.find((item) => item.id === activeConversationId) || conversations[0];
  const messages = threads[activeConversationId] || [];

  const sendMessage = (text) => {
    const value = text.trim();
    if (!value) return;
    setThreads((current) => ({ ...current, [activeConversationId]: [...(current[activeConversationId] || []), { id: `m-${Date.now()}`, from: "me", text: value, time: "Now" }] }));
  };

  const value = useMemo(() => ({ conversations, activeConversationId, setActiveConversationId, activeConversation, messages, sendMessage }), [activeConversationId, activeConversation, messages]);
  return <MessageContext.Provider value={value}>{children}</MessageContext.Provider>;
}

export function useMessages() {
  const value = useContext(MessageContext);
  if (!value) throw new Error("useMessages must be used inside MessageProvider");
  return value;
}
