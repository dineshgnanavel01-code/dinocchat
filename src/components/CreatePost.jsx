// Dinoc India Edition: the composer makes sharing a city moment feel quick, specific, and low pressure.

import { ImagePlus, MapPin, Send, Sparkles, Tag } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useAuth } from "../context/AuthContext";
import { usePosts } from "../context/PostContext";
import { Avatar } from "./Navbar";

const prompts = ["Today I’m making room for ", "A small thing I noticed: ", "The best part of my commute was ", "One idea I’m carrying today: "];

export default function CreatePost() {
  const { user } = useAuth();
  const { publishPost } = usePosts();
  const [draft, setDraft] = useState("");
  const [kind, setKind] = useState("note");
  const [location, setLocation] = useState(user.location || "Bengaluru, India");
  const [promptIndex, setPromptIndex] = useState(0);
  const submit = (event) => {
    event.preventDefault();
    if (!draft.trim()) { toast("Start with a sentence", { description: "What caught your eye today?" }); return; }
    publishPost(draft, { kind, location, tags: [kind === "quote" ? "thoughtoftheday" : "dinocnotes", location.split(",")[0].toLowerCase().replace(/\s+/g, "")] });
    setDraft("");
    toast("Note shared", { description: "Your moment is now part of the Dinoc city feed." });
  };
  const cyclePrompt = () => { const next = (promptIndex + 1) % prompts.length; setPromptIndex(next); setDraft(prompts[next]); };
  return <form className="composer-card" onSubmit={submit} aria-labelledby="composer-heading"><div className="composer-top"><Avatar src={user.avatar} initials={user.initials} alt={user.name} size="md" /><div><span className="eyebrow">A blank space · {kind}</span><h2 id="composer-heading">What are you noticing?</h2></div></div><textarea value={draft} onChange={(event) => setDraft(event.target.value.slice(0, 280))} placeholder="A thought, a view, a question worth carrying..." rows={3} aria-label="Write a new note" /><div className="composer-meta"><span>{draft.length}/280</span><button type="button" onClick={() => setLocation(location === "Bengaluru, India" ? "Your current corner" : "Bengaluru, India")}><MapPin size={13} /> {location}</button></div><div className="composer-bottom"><div className="composer-tools"><button type="button" className={`tool-button ${kind === "photo" ? "is-active" : ""}`} onClick={() => setKind("photo")}><ImagePlus size={17} /><span>Photo note</span></button><button type="button" className="tool-button" onClick={() => setLocation(location === "Bengaluru, India" ? "Your current corner" : "Bengaluru, India")}><Tag size={17} /><span>Tag place</span></button><button type="button" className="tool-button" onClick={cyclePrompt}><Sparkles size={17} /><span>Prompt</span></button></div><button className="primary-button compose-submit" type="submit"><Send size={15} /> Share note</button></div></form>;
}
