import {
  Bell,
  Heart,
  MessageCircle,
  UserPlus,
  CheckCheck,
} from "lucide-react";

import { useApp } from "../context/AppContext";

export default function Notifications() {
  const { notifications = [], markNotifications } = useApp();

  const getIcon = (type) => {
    switch (type) {
      case "like":
        return (
          <div className="grid h-9 w-9 place-items-center rounded-full bg-rose-100 text-rose-500 dark:bg-rose-500/10 dark:text-rose-400">
            <Heart size={17} fill="currentColor" />
          </div>
        );

      case "comment":
        return (
          <div className="grid h-9 w-9 place-items-center rounded-full bg-violet-100 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
            <MessageCircle size={17} fill="currentColor" />
          </div>
        );

      case "follow":
        return (
          <div className="grid h-9 w-9 place-items-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
            <UserPlus size={17} />
          </div>
        );

      default:
        return (
          <div className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-slate-500 dark:bg-slate-800">
            <Bell size={17} />
          </div>
        );
    }
  };

  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  return (
    <div className="mx-auto w-full max-w-full">

      {/* Header */}
      <div className="mb-6 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-100 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
            <Bell size={22} />
          </div>

          <div>
            <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
              Notifications
            </h1>

            <p className="text-sm text-slate-400">
              {unreadCount > 0
                ? `${unreadCount} new notification${
                    unreadCount > 1 ? "s" : ""
                  }`
                : "You're all caught up"}
            </p>
          </div>
        </div>

        {notifications.length > 0 && unreadCount > 0 && (
          <button
            type="button"
            onClick={markNotifications}
            className="
              flex items-center gap-2
              rounded-xl
              border border-slate-200
              bg-white
              px-3 py-2
              text-xs font-bold
              text-slate-600
              transition
              hover:border-violet-200
              hover:bg-violet-50
              hover:text-violet-600
              dark:border-slate-800
              dark:bg-slate-900
              dark:text-slate-300
              dark:hover:border-violet-800
              dark:hover:bg-violet-500/10
              dark:hover:text-violet-400
            "
          >
            <CheckCheck size={15} />

            <span className="hidden sm:inline">
              Mark all read
            </span>
          </button>
        )}
      </div>

      {/* Notifications */}
      {notifications.length > 0 ? (
        <div className="space-y-3">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`
                group relative overflow-hidden
                rounded-2xl
                border
                p-4
                transition-all duration-200
                hover:-translate-y-0.5
                hover:shadow-md

                ${
                  notification.read
                    ? "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
                    : "border-violet-200 bg-violet-50 dark:border-violet-900/60 dark:bg-violet-950/20"
                }
              `}
            >
              {/* Unread indicator */}
              {!notification.read && (
                <span className="absolute left-0 top-0 h-full w-1 bg-violet-600" />
              )}

              <div className="flex items-center gap-3">

                {/* Avatar */}
                <div className="relative shrink-0">
                  <img
                    src={
                      notification.user?.avatar ||
                      "https://i.pravatar.cc/100?img=12"
                    }
                    alt={notification.user?.username || "User"}
                    className="
                      h-12 w-12
                      rounded-full
                      object-cover
                      ring-2
                      ring-white
                      dark:ring-slate-900
                    "
                  />

                  <div className="absolute -bottom-1 -right-1">
                    {getIcon(notification.type)}
                  </div>
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1 pl-1">
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                    <span className="font-black text-slate-900 dark:text-white">
                      {notification.user?.username || "Someone"}
                    </span>{" "}
                    {notification.text}
                  </p>

                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-xs text-slate-400">
                      {notification.time}
                    </span>

                    {!notification.read && (
                      <>
                        <span className="h-1 w-1 rounded-full bg-violet-500" />

                        <span className="text-[10px] font-bold uppercase tracking-wide text-violet-600 dark:text-violet-400">
                          New
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Desktop activity icon */}
                <div className="hidden sm:block">
                  {notification.type === "like" && (
                    <Heart
                      size={18}
                      className="text-rose-500"
                      fill="currentColor"
                    />
                  )}

                  {notification.type === "comment" && (
                    <MessageCircle
                      size={18}
                      className="text-violet-500"
                    />
                  )}

                  {notification.type === "follow" && (
                    <UserPlus
                      size={18}
                      className="text-emerald-500"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty state */
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center dark:border-slate-700 dark:bg-slate-900">

          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-violet-100 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
            <Bell size={26} />
          </div>

          <h2 className="mt-5 text-lg font-black text-slate-900 dark:text-white">
            You're all caught up
          </h2>

          <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-400">
            You don't have any new notifications right now.
            We'll let you know when something happens.
          </p>
        </div>
      )}
    </div>
  );
}