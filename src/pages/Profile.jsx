// Dinoc Instagram Edition: the profile reads like a personal title page—strong identity, measured stats, and a simple archive of notes.

import { Bookmark, Check, Grid2X2, Link as LinkIcon, MapPin, MoreHorizontal, Pencil, X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useAuth } from "../context/AuthContext";
import { usePosts } from "../context/PostContext";
import { Avatar } from "../components/Navbar";
import PostCard from "../components/PostCard";

export default function Profile() {
  const { user, updateProfile } = useAuth();
  const { posts } = usePosts();
  const [activeTab, setActiveTab] = useState("notes");
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [role, setRole] = useState(user.role || "Curious observer");
  const ownPosts = posts.filter((post) => post.author.handle === user.handle || post.author.name === user.name);
  const savedPosts = posts.filter((post) => post.saved);
  const visiblePosts = activeTab === "saved" ? savedPosts : ownPosts;

  const saveProfile = (event) => {
    event.preventDefault();
    const nextName = name.trim();
    if (nextName.length < 2) {
      toast("Add a longer name", { description: "Your profile name needs at least two characters." });
      return;
    }
    updateProfile({ name: nextName, role: role.trim() || "Curious observer" });
    setEditing(false);
    toast("Profile updated", { description: "Your Dinoc identity is saved on this device." });
  };

  const shareProfile = async () => {
    const profileUrl = window.location.href;
    try {
      await navigator.clipboard?.writeText(profileUrl);
      toast("Profile link copied", { description: "Share your Dinoc corner with your people." });
    } catch {
      toast("Profile link ready", { description: profileUrl });
    }
  };

  return <main className="page-grid single-page-grid"><section className="profile-page"><div className="profile-cover"><div className="cover-shape cover-shape-one" /><div className="cover-shape cover-shape-two" /><button className="cover-menu icon-button" onClick={shareProfile} aria-label="Share profile"><MoreHorizontal size={19} /></button></div><div className="profile-heading"><Avatar src={user.avatar} initials={user.initials} alt={user.name} size="xl" ring /><div className="profile-actions"><button className="secondary-button" onClick={() => setEditing((value) => !value)}>{editing ? <X size={15} /> : <Pencil size={15} />} {editing ? "Close editor" : "Edit profile"}</button></div></div>{editing && <form className="profile-edit-card" onSubmit={saveProfile}><label>Display name<input value={name} onChange={(event) => setName(event.target.value)} autoComplete="name" /></label><label>Profile line<input value={role} onChange={(event) => setRole(event.target.value)} maxLength={60} /></label><button className="primary-button" type="submit"><Check size={15} /> Save changes</button></form>}<div className="profile-copy"><span className="eyebrow">@{user.handle}</span><h1>{user.name}</h1><p>{user.role}. Collecting the ordinary, one note at a time.</p><div className="profile-details"><span><MapPin size={14} />{user.location}</span><span><LinkIcon size={14} /> dinoc.social</span><span>Joined March 2023</span></div></div><div className="profile-stats"><div><strong>{user.following}</strong><span>Following</span></div><div><strong>{user.followers.toLocaleString()}</strong><span>Followers</span></div><div><strong>{ownPosts.length}</strong><span>Notes</span></div></div><div className="profile-tabs"><button className={`profile-tab ${activeTab === "notes" ? "is-active" : ""}`} onClick={() => setActiveTab("notes")}><Grid2X2 size={16} /> Notes</button><button className={`profile-tab ${activeTab === "saved" ? "is-active" : ""}`} onClick={() => setActiveTab("saved")}><Bookmark size={16} /> Saved <span>{savedPosts.length}</span></button></div><div className="profile-posts">{visiblePosts.length ? visiblePosts.map((post) => <PostCard key={post.id} post={post} />) : <div className="empty-note"><p>{activeTab === "saved" ? "No saved notes yet." : "No notes yet."}</p><span>{activeTab === "saved" ? "Tap the bookmark on a post to keep it here." : "Share a small wonder to begin your archive."}</span></div>}</div></section></main>;
}
