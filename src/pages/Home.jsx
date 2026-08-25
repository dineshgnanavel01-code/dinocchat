// Warm Editorial Community: Home is the reading room—an asymmetric editorial column with a small margin of prompts and people.

import { Filter, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import CreatePost from "../components/CreatePost";
import PostCard from "../components/PostCard";
import RightSidebar from "../components/RightSidebar";
import StoryBar from "../components/StoryBar";
import CommentSection from "../components/CommentSection";
import Modal from "../components/Modal";
import { usePosts } from "../context/PostContext";

export default function Home() {
  const { posts } = usePosts();
  const [commentPost, setCommentPost] = useState(null);
  return <div className="page-grid home-grid"><main className="feed-column"><div className="page-intro"><div><span className="eyebrow">Monday · September 14, 2026</span><h1>Make room for what caught your eye.</h1></div><button className="icon-button filter-button" onClick={() => toast("Feed preferences are coming soon")} aria-label="Feed preferences"><SlidersHorizontal size={18} /></button></div><StoryBar /><CreatePost /><div className="feed-toolbar"><div className="feed-tabs"><button className="feed-tab is-active">For you</button><button className="feed-tab" onClick={() => toast("Following feed is coming soon")}>Following</button><button className="feed-tab" onClick={() => toast("Latest feed is coming soon")}>Latest</button></div><button className="sort-button" onClick={() => toast("Feed sorted by thoughtful")}>Thoughtful <Filter size={14} /></button></div><div className="post-list">{posts.map((post) => <PostCard key={post.id} post={post} onOpenComments={setCommentPost} />)}</div></main><RightSidebar /><Modal open={Boolean(commentPost)} onClose={() => setCommentPost(null)} title="Add to the conversation">{commentPost && <CommentSection postId={commentPost.id} />}</Modal></div>;
}
