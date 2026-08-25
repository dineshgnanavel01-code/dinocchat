// Warm Editorial Community: the profile reads like a personal title page—strong identity, measured stats, and a simple archive of notes.

import { Bookmark, Grid2X2, Link as LinkIcon, MapPin, MoreHorizontal, Pencil } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "../context/AuthContext";
import { usePosts } from "../context/PostContext";
import { Avatar } from "../components/Avatar";
import PostCard from "../components/PostCard";

export default function Profile() {
  const { user } = useAuth();
  const { posts } = usePosts();
  const ownPosts = posts.filter((post) => post.author.handle === user.handle);
  return <main className="page-grid single-page-grid"><section className="profile-page"><div className="profile-cover"><div className="cover-shape cover-shape-one" /><div className="cover-shape cover-shape-two" /><button className="cover-menu icon-button" onClick={() => toast("Profile options are coming soon")} aria-label="Profile options"><MoreHorizontal size={19} /></button></div><div className="profile-heading"><Avatar src={user.avatar} initials={user.initials} alt={user.name} size="xl" ring /><div className="profile-actions"><button className="secondary-button" onClick={() => toast("Profile editing is coming soon")}><Pencil size={15} /> Edit profile</button></div></div><div className="profile-copy"><span className="eyebrow">@{user.handle}</span><h1>{user.name}</h1><p>{user.role}. Collecting the ordinary, one note at a time.</p><div className="profile-details"><span><MapPin size={14} />{user.location}</span><span><LinkIcon size={14} /> commonplace.journal</span><span>Joined March 2023</span></div></div><div className="profile-stats"><div><strong>{user.following}</strong><span>Following</span></div><div><strong>{user.followers.toLocaleString()}</strong><span>Followers</span></div><div><strong>{ownPosts.length}</strong><span>Notes</span></div></div><div className="profile-tabs"><button className="profile-tab is-active"><Grid2X2 size={16} /> Notes</button><button className="profile-tab" onClick={() => toast("Saved notes are coming soon")}><Bookmark size={16} /> Saved</button></div><div className="profile-posts">{ownPosts.length ? ownPosts.map((post) => <PostCard key={post.id} post={post} />) : <div className="empty-note"><p>No notes yet.</p><span>Share a small wonder to begin your archive.</span></div>}</div></section></main>;
}
