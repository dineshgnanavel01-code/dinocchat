// Warm Editorial Community: the composer should feel like opening a fresh page—low pressure, specific prompts, and a clear terracotta action.

import { ImagePlus, MapPin, Send, Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useAuth } from "../context/AuthContext";
import { usePosts } from "../context/PostContext";
import { Avatar } from "./Navbar";

export default function CreatePost() {
  const { user } = useAuth();
  const { publishPost } = usePosts();
  const [draft, setDraft] = useState("");
  const submit = () => { if (!draft.trim()) { toast("Start with a sentence", { description: "What caught your eye today?" }); return; } publishPost(draft); setDraft(""); toast("Note shared", { description: "Your small wonder is now part of the commonplace." }); };
  return <section className="composer-card" aria-labelledby="composer-heading"><div className="composer-top"><Avatar src={user.avatar} initials={user.initials} alt={user.name} size="md" /><div><span className="eyebrow">A blank space</span><h2 id="composer-heading">What are you noticing?</h2></div></div><textarea value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="A thought, a view, a question worth carrying..." rows={3} aria-label="Write a new note" /><div className="composer-bottom"><div className="composer-tools"><button className="tool-button" onClick={() => toast("Photo picker is coming soon", { description: "For now, let the words lead." })}><ImagePlus size={17} /><span>Photo</span></button><button className="tool-button" onClick={() => toast("Location is coming soon", { description: "Your note can stay right where it is." })}><MapPin size={17} /><span>Place</span></button><button className="tool-button" onClick={() => setDraft("Today I’m making room for ")}><Sparkles size={17} /><span>Prompt</span></button></div><button className="primary-button compose-submit" onClick={submit}><Send size={15} /> Share note</button></div></section>;
}
