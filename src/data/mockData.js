// Warm Editorial Community: the feed is treated like a living journal, with quiet metadata, generous breathing room, and terracotta moments.
export const currentUser = {
    id: "u0",
    name: "Dinoc",
    handle: "dinoc",
    role: "Builder & collector of small wonders",
    avatar: "https://i.pravatar.cc/160?img=12",
    initials: "DC",
    location: "Portland, OR",
    following: 248,
    followers: 1840,
};
export const stories = [
    { id: "s0", name: "Your story", avatar: currentUser.avatar, initials: "DC", isOwn: true, hasNew: false, image: "/manus-storage/commonplace-studio-corner_f544829e.jpg" },
    { id: "s1", name: "Noor A.", avatar: "https://i.pravatar.cc/160?img=32", initials: "NA", hasNew: true, image: "/manus-storage/commonplace-coastal-walk_37abc409.jpg" },
    { id: "s2", name: "Theo Kim", avatar: "https://i.pravatar.cc/160?img=12", initials: "TK", hasNew: true, image: "/manus-storage/commonplace-linen-table_1d0b11fe.jpg" },
    { id: "s3", name: "June Park", avatar: "https://i.pravatar.cc/160?img=5", initials: "JP", hasNew: true, image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=500&q=80" },
    { id: "s4", name: "Andre Moss", avatar: "https://i.pravatar.cc/160?img=68", initials: "AM", hasNew: false, image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=500&q=80" },
    { id: "s5", name: "Lena Ortiz", avatar: "https://i.pravatar.cc/160?img=44", initials: "LO", hasNew: false, image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=500&q=80" },
];
export const posts = [
    {
        id: "p1",
        author: { name: "Noor Adebayo", handle: "noor.notes", avatar: "https://i.pravatar.cc/160?img=32", initials: "NA" },
        time: "24 min",
        location: "Forest Park",
        text: "A reminder that a good walk does not have to solve anything. Sometimes it only needs to make the next hour feel a little more possible.",
        image: "/manus-storage/commonplace-coastal-walk_37abc409.jpg",
        likes: 184,
        comments: 18,
        shares: 7,
        liked: false,
        saved: false,
        tags: ["slowmornings", "outside"],
    },
    {
        id: "p2",
        author: { name: "Dinoc", handle: "dinoc", avatar: currentUser.avatar, initials: "DC" },
        time: "2 hr",
        location: "At my desk",
        text: "Three things I am carrying into this week: leave a little white space, ask better questions, and keep the good pen nearby.",
        image: "/manus-storage/commonplace-linen-table_1d0b11fe.jpg",
        likes: 96,
        comments: 12,
        shares: 3,
        liked: true,
        saved: true,
        tags: ["notesfromtoday"],
    },
    {
        id: "p3",
        author: { name: "Theo Kim", handle: "theokim", avatar: "https://i.pravatar.cc/160?img=12", initials: "TK" },
        time: "Yesterday",
        location: "North Williams",
        text: "Found this little corner of the city making a strong case for staying out five minutes longer.",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
        likes: 72,
        comments: 9,
        shares: 5,
        liked: false,
        saved: false,
        tags: ["citydetails"],
    },
];
export const peopleToFollow = [
    { id: "u1", name: "Lena Ortiz", handle: "lenaortiz", role: "Ceramicist & host", avatar: "https://i.pravatar.cc/160?img=44", initials: "LO" },
    { id: "u2", name: "June Park", handle: "junepm", role: "Food, books, long walks", avatar: "https://i.pravatar.cc/160?img=5", initials: "JP" },
    { id: "u3", name: "Andre Moss", handle: "andremoss", role: "Making room for light", avatar: "https://i.pravatar.cc/160?img=68", initials: "AM" },
];
export const trendingTopics = [
    { label: "small wonders", count: "1.8k notes" },
    { label: "outside / inside", count: "942 notes" },
    { label: "what I’m learning", count: "617 notes" },
];
export const conversations = [
    { id: "c1", name: "Noor Adebayo", handle: "noor.notes", avatar: "https://i.pravatar.cc/160?img=32", initials: "NA", preview: "That line about the next hour — yes.", time: "9:42 AM", unread: 2, online: true },
    { id: "c2", name: "Theo Kim", handle: "theokim", avatar: "https://i.pravatar.cc/160?img=12", initials: "TK", preview: "I found the book you mentioned.", time: "Yesterday", unread: 0, online: false },
    { id: "c3", name: "June Park", handle: "junepm", avatar: "https://i.pravatar.cc/160?img=5", initials: "JP", preview: "Would love your take on this.", time: "Mon", unread: 0, online: true },
];
export const messagesByConversation = {
    c1: [
        { id: "m1", from: "them", text: "Your note from this morning stayed with me.", time: "9:35 AM" },
        { id: "m2", from: "me", text: "The one about leaving a little white space?", time: "9:38 AM" },
        { id: "m3", from: "them", text: "That line about the next hour — yes. I needed it today.", time: "9:42 AM" },
    ],
    c2: [{ id: "m4", from: "them", text: "I found the book you mentioned. It has the best margins.", time: "Yesterday" }],
    c3: [{ id: "m5", from: "them", text: "Would love your take on this when you have a minute.", time: "Mon" }],
};
export const notifications = [
    { id: "n1", type: "like", actor: { name: "June Park", avatar: "https://i.pravatar.cc/160?img=5", initials: "JP" }, text: "liked your note about keeping the good pen nearby.", time: "12 min", unread: true },
    { id: "n2", type: "follow", actor: { name: "Lena Ortiz", avatar: "https://i.pravatar.cc/160?img=44", initials: "LO" }, text: "started following you.", time: "1 hr", unread: true },
    { id: "n3", type: "comment", actor: { name: "Noor Adebayo", avatar: "https://i.pravatar.cc/160?img=32", initials: "NA" }, text: "commented: “This feels like a deep breath.”", time: "3 hr", unread: false },
    { id: "n4", type: "like", actor: { name: "Andre Moss", avatar: "https://i.pravatar.cc/160?img=68", initials: "AM" }, text: "liked your note about the city details.", time: "Yesterday", unread: false },
];
export const profilePosts = posts.filter((post) => post.author.handle === currentUser.handle);
