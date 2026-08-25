import { jsx as _jsx } from "react/jsx-runtime";
// Warm Editorial Community: keep interactions immediate, human, and quiet; state changes should feel like placing a note on a shared table.
import { createContext, useContext, useMemo, useState } from "react";
import { currentUser, posts as seedPosts } from "../data/mockData";
const AppContext = createContext(null);
export function AppProvider({ children }) {
    const [posts, setPosts] = useState(seedPosts);
    const [activeNav, setActiveNav] = useState("home");
    const [following, setFollowing] = useState([]);
    const [composerDraft, setComposerDraft] = useState("");
    const [unreadCount, setUnreadCount] = useState(2);
    const toggleLike = (postId) => {
        setPosts((current) => current.map((post) => post.id === postId
            ? { ...post, liked: !post.liked, likes: post.likes + (post.liked ? -1 : 1) }
            : post));
    };
    const toggleSave = (postId) => {
        setPosts((current) => current.map((post) => post.id === postId ? { ...post, saved: !post.saved } : post));
    };
    const followUser = (userId) => {
        setFollowing((current) => current.includes(userId) ? current.filter((id) => id !== userId) : [...current, userId]);
    };
    const publishPost = (text) => {
        const trimmed = text.trim();
        if (!trimmed)
            return;
        const newPost = {
            id: `p-${Date.now()}`,
            author: { name: currentUser.name, handle: currentUser.handle, avatar: currentUser.avatar, initials: currentUser.initials },
            time: "Just now",
            location: "From your journal",
            text: trimmed,
            image: "",
            likes: 0,
            comments: 0,
            shares: 0,
            liked: false,
            saved: false,
            tags: ["notesfromtoday"],
        };
        setPosts((current) => [newPost, ...current]);
        setComposerDraft("");
    };
    const markNotificationsRead = () => setUnreadCount(0);
    const value = useMemo(() => ({ currentUser, posts, activeNav, setActiveNav, toggleLike, toggleSave, followUser, following, publishPost, composerDraft, setComposerDraft, unreadCount, markNotificationsRead }), [posts, activeNav, following, composerDraft, unreadCount]);
    return _jsx(AppContext.Provider, { value: value, children: children });
}
export function useApp() {
    const context = useContext(AppContext);
    if (!context)
        throw new Error("useApp must be used inside AppProvider");
    return context;
}
