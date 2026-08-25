import {
  Compass,
  Home,
  MessageCircle,
  Plus,
  User,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";

export default function MobileNav() {
  const location = useLocation();

  const items = [
    {
      path: "/",
      label: "Home",
      icon: Home,
    },
    {
      path: "/explore",
      label: "Explore",
      icon: Compass,
    },
    {
      path: "/messages",
      label: "Messages",
      icon: MessageCircle,
    },
    {
      path: "/profile",
      label: "Profile",
      icon: User,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white shadow-lg dark:border-slate-800 dark:bg-slate-950 lg:hidden">

      <div className="mx-auto flex h-16 max-w-lg items-center justify-around px-3">

        {/* Navigation Items */}
        {items.map(({ path, label, icon: Icon }) => {
          const active = location.pathname === path;

          return (
            <Link
              key={path}
              to={path}
              aria-label={label}
              className={`group flex h-12 w-14 flex-col items-center justify-center rounded-2xl transition duration-200 ${
                active
                  ? "bg-violet-50 text-violet-600 dark:bg-violet-950 dark:text-violet-400"
                  : "text-slate-500 hover:bg-slate-100 hover:text-violet-600 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-violet-400"
              }`}
            >
              <Icon
                size={21}
                strokeWidth={active ? 2.5 : 2}
                className="transition-transform duration-200 group-hover:scale-110"
              />

              <span
                className={`mt-0.5 text-[10px] font-semibold ${
                  active
                    ? "text-violet-600 dark:text-violet-400"
                    : "text-slate-400"
                }`}
              >
                {label}
              </span>
            </Link>
          );
        })}

        {/* Create Button */}
        <Link
          to="/"
          aria-label="Create post"
          className="group grid h-12 w-12 place-items-center rounded-2xl bg-violet-600 text-white shadow-md shadow-violet-500/20 transition duration-200 hover:scale-105 hover:bg-violet-700 active:scale-95"
        >
          <Plus
            size={24}
            strokeWidth={2.5}
            className="transition-transform duration-200 group-hover:rotate-90"
          />
        </Link>
      </div>
    </nav>
  );
}