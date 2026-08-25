// Dinoc India Edition: comments feel like a small, friendly conversation around one shared post.

import { Send } from "lucide-react";
import { useState } from "react";
import { usePosts } from "../context/PostContext";
import { Avatar } from "./Navbar";

export default function CommentSection({ postId }) {
  const { commentsByPost, addComment } = usePosts();
  const [draft, setDraft] = useState("");
  const comments = commentsByPost[postId] || [];
  const submit = (event) => { event.preventDefault(); if (!draft.trim()) return; addComment(postId, draft); setDraft(""); };
  return <section className="comment-section" aria-label="Comments"><div className="comment-heading"><span className="eyebrow">The conversation</span><span>{comments.length} notes</span></div><div className="comment-list">{comments.length ? comments.map((comment) => <div className="comment-row" key={comment.id}><Avatar src={comment.avatar} initials={comment.initials} alt={comment.name} size="sm" /><div><strong>{comment.name}</strong><p>{comment.text}</p></div></div>) : <div className="empty-note"><span>No replies yet.</span><strong>Be the first to add a little warmth.</strong></div>}</div><form className="comment-input" onSubmit={submit}><input value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="Add a thoughtful reply..." aria-label="Add a comment" /><button type="submit" aria-label="Send comment"><Send size={15} /></button></form></section>;
}
