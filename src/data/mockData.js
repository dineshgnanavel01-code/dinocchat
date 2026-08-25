// Dinoc India Edition: familiar city rituals, local textures, and warm community moments power the frontend-only experience.
export const currentUser = {
  id: "u0",
  name: "Dinoc",
  handle: "dinoc",
  role: "City walker & curious maker",
  avatar: "https://i.pravatar.cc/160?img=12",
  initials: "DC",
  location: "Bengaluru, India",
  following: 248,
  followers: 1840,
};

export const stories = [
  { id: "s0", name: "Your story", avatar: currentUser.avatar, initials: "DC", isOwn: true, hasNew: false, image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=500&q=80", caption: "A quiet morning in Bengaluru" },
  { id: "s1", name: "Aarav", avatar: "https://i.pravatar.cc/160?img=11", initials: "AR", hasNew: true, image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=500&q=80", caption: "Filter coffee, first thought" },
  { id: "s2", name: "Meera", avatar: "https://i.pravatar.cc/160?img=47", initials: "MR", hasNew: true, image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=500&q=80", caption: "The long way home" },
  { id: "s3", name: "Kabir", avatar: "https://i.pravatar.cc/160?img=68", initials: "KB", hasNew: true, image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=500&q=80", caption: "Monsoon is thinking" },
  { id: "s4", name: "Ishita", avatar: "https://i.pravatar.cc/160?img=5", initials: "IS", hasNew: false, image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=500&q=80", caption: "A corner with good light" },
  { id: "s5", name: "Rohan", avatar: "https://i.pravatar.cc/160?img=13", initials: "RH", hasNew: false, image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=500&q=80", caption: "Sunday market notes" },
];

export const posts = [
  {
    id: "p1",
    kind: "photo",
    author: { name: "Aarav Menon", handle: "aaravm", avatar: "https://i.pravatar.cc/160?img=11", initials: "AM" },
    time: "18 min",
    location: "Indiranagar, Bengaluru",
    text: "The city feels different before the shops open. Just shutters, birds, and one tea stall already doing a brisk trade.",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=85",
    likes: 184,
    comments: 18,
    shares: 7,
    liked: false,
    saved: false,
    tags: ["citybeforecoffee", "bengaluru"],
  },
  {
    id: "p2",
    kind: "note",
    author: { name: "Dinoc", handle: "dinoc", avatar: currentUser.avatar, initials: "DC" },
    time: "2 hr",
    location: "Koramangala, Bengaluru",
    text: "Three things I am carrying into this week: leave a little white space, ask better questions, and keep the good pen nearby.",
    image: "",
    likes: 96,
    comments: 12,
    shares: 3,
    liked: true,
    saved: true,
    tags: ["notesfromtoday", "slowdays"],
  },
  {
    id: "p3",
    kind: "quote",
    author: { name: "Meera Rao", handle: "meeramakes", avatar: "https://i.pravatar.cc/160?img=47", initials: "MR" },
    time: "Yesterday",
    location: "Fort Kochi",
    text: "Maybe a good life is just a collection of ordinary afternoons that felt like enough.",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",
    likes: 312,
    comments: 31,
    shares: 22,
    liked: false,
    saved: false,
    tags: ["littlejoys", "sundaythoughts"],
  },
  {
    id: "p4",
    kind: "photo",
    author: { name: "Kabir Shah", handle: "kabirwalks", avatar: "https://i.pravatar.cc/160?img=68", initials: "KS" },
    time: "Yesterday",
    location: "Bandra West, Mumbai",
    text: "A five-minute pause between two very loud parts of the day. I am keeping it.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85",
    likes: 72,
    comments: 9,
    shares: 5,
    liked: false,
    saved: false,
    tags: ["pausenote", "mumbai"],
  },
];

export const peopleToFollow = [
  { id: "u1", name: "Ishita Kapoor", handle: "ishitak", role: "Ceramicist & host", avatar: "https://i.pravatar.cc/160?img=5", initials: "IK" },
  { id: "u2", name: "Rohan Das", handle: "rohannotes", role: "Food, books, long walks", avatar: "https://i.pravatar.cc/160?img=13", initials: "RD" },
  { id: "u3", name: "Ananya Bose", handle: "ananyab", role: "Making room for light", avatar: "https://i.pravatar.cc/160?img=32", initials: "AB" },
];

export const trendingTopics = [
  { label: "chai break thoughts", count: "2.4k posts" },
  { label: "monsoon in the city", count: "1.7k posts" },
  { label: "what I’m learning", count: "986 posts" },
  { label: "small business stories", count: "641 posts" },
];

export const conversations = [
  { id: "c1", name: "Aarav Menon", handle: "aaravm", avatar: "https://i.pravatar.cc/160?img=11", initials: "AM", preview: "That chai place near 12th Main?", time: "9:42 AM", unread: 2, online: true },
  { id: "c2", name: "Meera Rao", handle: "meeramakes", avatar: "https://i.pravatar.cc/160?img=47", initials: "MR", preview: "I found the book you mentioned.", time: "Yesterday", unread: 0, online: false },
  { id: "c3", name: "Kabir Shah", handle: "kabirwalks", avatar: "https://i.pravatar.cc/160?img=68", initials: "KS", preview: "Would love your take on this.", time: "Mon", unread: 0, online: true },
  { id: "c4", name: "Ishita Kapoor", handle: "ishitak", avatar: "https://i.pravatar.cc/160?img=5", initials: "IK", preview: "Sending you the studio address.", time: "Sun", unread: 0, online: false },
];

export const messagesByConversation = {
  c1: [
    { id: "m1", from: "them", text: "Your note from this morning stayed with me.", time: "9:35 AM" },
    { id: "m2", from: "me", text: "The one about leaving a little white space?", time: "9:38 AM" },
    { id: "m3", from: "them", text: "That chai place near 12th Main? I think you would love the back table.", time: "9:42 AM" },
  ],
  c2: [{ id: "m4", from: "them", text: "I found the book you mentioned. It has the best margins.", time: "Yesterday" }],
  c3: [{ id: "m5", from: "them", text: "Would love your take on this when you have a minute.", time: "Mon" }],
  c4: [{ id: "m6", from: "them", text: "Sending you the studio address. Come by whenever you are nearby.", time: "Sun" }],
};

export const notifications = [
  { id: "n1", type: "like", actor: { name: "Meera Rao", avatar: "https://i.pravatar.cc/160?img=47", initials: "MR" }, text: "liked your note about keeping the good pen nearby.", time: "12 min", unread: true },
  { id: "n2", type: "follow", actor: { name: "Ishita Kapoor", avatar: "https://i.pravatar.cc/160?img=5", initials: "IK" }, text: "started following you.", time: "1 hr", unread: true },
  { id: "n3", type: "comment", actor: { name: "Aarav Menon", avatar: "https://i.pravatar.cc/160?img=11", initials: "AM" }, text: "commented: “This feels like a good Sunday.”", time: "3 hr", unread: false },
  { id: "n4", type: "like", actor: { name: "Kabir Shah", avatar: "https://i.pravatar.cc/160?img=68", initials: "KS" }, text: "liked your note about the city details.", time: "Yesterday", unread: false },
];

export const profilePosts = posts.filter((post) => post.author.handle === currentUser.handle);
