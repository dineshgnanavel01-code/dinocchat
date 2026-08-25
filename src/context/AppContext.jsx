import {
  createContext,
  useContext,
  useState,
} from "react";

import {
  initialPosts,
  initialConversations,
  initialNotifications,
} from "../data/mockData";

const AppContext = createContext(null);

/* =========================
   LOCAL STORAGE
========================= */

const load = (key, fallback) => {
  try {
    const saved = localStorage.getItem(key);

    return saved
      ? JSON.parse(saved)
      : fallback;
  } catch {
    return fallback;
  }
};

const save = (key, value) => {
  try {
    localStorage.setItem(
      key,
      JSON.stringify(value)
    );
  } catch (error) {
    console.error(
      "Failed to save data:",
      error
    );
  }
};

/* =========================
   PROVIDER
========================= */

export function AppProvider({ children }) {
  const [posts, setPosts] = useState(() =>
    load("dinocPosts", initialPosts)
  );

  const [conversations, setConversations] =
    useState(() =>
      load(
        "dinocChats",
        initialConversations
      )
    );

  const [notifications, setNotifications] =
    useState(() =>
      load(
        "dinocNotifications",
        initialNotifications
      )
    );

  /* =========================
     LIKE
  ========================= */

  const toggleLike = (id) => {
    setPosts((current) => {
      const updated = current.map((post) =>
        post.id === id
          ? {
              ...post,
              liked: !post.liked,
              likes: Math.max(
                0,
                post.likes +
                  (post.liked ? -1 : 1)
              ),
            }
          : post
      );

      save("dinocPosts", updated);

      return updated;
    });
  };

  /* =========================
     ADD POST
  ========================= */

  const addPost = (post) => {
    setPosts((current) => {
      const updated = [
        post,
        ...current,
      ];

      save("dinocPosts", updated);

      return updated;
    });
  };

  /* =========================
     ADD COMMENT
  ========================= */

  const addComment = (
    id,
    text,
    user
  ) => {
    const cleanText = text.trim();

    if (!cleanText) return;

    setPosts((current) => {
      const updated = current.map(
        (post) =>
          post.id === id
            ? {
                ...post,
                comments: [
                  ...(post.comments || []),
                  {
                    id: Date.now(),
                    user,
                    text: cleanText,
                  },
                ],
              }
            : post
      );

      save("dinocPosts", updated);

      return updated;
    });
  };

  /* =========================
     SEND MESSAGE
  ========================= */

  const sendMessage = (
    conversationId,
    text
  ) => {
    const cleanText = text.trim();

    if (!cleanText) return;

    setConversations((current) => {
      const updated = current.map(
        (conversation) =>
          conversation.id ===
          conversationId
            ? {
                ...conversation,
                messages: [
                  ...(conversation.messages ||
                    []),
                  {
                    id: Date.now(),
                    fromMe: true,
                    text: cleanText,
                    time: new Date().toLocaleTimeString(
                      [],
                      {
                        hour: "2-digit",
                        minute: "2-digit",
                      }
                    ),
                  },
                ],
              }
            : conversation
      );

      save("dinocChats", updated);

      return updated;
    });
  };

  /* =========================
     NOTIFICATIONS
  ========================= */

  const markNotifications = () => {
    setNotifications((current) => {
      const updated = current.map(
        (notification) => ({
          ...notification,
          read: true,
        })
      );

      save(
        "dinocNotifications",
        updated
      );

      return updated;
    });
  };

  return (
    <AppContext.Provider
      value={{
        posts,
        setPosts,
        addPost,
        toggleLike,
        addComment,

        conversations,
        sendMessage,

        notifications,
        markNotifications,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

/* =========================
   USE APP
========================= */

export function useApp() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(
      "useApp must be used inside AppProvider."
    );
  }

  return context;
}