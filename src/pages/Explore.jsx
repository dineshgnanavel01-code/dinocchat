import {
  Search,
  UserPlus,
  UserCheck,
  Sparkles,
  MoreHorizontal,
} from "lucide-react";
import { users } from "../data/mockData";
import { useMemo, useState } from "react";

export default function Explore() {
  const [q, setQ] = useState("");
  const [following, setFollowing] = useState([]);

  const list = useMemo(() => {
    const search = q.toLowerCase().trim();

    if (!search) {
      return users;
    }

    return users.filter((user) =>
      `${user.name} ${user.username} ${user.bio || ""}`
        .toLowerCase()
        .includes(search)
    );
  }, [q]);

  const toggleFollow = (id) => {
    setFollowing((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto w-full max-w-full px-4 py-6 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black tracking-tight">
              Explore
            </h1>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Discover people you may know
            </p>
          </div>

          <div className="hidden items-center gap-2 rounded-full bg-pink-500 px-4 py-2 text-xs font-bold text-white shadow-md sm:flex">
            <Sparkles size={15} />
            Discover
          </div>
        </div>

        {/* SEARCH */}
        <div className="mb-8">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search"
              className="
                h-11
                w-full
                rounded-xl
                border
                border-transparent
                bg-slate-100
                pl-11
                pr-10
                text-sm
                outline-none
                transition
                placeholder:text-slate-400
                focus:border-slate-300
                focus:bg-white
                focus:ring-2
                focus:ring-pink-500/10
                dark:bg-slate-900
                dark:text-white
                dark:focus:border-slate-700
                dark:focus:bg-slate-900
              "
            />

            {q && (
              <button
                type="button"
                onClick={() => setQ("")}
                className="
                  absolute
                  right-3
                  top-1/2
                  -translate-y-1/2
                  text-xs
                  font-bold
                  text-pink-500
                "
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* RESULTS HEADER */}
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-black">
              Suggested for you
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              {list.length} {list.length === 1 ? "person" : "people"}
            </p>
          </div>
        </div>

        {/* USERS */}
        {list.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((user) => {
              const isFollowing = following.includes(user.id);

              return (
                <article
                  key={user.id}
                  className="
                    group
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-5
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                    hover:shadow-pink-500/10
                    dark:border-slate-800
                    dark:bg-slate-900
                  "
                >
                  {/* TOP */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">

                      {/* AVATAR */}
                      <div className="rounded-full bg-pink-500 p-0.5">
                        <div className="rounded-full bg-white p-0.5 dark:bg-slate-900">
                          <img
                            src={user.avatar}
                            alt={user.name}
                            className="
                              h-16
                              w-16
                              rounded-full
                              object-cover
                              transition-transform
                              duration-300
                              group-hover:scale-105
                            "
                          />
                        </div>
                      </div>

                      {/* NAME */}
                      <div className="min-w-0">
                        <div className="flex items-center gap-1">
                          <h3 className="truncate text-sm font-black">
                            {user.username}
                          </h3>

                          <span className="grid h-4 w-4 place-items-center rounded-full bg-purple-500 text-xs font-black text-white">
                            ✓
                          </span>
                        </div>

                        <p className="mt-0.5 truncate text-sm text-slate-500 dark:text-slate-400">
                          {user.name}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="
                        text-slate-400
                        transition
                        hover:text-slate-700
                        dark:hover:text-white
                      "
                    >
                      <MoreHorizontal size={19} />
                    </button>
                  </div>

                  {/* BIO */}
                  <p className="mt-4 min-h-10 text-sm leading-5 text-slate-600 dark:text-slate-300">
                    {user.bio || "Sharing moments and good vibes ✨"}
                  </p>

                  {/* STATS */}
                  <div className="mt-4 flex items-center gap-5">
                    <div>
                      <p className="text-sm font-black">
                        {user.followers || 0}
                      </p>

                      <p className="text-xs text-slate-400">
                        followers
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-black">
                        {user.following || 0}
                      </p>

                      <p className="text-xs text-slate-400">
                        following
                      </p>
                    </div>
                  </div>

                  {/* FOLLOW BUTTON */}
                  <button
                    type="button"
                    onClick={() => toggleFollow(user.id)}
                    className={
                      isFollowing
                        ? `
                          mt-5
                          flex
                          h-10
                          w-full
                          items-center
                          justify-center
                          gap-2
                          rounded-xl
                          border
                          border-slate-300
                          bg-white
                          text-sm
                          font-bold
                          text-slate-700
                          transition-all
                          duration-200
                          hover:bg-slate-100
                          dark:border-slate-700
                          dark:bg-slate-800
                          dark:text-white
                          dark:hover:bg-slate-700
                        `
                        : `
                          mt-5
                          flex
                          h-10
                          w-full
                          items-center
                          justify-center
                          gap-2
                          rounded-xl
                          bg-pink-500
                          text-sm
                          font-bold
                          text-white
                          shadow-md
                          shadow-pink-500/20
                          transition-all
                          duration-200
                          hover:bg-pink-600
                          hover:shadow-lg
                        `
                    }
                  >
                    {isFollowing ? (
                      <>
                        <UserCheck size={16} />
                        Following
                      </>
                    ) : (
                      <>
                        <UserPlus size={16} />
                        Follow
                      </>
                    )}
                  </button>
                </article>
              );
            })}
          </div>
        ) : (
          /* EMPTY STATE */
          <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-20 text-center dark:border-slate-700 dark:bg-slate-900">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-pink-500 text-white shadow-lg">
              <Search size={26} />
            </div>

            <h2 className="mt-5 text-lg font-black">
              No results found
            </h2>

            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-400">
              We couldn't find anyone matching{" "}
              <span className="font-bold text-slate-600 dark:text-slate-300">
                "{q}"
              </span>
              .
            </p>

            <button
              type="button"
              onClick={() => setQ("")}
              className="
                mt-5
                rounded-xl
                bg-pink-500
                px-5
                py-2.5
                text-sm
                font-bold
                text-white
                shadow-md
                transition
                hover:bg-pink-600
              "
            >
              Show everyone
            </button>
          </div>
        )}
      </div>
    </main>
  );
}