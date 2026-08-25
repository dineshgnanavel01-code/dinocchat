// Warm Editorial Community: posts are reading objects first and social objects second, using clear metadata, varied paper rhythms, and calm actions.

import { Bookmark, Heart, MessageCircle, MoreHorizontal, Share2 } from "lucide-react";
import { toast } from "sonner";
import { usePosts } from "../context/PostContext";
import { Avatar } from "./Avatar";

const fallbackImage = "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80";

export default function PostCard({ post, onOpenComments }) {
  const { toggleLike, toggleSave } = usePosts();
  const isQuote = post.id === "p1";
  const isNote = !post.image;
  const postClass = `post-card ${isQuote ? "post-quote" : ""} ${isNote ? "post-note" : "post-photo"}`;
  return <article className={postClass}><div className="post-header"><Avatar src={post.author.avatar} initials={post.author.initials} alt={post.author.name} size="md" /><div className="post-byline"><strong>{post.author.name}</strong><span>@{post.author.handle} <i>·</i> {post.time}</span></div><button className="icon-button more-button" aria-label={`More options for ${post.author.name}`} onClick={() => toast("More options are coming soon")}><MoreHorizontal size={18} /></button></div>{isQuote && <div className="quote-mark" aria-hidden="true">“</div>}<p className="post-copy">{post.text}</p>{post.image && <figure className="post-figure"><img className="post-image" src={post.image} alt={`${post.author.name}'s note from ${post.location}`} onError={(event) => { event.currentTarget.src = fallbackImage; }} /><figcaption><span>Field note · {post.location}</span><span>#{post.tags[0]}</span></figcaption></figure>}{!post.image && <div className="note-caption"><span>From the journal · {post.location}</span><span>#{post.tags[0]}</span></div>}<div className="post-location"><span className="location-pin">⌖</span>{post.location}<span className="post-tag">#{post.tags[0]}</span></div><div className="post-actions"><div className="post-action-group"><button className={`post-action ${post.liked ? "is-liked" : ""}`} onClick={() => toggleLike(post.id)} aria-label={post.liked ? "Unlike note" : "Like note"}><Heart size={18} fill={post.liked ? "currentColor" : "none"} /><span>{post.likes}</span></button><button className="post-action" onClick={() => onOpenComments ? onOpenComments(post) : toast("Comments are coming soon", { description: "The conversation starts here." })} aria-label="View comments"><MessageCircle size={18} /><span>{post.comments}</span></button><button className="post-action" onClick={() => toast("Share sheet is coming soon")} aria-label="Share note"><Share2 size={17} /><span>{post.shares}</span></button></div><button className={`save-button ${post.saved ? "is-saved" : ""}`} onClick={() => toggleSave(post.id)} aria-label={post.saved ? "Remove from saved" : "Save note"}><Bookmark size={18} fill={post.saved ? "currentColor" : "none"} /></button></div></article>;
}
