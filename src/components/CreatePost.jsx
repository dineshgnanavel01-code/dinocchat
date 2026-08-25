// Dinoc India Edition: the composer makes sharing a city moment feel quick, specific, and low pressure, with a real local image preview.

import { ImagePlus, MapPin, Send, Sparkles, Tag, X } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { useAuth } from "../context/AuthContext";
import { usePosts } from "../context/PostContext";
import { Avatar } from "./Navbar";

const prompts = ["Today I’m making room for ", "A small thing I noticed: ", "The best part of my commute was ", "One idea I’m carrying today: "];
const maxFileSize = 5 * 1024 * 1024;

export default function CreatePost() {
  const { user } = useAuth();
  const { publishPost } = usePosts();
  const fileInputRef = useRef(null);
  const [draft, setDraft] = useState("");
  const [kind, setKind] = useState("note");
  const [location, setLocation] = useState(user.location || "Bengaluru, India");
  const [promptIndex, setPromptIndex] = useState(0);
  const [image, setImage] = useState("");
  const [imageName, setImageName] = useState("");
  const [error, setError] = useState("");

  const handleImage = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setError("Choose an image file to add a photo note.");
      event.target.value = "";
      return;
    }
    if (file.size > maxFileSize) {
      setError("That image is larger than 5 MB. Choose a smaller file.");
      event.target.value = "";
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(String(reader.result));
      setImageName(file.name);
      setKind("photo");
      setError("");
    };
    reader.onerror = () => setError("The image could not be previewed. Try another file.");
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImage("");
    setImageName("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const submit = (event) => {
    event.preventDefault();
    const value = draft.trim();
    if (!value) {
      setError("Start with a sentence before sharing your note.");
      toast("Start with a sentence", { description: "What caught your eye today?" });
      return;
    }
    if (value.length < 3) {
      setError("Add a little more detail so your note has meaning.");
      return;
    }
    publishPost(value, { kind, location, image, tags: [kind === "quote" ? "thoughtoftheday" : "dinocnotes", location.split(",")[0].toLowerCase().replace(/\s+/g, "")] });
    setDraft("");
    removeImage();
    setKind("note");
    setError("");
    toast("Note shared", { description: "Your moment is now part of the Dinoc city feed." });
  };

  const cyclePrompt = () => {
    const next = (promptIndex + 1) % prompts.length;
    setPromptIndex(next);
    setDraft(prompts[next]);
    setError("");
  };

  return <form className="composer-card" onSubmit={submit} aria-labelledby="composer-heading" noValidate>
    <div className="composer-top"><Avatar src={user.avatar} initials={user.initials} alt={user.name} size="md" /><div><span className="eyebrow">A blank space · {kind}</span><h2 id="composer-heading">What are you noticing?</h2></div></div>
    <textarea value={draft} onChange={(event) => { setDraft(event.target.value.slice(0, 280)); setError(""); }} placeholder="A thought, a view, a question worth carrying..." rows={3} aria-label="Write a new note" aria-invalid={Boolean(error)} />
    {image && <div className="composer-preview"><img src={image} alt={imageName ? `Preview of ${imageName}` : "Selected post preview"} /><button type="button" className="preview-remove" onClick={removeImage} aria-label="Remove selected image"><X size={15} /></button><span>{imageName}</span></div>}
    {error && <p className="composer-error" role="alert">{error}</p>}
    <div className="composer-meta"><span>{draft.length}/280</span><button type="button" onClick={() => setLocation(location === "Bengaluru, India" ? "Your current corner" : "Bengaluru, India")}><MapPin size={13} /> {location}</button></div>
    <div className="composer-bottom"><div className="composer-tools"><input ref={fileInputRef} className="sr-only" type="file" accept="image/*" onChange={handleImage} aria-label="Choose an image for your post" /><button type="button" className={`tool-button ${kind === "photo" ? "is-active" : ""}`} onClick={() => fileInputRef.current?.click()}><ImagePlus size={17} /><span>{image ? "Change photo" : "Photo note"}</span></button><button type="button" className="tool-button" onClick={() => setLocation(location === "Bengaluru, India" ? "Your current corner" : "Bengaluru, India")}><Tag size={17} /><span>Tag place</span></button><button type="button" className="tool-button" onClick={cyclePrompt}><Sparkles size={17} /><span>Prompt</span></button></div><button className="primary-button compose-submit" type="submit"><Send size={15} /> Share note</button></div>
  </form>;
}
