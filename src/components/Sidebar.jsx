import {
  Bell,
  Compass,
  Home,
  LogOut,
  MessageCircle,
  Settings,
  User,
  X,
} from "lucide-react";

import {
  Link,
  useLocation,
} from "react-router-dom";

import { useAuth } from "../context/AuthContext";

const links = [
  ["/", "Home", Home],
  ["/explore", "Explore", Compass],
  ["/messages", "Messages", MessageCircle],
  ["/notifications", "Notifications", Bell],
  ["/profile", "Profile", User],
  ["/settings", "Settings", Settings],
];

export default function Sidebar({
  open = false,
  onClose,
}) {
  const { logout } = useAuth();
  const location = useLocation();

  const handleNavigation = () => {
    if (window.innerWidth < 1024) {
      onClose?.();
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity lg:hidden ${
          open
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-16 z-50 h-screen w-64 border-r border-slate-200 bg-white shadow-xl transition-transform duration-300 ease-out dark:border-slate-800 dark:bg-slate-950 lg:translate-x-0 lg:shadow-none ${
          open
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col p-4">

          {/* Mobile Header */}
          <div className="mb-6 flex items-center justify-between lg:hidden">
            <div>
              <h2 className="text-xl font-black text-violet-600">
                Dinoc
              </h2>

              <p className="text-xs text-slate-400">
                Social community
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="grid h-10 w-10 place-items-center rounded-xl text-slate-500 transition hover:bg-slate-100 hover:text-violet-600 dark:hover:bg-slate-900"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {links.map(
              ([path, title, Icon]) => {
                const active =
                  location.pathname === path;

                return (
                  <Link
                    key={path}
                    to={path}
                    onClick={handleNavigation}
                    className={`group flex items-center gap-3 rounded-2xl px-3 py-3 transition-all duration-200 ${
                      active
                        ? "bg-violet-600 text-white shadow-lg shadow-violet-500/20"
                        : "text-slate-600 hover:bg-violet-50 hover:text-violet-600 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-violet-400"
                    }`}
                  >
                    {/* Icon */}
                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-all ${
                        active
                          ? "bg-white/20 text-white"
                          : "bg-slate-100 text-slate-500 group-hover:bg-violet-100 group-hover:text-violet-600 dark:bg-slate-900 dark:text-slate-400 dark:group-hover:bg-violet-950 dark:group-hover:text-violet-400"
                      }`}
                    >
                      <Icon
                        size={20}
                        strokeWidth={
                          active ? 2.5 : 2
                        }
                      />
                    </span>

                    {/* Label */}
                    <span className="text-sm font-bold">
                      {title}
                    </span>

                    {/* Messages Badge */}
                    {title === "Messages" && (
                      <span
                        className={`ml-auto flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[10px] font-black ${
                          active
                            ? "bg-white text-violet-600"
                            : "bg-violet-600 text-white"
                        }`}
                      >
                        3
                      </span>
                    )}

                    {/* Notifications Badge */}
                    {title ===
                      "Notifications" && (
                      <span
                        className={`ml-auto flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[10px] font-black ${
                          active
                            ? "bg-white text-violet-600"
                            : "bg-fuchsia-500 text-white"
                        }`}
                      >
                        5
                      </span>
                    )}
                  </Link>
                );
              }
            )}
          </nav>

          {/* Bottom Section */}
          <div className="mt-auto">

            <div className="mb-4 h-px bg-slate-200 dark:bg-slate-800" />

            {/* Logout */}
            <button
              type="button"
              onClick={logout}
              className="group flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left text-slate-600 transition-all duration-200 hover:bg-red-50 hover:text-red-500 dark:text-slate-300 dark:hover:bg-red-950/30 dark:hover:text-red-400"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-100 text-slate-500 transition group-hover:bg-red-100 group-hover:text-red-500 dark:bg-slate-900 dark:text-slate-400 dark:group-hover:bg-red-950/50 dark:group-hover:text-red-400">
                <LogOut size={20} />
              </span>

              <span className="text-sm font-bold">
                Logout
              </span>
            </button>

            {/* Footer */}
            <div className="mt-5 rounded-2xl bg-slate-50 p-3 dark:bg-slate-900">
              <p className="text-center text-[10px] font-medium text-slate-400">
                © 2026 Dinoc
              </p>

              <p className="mt-1 text-center text-[10px] text-slate-400">
                Connect. Share. Discover.
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}