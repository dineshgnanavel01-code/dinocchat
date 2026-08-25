# Dinoc Social Media App

A responsive React and Vite social-media journal built with plain JavaScript and JSX. The interface uses a warm editorial design system: parchment surfaces, ink typography, terracotta actions, and an asymmetric reading-first layout.

## Project structure

```text
chat-social-app/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── MobileNav.jsx
│   │   ├── StoryBar.jsx
│   │   ├── StoryViewer.jsx
│   │   ├── PostCard.jsx
│   │   ├── CreatePost.jsx
│   │   ├── CommentSection.jsx
│   │   ├── RightSidebar.jsx
│   │   ├── NotificationPanel.jsx
│   │   ├── ChatList.jsx
│   │   ├── ChatWindow.jsx
│   │   ├── Modal.jsx
│   │   └── ProtectedRoute.jsx
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Home.jsx
│   │   ├── Explore.jsx
│   │   ├── Messages.jsx
│   │   ├── Notifications.jsx
│   │   ├── Profile.jsx
│   │   └── Settings.jsx
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── PostContext.jsx
│   │   ├── MessageContext.jsx
│   │   └── ThemeContext.jsx
│   ├── data/mockData.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   └── screenshots/
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
└── README.md
```

The application contains no TypeScript source files; the requested component list is the complete JSX component set.

## Run locally

```bash
# npm workflow (Windows-friendly)
npm install
npm run dev

# or use pnpm
pnpm install
pnpm dev
```

Create a production build with `npm run build` or `pnpm build`, and preview it with `npm run preview` or `pnpm preview`.

## Routes

The JSX router includes `/login`, `/signup`, `/`, `/explore`, `/messages`, `/notifications`, `/profile`, and `/settings`. The protected application routes share the same responsive shell and are guarded by `ProtectedRoute.jsx`.

## Included interactions

The feed supports publishing a text note, liking and saving posts, following suggested people, opening stories, adding comments, and showing toast feedback for upcoming features. Messages include selectable conversations and a reply composer. Notifications can be marked as read. Profile and settings screens include responsive navigation and lightweight local UI state.

The data layer is intentionally mock data in `src/data/mockData.js`; no backend or authentication service is connected. The visible product name is Dinoc.

## Vercel preparation

`vercel.json` includes a single-page-app rewrite so direct visits to Wouter routes resolve to `index.html`. To run locally, install dependencies first with `npm install` or `pnpm install`; this is required because `wouter`, React, Vite, and the icon packages are intentionally not bundled in the ZIP. To deploy with Vercel, import this project or upload the ZIP, use the default Vite build settings, and set the output directory to `dist`. Manus hosting remains the supported managed option if you want deployment and custom domains without a separate provider.
