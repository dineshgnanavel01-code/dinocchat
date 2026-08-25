// Dinoc India Edition: the home page is a lively social adda for city notes, stories, and easy-to-scan conversations.

import { ArrowUpRight, Filter, Flame, SlidersHorizontal, Sparkles, Users } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import CreatePost from "../components/CreatePost";
import PostCard from "../components/PostCard";
import RightSidebar from "../components/RightSidebar";
import StoryBar from "../components/StoryBar";
import CommentSection from "../components/CommentSection";
import Modal from "../components/Modal";
import { usePosts } from "../context/PostContext";

export default function Home() {
  const { posts, following } = usePosts();
  const [commentPost, setCommentPost] = useState(null);
  const [activeTab, setActiveTab] = useState("For you");
  const [sortMode, setSortMode] = useState("Fresh");
  const visiblePosts = useMemo(() => {
    const filtered = activeTab === "Following" && following.length ? posts.filter((post) => following.includes(post.author.id)) : posts;
    return [...filtered].sort((a, b) => sortMode === "Popular" ? b.likes - a.likes : 0);
  }, [activeTab, following, posts, sortMode]);
  const changeTab = (tab) => {
    setActiveTab(tab);
    if (tab === "Following" && !following.length) toast("Your following feed is ready", { description: "Follow people from the right rail to personalize it." });
  };
  return <div className="page-grid home-grid"><main className="feed-column"><div className="home-kicker"><span><Flame size={14} /> Your daily scroll</span><span className="live-pill"><i></i> Live in your city</span></div><div className="page-intro"><div><span className="eyebrow">Bengaluru · Monday, September 14</span><h1>What’s happening in your corner?</h1><p className="page-subtitle">A little space for the moments, people, and ideas worth passing on.</p></div><button className="icon-button filter-button" onClick={() => toast("Feed preferences", { description: "Your home feed is tuned for thoughtful local posts." })} aria-label="Feed preferences"><SlidersHorizontal size={18} /></button></div><div className="city-strip"><span><Sparkles size={15} /> 1,248 people sharing today</span><span><Users size={15} /> 86 near you</span><button onClick={() => toast("Local circle", { description: "City circles will be available soon." })}>Explore circles <ArrowUpRight size={14} /></button></div><StoryBar /><CreatePost /><div className="feed-toolbar"><div className="feed-tabs">{["For you", "Following", "Latest"].map((tab) => <button key={tab} className={`feed-tab ${activeTab === tab ? "is-active" : ""}`} onClick={() => changeTab(tab)}>{tab}</button>)}</div><button className="sort-button" onClick={() => setSortMode((mode) => mode === "Fresh" ? "Popular" : "Fresh")} aria-label="Change feed sorting">{sortMode} <Filter size={14} /></button></div><div className="feed-context"><strong>{activeTab === "For you" ? "Made for your scroll" : activeTab === "Following" ? "People you chose" : "Fresh from the city"}</strong><span>{visiblePosts.length} posts · tap a reaction to shape your feed</span></div><div className="post-list">{visiblePosts.map((post) => <PostCard key={post.id} post={post} onOpenComments={setCommentPost} />)}</div>{visiblePosts.length === 0 && <div className="empty-note"><Sparkles size={18} /><strong>Your circle is still quiet.</strong><span>Follow a few people and their notes will appear here.</span></div>}</main><RightSidebar /><Modal open={Boolean(commentPost)} onClose={() => setCommentPost(null)} title="Add to the conversation">{commentPost && <CommentSection postId={commentPost.id} />}</Modal></div>;
}
