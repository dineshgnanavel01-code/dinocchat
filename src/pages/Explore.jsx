// Dinoc India Edition: Explore is the city noticeboard for finding people, places, and threads worth following.

import { Compass, Search, TrendingUp } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { usePosts } from "../context/PostContext";
import PostCard from "../components/PostCard";
import { trendingTopics } from "../data/mockData";

export default function Explore() {
  const { posts } = usePosts();
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("All");
  const filteredPosts = useMemo(() => posts.filter((post) => {
    const haystack = `${post.text} ${post.location} ${post.author.name} ${post.tags.join(" ")}`.toLowerCase();
    const matchesQuery = !query.trim() || haystack.includes(query.toLowerCase());
    const matchesTopic = topic === "All" || haystack.includes(topic.toLowerCase());
    return matchesQuery && matchesTopic;
  }), [posts, query, topic]);
  return <main className="page-grid single-page-grid"><section className="narrow-page explore-page"><div className="page-intro"><div><span className="eyebrow">Look around · India</span><h1>Explore</h1><p className="page-subtitle">Find the people, places, and everyday ideas making your city feel more alive.</p></div><button className="icon-button" onClick={() => setQuery("")} aria-label="Clear explore search"><Search size={18} /></button></div><div className="explore-search"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search Bengaluru, chai, walks..." aria-label="Search explore" /></div><div className="explore-banner"><Compass size={22} /><div><span className="eyebrow">A wider Dinoc</span><h2>Find a thread worth following.</h2><p>Browse city notes by mood, place, and the little questions that stay with you.</p></div></div><div className="explore-tags"><button className={topic === "All" ? "is-active" : ""} onClick={() => setTopic("All")}>All posts</button>{trendingTopics.slice(0, 3).map((item) => <button key={item.label} className={topic === item.label ? "is-active" : ""} onClick={() => setTopic(item.label)}>{item.label}</button>)}</div><div className="explore-results"><span><TrendingUp size={14} /> {filteredPosts.length} notes found</span><button onClick={() => toast("Discovery is live", { description: "Search, topic chips, and post actions are all active." })}>How it works</button></div><div className="post-list">{filteredPosts.map((post) => <PostCard key={post.id} post={post} />)}</div>{!filteredPosts.length && <div className="empty-note"><strong>No note found yet.</strong><span>Try “Bengaluru”, “chai”, or “monsoon”.</span></div>}</section></main>;
}
