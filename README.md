# Commonplace Social Media App

A responsive React and Vite social-media journal built with plain JavaScript and JSX. The interface uses a warm editorial design system: parchment surfaces, ink typography, terracotta actions, and an asymmetric reading-first layout.

## Project structure

```text
social-media-app/
├── src/
│   ├── components/
│   │   ├── Avatar.jsx
│   │   ├── CreatePost.jsx
│   │   ├── Navbar.jsx
│   │   ├── PostCard.jsx
│   │   ├── Sidebar.jsx
│   │   └── Stories.jsx
│   ├── context/
│   │   └── AppContext.jsx
│   ├── data/
│   │   └── mockData.js
│   ├── pages/
│   │   ├── Auth.jsx
│   │   ├── Home.jsx
│   │   ├── Messages.jsx
│   │   ├── Notifications.jsx
│   │   ├── Profile.jsx
│   │   └── Settings.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Run locally

```bash
pnpm install
pnpm dev
```

Create a production build with `pnpm build`, or preview the build with `pnpm preview`.

## Included interactions

The feed supports publishing a text note, liking and saving posts, following suggested people, opening story prompts, and showing toast feedback for upcoming features. Messages include selectable conversations and a reply composer. Notifications can be marked as read. Profile and settings screens include responsive navigation and lightweight local UI state.

The data layer is intentionally mock data in `src/data/mockData.js`; no backend or authentication service is connected.
