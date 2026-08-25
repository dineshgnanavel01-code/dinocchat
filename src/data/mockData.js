export const users = [
  {
    id: 1,
    name: "Arjun Kumar",
    username: "arjunkumar",
    email: "arjun@example.com",
    avatar: "https://i.pravatar.cc/150?img=12",
    bio: "Creating moments and sharing ideas ✨",
    followers: 1248,
    following: 356,
  },

  {
    id: 2,
    name: "Priya Sharma",
    username: "priyasharma",
    email: "priya@example.com",
    avatar: "https://i.pravatar.cc/150?img=47",
    bio: "Photography & travel 📸",
    followers: 982,
    following: 241,
  },

  {
    id: 3,
    name: "Rahul Verma",
    username: "rahulverma",
    email: "rahul@example.com",
    avatar: "https://i.pravatar.cc/150?img=11",
    bio: "Developer • Creator • Explorer 💻",
    followers: 754,
    following: 189,
  },

  {
    id: 4,
    name: "Ananya Reddy",
    username: "ananyareddy",
    email: "ananya@example.com",
    avatar: "https://i.pravatar.cc/150?img=32",
    bio: "Life is beautiful 🌸",
    followers: 1530,
    following: 420,
  },

  {
    id: 5,
    name: "Vikram Singh",
    username: "vikramsingh",
    email: "vikram@example.com",
    avatar: "https://i.pravatar.cc/150?img=13",
    bio: "Music • Food • Travel 🎧",
    followers: 621,
    following: 203,
  },

  {
    id: 6,
    name: "Kavya Nair",
    username: "kavyanair",
    email: "kavya@example.com",
    avatar: "https://i.pravatar.cc/150?img=44",
    bio: "Finding beauty everywhere 🌿",
    followers: 1104,
    following: 287,
  },

  {
    id: 7,
    name: "Rohan Mehta",
    username: "rohanmehta",
    email: "rohan@example.com",
    avatar: "https://i.pravatar.cc/150?img=14",
    bio: "Tech enthusiast & coffee lover ☕",
    followers: 845,
    following: 312,
  },

  {
    id: 8,
    name: "Sneha Iyer",
    username: "snehaiyer",
    email: "sneha@example.com",
    avatar: "https://i.pravatar.cc/150?img=25",
    bio: "Designer • Dreamer • Creator 🎨",
    followers: 1320,
    following: 365,
  },

  {
    id: 9,
    name: "Aditya Patel",
    username: "adityapatel",
    email: "aditya@example.com",
    avatar: "https://i.pravatar.cc/150?img=33",
    bio: "Building things that matter 🚀",
    followers: 967,
    following: 278,
  },

  {
    id: 10,
    name: "Meera Krishnan",
    username: "meerakrishnan",
    email: "meera@example.com",
    avatar: "https://i.pravatar.cc/150?img=49",
    bio: "Nature • Books • Good vibes 🌱",
    followers: 1187,
    following: 301,
  },
];


/* =========================
   STORIES
========================= */

export const stories = [
  {
    id: 1,
    username: users[1].username,
    avatar: users[1].avatar,
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 2,
    username: users[2].username,
    avatar: users[2].avatar,
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 3,
    username: users[3].username,
    avatar: users[3].avatar,
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 4,
    username: users[4].username,
    avatar: users[4].avatar,
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 5,
    username: users[5].username,
    avatar: users[5].avatar,
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 6,
    username: users[6].username,
    avatar: users[6].avatar,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 7,
    username: users[7].username,
    avatar: users[7].avatar,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=85",
  },
];


/* =========================
   POSTS
========================= */

export const initialPosts = [
  {
    id: 1,
    user: users[0],
    caption:
      "A peaceful morning with a fresh cup of coffee ☕🌿",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=85",
    likes: 248,
    liked: false,
    createdAt: "2h",
    comments: [
      {
        id: 1,
        user: users[1],
        text: "This looks amazing! 🔥",
      },
      {
        id: 2,
        user: users[2],
        text: "Love this vibe ✨",
      },
    ],
  },

  {
    id: 2,
    user: users[1],
    caption:
      "Weekend adventures and beautiful views 🌄",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=85",
    likes: 391,
    liked: true,
    createdAt: "5h",
    comments: [
      {
        id: 3,
        user: users[2],
        text: "What a beautiful place!",
      },
    ],
  },

  {
    id: 3,
    user: users[2],
    caption:
      "Working on new ideas today 💻🚀",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1000&q=85",
    likes: 156,
    liked: false,
    createdAt: "1d",
    comments: [],
  },

  {
    id: 4,
    user: users[3],
    caption:
      "Golden hour hits different ✨🌅",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85",
    likes: 482,
    liked: false,
    createdAt: "1d",
    comments: [
      {
        id: 4,
        user: users[4],
        text: "Absolutely stunning 😍",
      },
      {
        id: 5,
        user: users[5],
        text: "Perfect shot!",
      },
    ],
  },

  {
    id: 5,
    user: users[4],
    caption:
      "Exploring new places and collecting memories 🌍",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=85",
    likes: 327,
    liked: true,
    createdAt: "2d",
    comments: [
      {
        id: 6,
        user: users[6],
        text: "I want to visit this place!",
      },
    ],
  },

  {
    id: 6,
    user: users[5],
    caption:
      "Simple moments. Good music. Clear mind. 🎧",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1000&q=85",
    likes: 214,
    liked: false,
    createdAt: "3d",
    comments: [],
  },

  {
    id: 7,
    user: users[6],
    caption:
      "Nature always has a way of making everything better 🌿",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=85",
    likes: 563,
    liked: false,
    createdAt: "4d",
    comments: [
      {
        id: 7,
        user: users[1],
        text: "So peaceful 🌱",
      },
      {
        id: 8,
        user: users[4],
        text: "Beautiful photography!",
      },
    ],
  },

  {
    id: 8,
    user: users[7],
    caption:
      "City lights and late-night thoughts 🌃",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1000&q=85",
    likes: 438,
    liked: true,
    createdAt: "5d",
    comments: [
      {
        id: 9,
        user: users[2],
        text: "This is gorgeous!",
      },
    ],
  },

  {
    id: 9,
    user: users[8],
    caption:
      "Good food, good mood 🍕❤️",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=85",
    likes: 289,
    liked: false,
    createdAt: "6d",
    comments: [
      {
        id: 10,
        user: users[3],
        text: "Now I'm hungry 😂",
      },
    ],
  },

  {
    id: 10,
    user: users[9],
    caption:
      "Ending the week with a beautiful sunset 🌅✨",
    image:
      "https://images.unsplash.com/photo-1472120435266-53107fd0c44a?auto=format&fit=crop&w=1000&q=85",
    likes: 721,
    liked: true,
    createdAt: "1w",
    comments: [
      {
        id: 11,
        user: users[1],
        text: "Wow! 🔥",
      },
      {
        id: 12,
        user: users[5],
        text: "Absolutely beautiful ❤️",
      },
    ],
  },
];


/* =========================
   CONVERSATIONS
========================= */

export const initialConversations = [
  {
    id: 1,
    user: users[1],
    messages: [
      {
        id: 1,
        fromMe: false,
        text: "Hey Arjun! How are you?",
        time: "10:20 AM",
      },
      {
        id: 2,
        fromMe: true,
        text: "I'm doing great! How about you?",
        time: "10:22 AM",
      },
      {
        id: 3,
        fromMe: false,
        text: "I'm good 😊",
        time: "10:24 AM",
      },
    ],
  },

  {
    id: 2,
    user: users[2],
    messages: [
      {
        id: 4,
        fromMe: false,
        text: "Did you finish the new design?",
        time: "9:15 AM",
      },
      {
        id: 5,
        fromMe: true,
        text: "Almost! I'll send it soon.",
        time: "9:18 AM",
      },
      {
        id: 6,
        fromMe: false,
        text: "Great, looking forward to it 👍",
        time: "9:20 AM",
      },
    ],
  },

  {
    id: 3,
    user: users[3],
    messages: [
      {
        id: 7,
        fromMe: false,
        text: "That photo looks amazing!",
        time: "Yesterday",
      },
      {
        id: 8,
        fromMe: true,
        text: "Thank you so much! 😊",
        time: "Yesterday",
      },
    ],
  },

  {
    id: 4,
    user: users[4],
    messages: [
      {
        id: 9,
        fromMe: true,
        text: "Let's catch up this weekend.",
        time: "Yesterday",
      },
      {
        id: 10,
        fromMe: false,
        text: "Sounds perfect 👍",
        time: "Yesterday",
      },
    ],
  },

  {
    id: 5,
    user: users[5],
    messages: [
      {
        id: 11,
        fromMe: false,
        text: "Have you checked the new post?",
        time: "Monday",
      },
      {
        id: 12,
        fromMe: true,
        text: "Yes! It looks really good.",
        time: "Monday",
      },
    ],
  },

  {
    id: 6,
    user: users[6],
    messages: [
      {
        id: 13,
        fromMe: false,
        text: "Are you joining us for coffee?",
        time: "Monday",
      },
      {
        id: 14,
        fromMe: true,
        text: "Definitely! ☕",
        time: "Monday",
      },
    ],
  },

  {
    id: 7,
    user: users[7],
    messages: [
      {
        id: 15,
        fromMe: false,
        text: "I loved your latest post!",
        time: "Sunday",
      },
      {
        id: 16,
        fromMe: true,
        text: "Thanks Sneha! ❤️",
        time: "Sunday",
      },
    ],
  },

  {
    id: 8,
    user: users[8],
    messages: [
      {
        id: 17,
        fromMe: false,
        text: "Let's work on that project together.",
        time: "Sunday",
      },
      {
        id: 18,
        fromMe: true,
        text: "Sure! Let's discuss it tomorrow.",
        time: "Sunday",
      },
    ],
  },

  {
    id: 9,
    user: users[9],
    messages: [
      {
        id: 19,
        fromMe: false,
        text: "Did you see the sunset yesterday?",
        time: "Saturday",
      },
      {
        id: 20,
        fromMe: true,
        text: "Yes, it was beautiful! 🌅",
        time: "Saturday",
      },
    ],
  },

  {
    id: 10,
    user: users[1],
    messages: [
      {
        id: 21,
        fromMe: false,
        text: "Want to go on a trip next month?",
        time: "Friday",
      },
      {
        id: 22,
        fromMe: true,
        text: "That sounds like a great idea! 🌍",
        time: "Friday",
      },
    ],
  },
];


/* =========================
   NOTIFICATIONS
========================= */

export const initialNotifications = [
  {
    id: 1,
    type: "like",
    user: users[1],
    text: "liked your post.",
    read: false,
    time: "2m",
  },

  {
    id: 2,
    type: "comment",
    user: users[2],
    text: "commented on your post.",
    read: false,
    time: "15m",
  },

  {
    id: 3,
    type: "follow",
    user: users[3],
    text: "started following you.",
    read: true,
    time: "1h",
  },

  {
    id: 4,
    type: "like",
    user: users[4],
    text: "liked your photo.",
    read: true,
    time: "3h",
  },

  {
    id: 5,
    type: "comment",
    user: users[5],
    text: "commented: Amazing photo! 🔥",
    read: false,
    time: "5h",
  },

  {
    id: 6,
    type: "follow",
    user: users[6],
    text: "started following you.",
    read: true,
    time: "8h",
  },

  {
    id: 7,
    type: "like",
    user: users[7],
    text: "liked your post.",
    read: false,
    time: "Yesterday",
  },

  {
    id: 8,
    type: "comment",
    user: users[8],
    text: "commented on your photo.",
    read: true,
    time: "Yesterday",
  },

  {
    id: 9,
    type: "like",
    user: users[9],
    text: "liked your profile post.",
    read: true,
    time: "2d",
  },

  {
    id: 10,
    type: "follow",
    user: users[1],
    text: "started following you.",
    read: false,
    time: "3d",
  },
];