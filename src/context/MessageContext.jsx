// Dinoc India Edition: messages behave like a fast, friendly neighborhood inbox with local client-side state.

import { createContext, useContext, useMemo, useState } from "react";
import { conversations as seedConversations, messagesByConversation } from "../data/mockData";

const MessageContext = createContext(null);

export function MessageProvider({ children }) {
  const [conversationItems, setConversationItems] = useState(seedConversations);
  const [activeConversationId, setActiveConversationId] = useState(seedConversations[0].id);
  const [threads, setThreads] = useState(messagesByConversation);
  const activeConversation = conversationItems.find((item) => item.id === activeConversationId) || conversationItems[0];
  const messages = threads[activeConversationId] || [];
  const unreadTotal = conversationItems.reduce((total, item) => total + item.unread, 0);

  const selectConversation = (id) => {
    setActiveConversationId(id);
    setConversationItems((items) => items.map((item) => item.id === id ? { ...item, unread: 0 } : item));
  };

  const sendMessage = (text) => {
    const value = text.trim();
    if (!value || !activeConversationId) return;
    setThreads((current) => ({
      ...current,
      [activeConversationId]: [...(current[activeConversationId] || []), { id: `m-${Date.now()}`, from: "me", text: value, time: "Now" }],
    }));
    setConversationItems((items) => items.map((item) => item.id === activeConversationId ? { ...item, preview: value, time: "Now" } : item));
  };

  const startConversation = (person) => {
    const exists = conversationItems.find((item) => item.name === person.name);
    if (exists) {
      selectConversation(exists.id);
      return exists.id;
    }
    const id = `c-${Date.now()}`;
    const conversation = { ...person, id, preview: "Start a new conversation", time: "Now", unread: 0, online: true };
    setConversationItems((items) => [conversation, ...items]);
    setThreads((current) => ({ ...current, [id]: [] }));
    setActiveConversationId(id);
    return id;
  };

  const value = useMemo(() => ({
    conversations: conversationItems,
    activeConversationId,
    setActiveConversationId: selectConversation,
    selectConversation,
    activeConversation,
    messages,
    sendMessage,
    startConversation,
    unreadTotal,
  }), [conversationItems, activeConversationId, activeConversation, messages, unreadTotal]);

  return <MessageContext.Provider value={value}>{children}</MessageContext.Provider>;
}

export function useMessages() {
  const value = useContext(MessageContext);
  if (!value) throw new Error("useMessages must be used inside MessageProvider");
  return value;
}
