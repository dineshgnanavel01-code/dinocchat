// Warm Editorial Community: one shared shell keeps the journal’s masthead, index, and mobile escape routes consistent across every page.

import { useState } from "react";
import { Route, Switch, useLocation } from "wouter";
import { Toaster } from "sonner";
import { AppProvider } from "./context/AppContext";
import { Navbar } from "./components/Navbar";
import { MobileNav, Sidebar } from "./components/Sidebar";
import Home from "./pages/Home";
import Messages from "./pages/Messages";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

function AppShell() {
  const [location] = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  if (location === "/auth") return <Auth />;

  return (
    <div className="app-frame">
      <Navbar onMenuClick={() => setDrawerOpen(true)} />
      <div className="app-body">
        <Sidebar />
        {drawerOpen && (
          <div className="drawer-backdrop" onClick={() => setDrawerOpen(false)}>
            <Sidebar mobile onNavigate={() => setDrawerOpen(false)} />
          </div>
        )}
        <div className="route-content">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/messages" component={Messages} />
            <Route path="/notifications" component={Notifications} />
            <Route path="/profile" component={Profile} />
            <Route path="/settings" component={Settings} />
            <Route path="/discover" component={Home} />
            <Route path="/saved" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
      <MobileNav />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Toaster position="bottom-right" />
      <AppShell />
    </AppProvider>
  );
}
