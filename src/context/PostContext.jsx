// Dinoc India Edition: the feed keeps social actions immediate, local, and easy to understand.

import { createContext, useContext, useMemo, useState } from "react";
import { currentUser, posts as seedPosts } from "../data/mockData";

const PostContext = createContext(null);

const seedComments = {
  p1: [{ id: "c1", name: "Meera Rao", initials: "MR", text: "This is exactly how Bengaluru feels before the day begins." }],
  p2: [{ id: "c2", name: "Aarav Menon", initials: "AM", text: "The good pen advice is very real." }],
  p3: [{ id: "c3", name: "Ishita Kapoor", initials: "IK", text: "Keeping this one for a slow Sunday." }],
  p4: [],
};

export function PostProvider({ children }) {
  const [posts, setPosts] = useState(seedPosts);
  const [following, setFollowing] = useState([]);
  const [commentsByPost, setCommentsByPost] = useState(seedComments);

  const toggleLike = (postId) => setPosts((items) => items.map((post) => post.id === postId ? { ...post, liked: !post.liked, likes: post.likes + (post.liked ? -1 : 1) } : post));
  const toggleSave = (postId) => setPosts((items) => items.map((post) => post.id === postId ? { ...post, saved: !post.saved } : post));
  const sharePost = (postId) => {
    setPosts((items) => items.map((post) => post.id === postId ? { ...post, shares: post.shares + 1 } : post));
    return true;
  };
  const followUser = (userId) => setFollowing((items) => items.includes(userId) ? items.filter((id) => id !== userId) : [...items, userId]);
  const publishPost = (text, options = {}) => {
    if (!text.trim()) return null;
    const post = { id: `p-${Date.now()}`, kind: options.kind || "note", author: { name: currentUser.name, handle: currentUser.handle, avatar: currentUser.avatar, initials: currentUser.initials }, time: "Just now", location: options.location || currentUser.location, text: text.trim(), image: options.image || "", likes: 0, comments: 0, shares: 0, liked: false, saved: false, tags: options.tags || ["dinocnotes"] };
    setPosts((items) => [post, ...items]);
    setCommentsByPost((items) => ({ ...items, [post.id]: [] }));
    return post;
  };
  const addComment = (postId, text) => {
    const value = text.trim();
    if (!value) return;
    setCommentsByPost((items) => ({ ...items, [postId]: [...(items[postId] || []), { id: `comment-${Date.now()}`, name: currentUser.name, initials: currentUser.initials, text: value }] }));
    setPosts((items) => items.map((post) => post.id === postId ? { ...post, comments: post.comments + 1 } : post));
  };

  const value = useMemo(() => ({ posts, following, commentsByPost, toggleLike, toggleSave, sharePost, followUser, publishPost, addComment }), [posts, following, commentsByPost]);
  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}

export function usePosts() {
  const value = useContext(PostContext);
  if (!value) throw new Error("usePosts must be used inside PostProvider");
  return value;
}
