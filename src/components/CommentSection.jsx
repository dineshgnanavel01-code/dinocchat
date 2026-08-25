// Warm Editorial Community: comments are small handwritten additions to a note, readable, warm, and never visually overwhelming.

import { Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { currentUser } from "../data/mockData";
import { Avatar } from "./Navbar";

const seedComments = [{ id: "cm1", name: "June Park", avatar: "https://i.pravatar.cc/160?img=5", text: "This feels like a deep breath." }, { id: "cm2", name: "Theo Kim", avatar: "https://i.pravatar.cc/160?img=12", text: "Keeping this one for the next walk." }];

export default function CommentSection({ postId }) {
  const [comments, setComments] = useState(seedComments);
  const [draft, setDraft] = useState("");
  const submit = () => { if (!draft.trim()) return; setComments((items) => [...items, { id: `${postId}-${Date.now()}`, name: currentUser.name, avatar: currentUser.avatar, text: draft.trim() }]); setDraft(""); toast("Comment added"); };
  return <section className="comment-section" aria-label="Comments"><div className="comment-heading"><span className="eyebrow">The conversation</span><span>{comments.length} notes</span></div><div className="comment-list">{comments.map((comment) => <div className="comment-row" key={comment.id}><Avatar src={comment.avatar} initials={comment.name.split(" ").map((part) => part[0]).join("")} alt={comment.name} size="sm" /><p><strong>{comment.name}</strong>{comment.text}</p></div>)}</div><div className="comment-input"><input value={draft} onChange={(event) => setDraft(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter") submit(); }} placeholder="Add a thoughtful reply..." aria-label="Add a comment" /><button onClick={submit} aria-label="Send comment"><Send size={15} /></button></div></section>;
}
