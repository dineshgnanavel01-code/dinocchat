// Warm Editorial Community: post state remains lightweight and immediate, like adding a note to a shared table.

import { createContext, useContext, useMemo, useState } from "react";
import { currentUser, posts as seedPosts } from "../data/mockData";

const PostContext = createContext(null);

export function PostProvider({ children }) {
  const [posts, setPosts] = useState(seedPosts);
  const [following, setFollowing] = useState([]);

  const toggleLike = (postId) => setPosts((items) => items.map((post) => post.id === postId ? { ...post, liked: !post.liked, likes: post.likes + (post.liked ? -1 : 1) } : post));
  const toggleSave = (postId) => setPosts((items) => items.map((post) => post.id === postId ? { ...post, saved: !post.saved } : post));
  const followUser = (userId) => setFollowing((items) => items.includes(userId) ? items.filter((id) => id !== userId) : [...items, userId]);
  const publishPost = (text) => {
    if (!text.trim()) return;
    setPosts((items) => [{ id: `p-${Date.now()}`, author: { name: currentUser.name, handle: currentUser.handle, avatar: currentUser.avatar, initials: currentUser.initials }, time: "Just now", location: "From your journal", text: text.trim(), image: "", likes: 0, comments: 0, shares: 0, liked: false, saved: false, tags: ["notesfromtoday"] }, ...items]);
  };

  const value = useMemo(() => ({ posts, following, toggleLike, toggleSave, followUser, publishPost }), [posts, following]);
  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}

export function usePosts() {
  const value = useContext(PostContext);
  if (!value) throw new Error("usePosts must be used inside PostProvider");
  return value;
}
