// Warm Editorial Community: Explore is the reading table—curated tags, a wider gaze, and no pressure to perform.

import { Compass, Search } from "lucide-react";
import { toast } from "sonner";
import { usePosts } from "../context/PostContext";
import PostCard from "../components/PostCard";

export default function Explore() {
  const { posts } = usePosts();
  return <main className="page-grid single-page-grid"><section className="narrow-page explore-page"><div className="page-intro"><div><span className="eyebrow">Look around</span><h1>Explore</h1></div><button className="icon-button" onClick={() => toast("Explore filters are coming soon")} aria-label="Explore filters"><Search size={18} /></button></div><div className="explore-banner"><Compass size={22} /><div><span className="eyebrow">A wider commonplace</span><h2>Find a thread worth following.</h2><p>Browse notes by mood, place, and the little questions that stay with you.</p></div></div><div className="explore-tags"><button onClick={() => toast("Showing small wonders")}>#smallwonders</button><button onClick={() => toast("Showing walks")}>#outsideinside</button><button onClick={() => toast("Showing things learned")}>#whatimlearning</button></div><div className="post-list">{posts.map((post) => <PostCard key={post.id} post={post} />)}</div></section></main>;
}
