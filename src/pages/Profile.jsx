import {
  Edit3,
  Grid3X3,
  Heart,
  MessageCircle,
  Camera,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useApp } from "../context/AppContext";

export default function Profile() {
  const { user } = useAuth();
  const { posts } = useApp();

  const mine = posts.filter(
    (post) => post.user?.username === user?.username
  );

  const avatar =
    user?.avatar || "https://i.pravatar.cc/150?img=12";

  const name = user?.name || "Dinesh";
  const username = user?.username || "dinesh";

  return (
    <div className="mx-auto w-full max-w-full">

      {/* =========================
          PROFILE HEADER
      ========================= */}
      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">

        {/* =========================
            COVER IMAGE
        ========================= */}
        <div className="relative h-40 overflow-hidden sm:h-52 md:h-60">

          <img
            src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1600&q=85"
            alt="Profile cover"
            className="h-full w-full object-cover transition duration-700 hover:scale-105"
          />

          {/* Simple dark overlay */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Cover label */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-slate-800 shadow-sm backdrop-blur-sm sm:left-6">
            <Camera size={14} />
            Dinoc Profile
          </div>
        </div>

        {/* =========================
            PROFILE CONTENT
        ========================= */}
        <div className="relative px-4 pb-6 sm:px-7">

          {/* Avatar */}
          <div className="-mt-14 flex justify-center sm:justify-start">
            <div className="rounded-full bg-white p-1.5 shadow-xl dark:bg-slate-900">
              <img
                src={avatar}
                alt={name}
                className="h-28 w-28 rounded-full border-4 border-violet-500 object-cover sm:h-32 sm:w-32"
              />
            </div>
          </div>

          {/* User information */}
          <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

            <div className="min-w-0 text-center sm:text-left">

              <div className="flex items-center justify-center gap-2 sm:justify-start">
                <h1 className="truncate text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                  {name}
                </h1>

                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-violet-600 text-[10px] font-bold text-white">
                  ✓
                </span>
              </div>

              <p className="mt-1 text-sm font-semibold text-violet-600 dark:text-violet-400">
                @{username}
              </p>

              {user?.bio && (
                <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-500 dark:text-slate-400 sm:mx-0">
                  {user.bio}
                </p>
              )}

            </div>

            {/* Edit Profile */}
            <button
              type="button"
              className="mx-auto flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-violet-500/20 transition duration-200 hover:-translate-y-0.5 hover:bg-violet-700 hover:shadow-lg sm:mx-0"
            >
              <Edit3 size={16} />
              Edit Profile
            </button>

          </div>

          {/* =========================
              PROFILE STATS
          ========================= */}
          <div className="mt-7 grid grid-cols-3 gap-2 sm:gap-3">

            {/* Posts */}
            <div className="rounded-2xl bg-slate-50 p-3 text-center transition hover:bg-violet-50 sm:p-4 dark:bg-slate-800 dark:hover:bg-violet-500/10">
              <p className="text-xl font-black text-slate-900 dark:text-white">
                {mine.length}
              </p>

              <p className="mt-1 text-xs font-medium text-slate-400">
                Posts
              </p>
            </div>

            {/* Followers */}
            <div className="rounded-2xl bg-slate-50 p-3 text-center transition hover:bg-violet-50 sm:p-4 dark:bg-slate-800 dark:hover:bg-violet-500/10">
              <p className="text-xl font-black text-slate-900 dark:text-white">
                {user?.followers || 0}
              </p>

              <p className="mt-1 text-xs font-medium text-slate-400">
                Followers
              </p>
            </div>

            {/* Following */}
            <div className="rounded-2xl bg-slate-50 p-3 text-center transition hover:bg-violet-50 sm:p-4 dark:bg-slate-800 dark:hover:bg-violet-500/10">
              <p className="text-xl font-black text-slate-900 dark:text-white">
                {user?.following || 0}
              </p>

              <p className="mt-1 text-xs font-medium text-slate-400">
                Following
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================
          POSTS HEADER
      ========================= */}
      <div className="mt-8 flex items-center justify-between border-b border-slate-200 pb-4 dark:border-slate-800">

        <div className="flex items-center gap-3">

          <div className="grid h-10 w-10 place-items-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
            <Grid3X3 size={19} />
          </div>

          <div>
            <h2 className="font-black text-slate-900 dark:text-white">
              Posts
            </h2>

            <p className="text-xs text-slate-400">
              Your shared moments
            </p>
          </div>

        </div>

        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500 dark:bg-slate-800 dark:text-slate-300">
          {mine.length}
        </span>

      </div>

      {/* =========================
          POST GRID
      ========================= */}
      {mine.length > 0 ? (
        <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:gap-4">

          {mine.map((post) => (
            <div
              key={post.id}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800"
            >

              <img
                src={post.image}
                alt={post.caption || "Post"}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center gap-5 bg-black/0 opacity-0 transition duration-300 group-hover:bg-black/50 group-hover:opacity-100">

                <div className="flex items-center gap-1.5 font-bold text-white">
                  <Heart
                    size={19}
                    fill="currentColor"
                  />
                  {post.likes || 0}
                </div>

                <div className="flex items-center gap-1.5 font-bold text-white">
                  <MessageCircle
                    size={19}
                    fill="currentColor"
                  />
                  {post.comments?.length || 0}
                </div>

              </div>

            </div>
          ))}

        </div>
      ) : (
        /* =========================
           EMPTY STATE
        ========================= */
        <div className="mt-5 rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center dark:border-slate-700 dark:bg-slate-900">

          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-violet-100 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
            <Grid3X3 size={26} />
          </div>

          <h3 className="mt-5 text-lg font-black text-slate-900 dark:text-white">
            No posts yet
          </h3>

          <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-400">
            Start sharing your moments with the Dinoc community.
            Your posts will appear here.
          </p>

          <button
            type="button"
            className="mt-5 rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-violet-700"
          >
            Create Your First Post
          </button>

        </div>
      )}

    </div>
  );
}