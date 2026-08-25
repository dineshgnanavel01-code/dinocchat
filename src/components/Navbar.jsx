import {
  Bell,
  Menu,
  MessageCircle,
  Search,
  Plus,
  ChevronDown,
  Zap,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar({ onMenuClick }) {
  const { user } = useAuth();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95">
      <div className="mx-auto flex h-16 max-w-full items-center gap-3 px-3 sm:px-5 lg:px-8">

        {/* Mobile Menu */}
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Open navigation menu"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-slate-600 transition hover:bg-violet-50 hover:text-violet-600 lg:hidden dark:text-slate-300 dark:hover:bg-slate-900"
        >
          <Menu size={23} />
        </button>

        {/* Dinoc Logo */}
        <Link
          to="/"
          className="group flex shrink-0 items-center gap-2.5"
        >
          {/* Logo Icon */}
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-violet-500/30 blur-lg transition group-hover:bg-violet-500/50" />

            <div className="relative grid h-10 w-10 place-items-center rounded-2xl bg-violet-600 text-white shadow-lg shadow-violet-500/20 transition duration-300 group-hover:scale-105">
              <Zap
                size={21}
                strokeWidth={2.8}
                className="fill-white"
              />
            </div>
          </div>

          {/* Logo Name */}
          <span className="hidden text-xl font-black tracking-tight text-violet-600 sm:block dark:text-violet-400">
            Dinoc
          </span>
        </Link>

        {/* Search */}
        <div className="relative mx-auto hidden w-full max-w-md md:block">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search people, posts..."
            className="h-10 w-full rounded-xl border border-transparent bg-slate-100 pl-10 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-violet-300 focus:bg-white focus:ring-2 focus:ring-violet-100 dark:bg-slate-900 dark:text-white dark:focus:border-violet-700 dark:focus:bg-slate-900"
          />
        </div>

        {/* Right Navigation */}
        <nav className="ml-auto flex items-center gap-1">

          {/* Create */}
          <Link
            to="/"
            className="hidden items-center gap-2 rounded-xl bg-violet-600 px-4 py-2 text-sm font-bold text-white shadow-md shadow-violet-500/20 transition hover:-translate-y-0.5 hover:bg-violet-700 sm:flex"
          >
            <Plus size={18} />
            Create
          </Link>

          {/* Messages */}
          <Link
            to="/messages"
            className={`relative grid h-10 w-10 place-items-center rounded-xl transition ${
              isActive("/messages")
                ? "bg-violet-100 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400"
                : "text-slate-600 hover:bg-slate-100 hover:text-violet-600 dark:text-slate-300 dark:hover:bg-slate-900"
            }`}
          >
            <MessageCircle size={21} />

            <Badge
              count="3"
              color="bg-violet-600"
            />
          </Link>

          {/* Notifications */}
          <Link
            to="/notifications"
            className={`relative grid h-10 w-10 place-items-center rounded-xl transition ${
              isActive("/notifications")
                ? "bg-fuchsia-100 text-fuchsia-600 dark:bg-fuchsia-500/10 dark:text-fuchsia-400"
                : "text-slate-600 hover:bg-slate-100 hover:text-fuchsia-600 dark:text-slate-300 dark:hover:bg-slate-900"
            }`}
          >
            <Bell size={21} />

            <Badge
              count="5"
              color="bg-fuchsia-500"
            />
          </Link>

          {/* Profile */}
          <Link
            to="/profile"
            className={`group ml-1 flex items-center gap-2 rounded-xl p-1.5 transition hover:bg-slate-100 dark:hover:bg-slate-900 ${
              isActive("/profile")
                ? "bg-slate-100 dark:bg-slate-900"
                : ""
            }`}
          >
            {/* Avatar */}
            <div className="relative">
              <div className="rounded-full bg-violet-600 p-0.5">
                <img
                  src={
                    user?.avatar ||
                    "https://i.pravatar.cc/100?img=12"
                  }
                  alt={user?.username || "Profile"}
                  className="h-9 w-9 rounded-full object-cover ring-2 ring-white dark:ring-slate-950"
                />
              </div>

              {/* Online */}
              <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500 dark:border-slate-950" />
            </div>

            {/* User Info */}
            <div className="hidden text-left xl:block">
              <b className="block max-w-24 truncate text-xs text-slate-800 dark:text-white">
                {user?.username || "Dinesh"}
              </b>

              <small className="text-[10px] text-slate-400">
                View profile
              </small>
            </div>

            <ChevronDown
              size={15}
              className="hidden text-slate-400 xl:block"
            />
          </Link>
        </nav>
      </div>
    </header>
  );
}

/* Notification Badge */
function Badge({ count, color }) {
  return (
    <span
      className={`absolute right-0 top-0 grid h-4 min-w-4 place-items-center rounded-full px-1 text-[9px] font-bold text-white ring-2 ring-white dark:ring-slate-950 ${color}`}
    >
      {count}
    </span>
  );
}