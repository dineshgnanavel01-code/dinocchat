// Warm Editorial Community: one shared shell keeps the journal’s masthead, index, and mobile escape routes consistent across every page.

import { useState } from "react";
import { Route, Switch, useLocation } from "wouter";
import { Toaster } from "sonner";
import { AuthProvider } from "./context/AuthContext";
import { PostProvider } from "./context/PostContext";
import { MessageProvider } from "./context/MessageContext";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MobileNav from "./components/MobileNav";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Messages from "./pages/Messages";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";


function NotFound() { return <section className="narrow-page"><div className="page-intro"><div><span className="eyebrow">A quiet corner</span><h1>That page is not here.</h1></div></div><a className="primary-button" href="/">Return home</a></section>; }

function ProtectedPages() {
  return <ProtectedRoute><Switch><Route path="/" component={Home} /><Route path="/explore" component={Explore} /><Route path="/messages" component={Messages} /><Route path="/notifications" component={Notifications} /><Route path="/profile" component={Profile} /><Route path="/settings" component={Settings} /><Route path="/saved" component={Explore} /><Route component={NotFound} /></Switch></ProtectedRoute>;
}

function AppShell() {
  const [location] = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  if (location === "/login") return <Login />;
  if (location === "/signup") return <Signup />;
  return <div className="app-frame"><Navbar onMenuClick={() => setDrawerOpen(true)} /><div className="app-body"><Sidebar />{drawerOpen && <div className="drawer-backdrop" onClick={() => setDrawerOpen(false)}><Sidebar mobile onNavigate={() => setDrawerOpen(false)} /></div>}<div className="route-content"><ProtectedPages /></div></div><MobileNav /></div>;
}

export default function App() {
  return <AuthProvider><ThemeProvider><PostProvider><MessageProvider><Toaster position="bottom-right" /><AppShell /></MessageProvider></PostProvider></ThemeProvider></AuthProvider>;
}
