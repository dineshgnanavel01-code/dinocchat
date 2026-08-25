import { Sparkles } from "lucide-react";

import StoryBar from "../components/StoryBar";
import CreatePost from "../components/CreatePost";
import PostCard from "../components/PostCard";
import { useApp } from "../context/AppContext";

export default function Home() {
  const { posts = [] } = useApp();

  return (
    <main className="min-h-screen bg-slate-50 px-3 py-5 dark:bg-slate-950 sm:px-5 lg:px-8">
      <div className="mx-auto max-w-full">

        {/* Welcome Header */}
        <section className="mb-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-violet-600 text-white shadow-lg shadow-violet-500/20">
              <Sparkles size={21} />
            </div>

            <div>
              <h1 className="text-lg font-bold text-slate-900 dark:text-white">
                Welcome back 👋
              </h1>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                See what's happening in your community.
              </p>
            </div>
          </div>
        </section>

        {/* Stories */}
        <section className="mb-5">
          <StoryBar />
        </section>

        {/* Create Post */}
        <section className="mb-5">
          <CreatePost />
        </section>

        {/* Feed */}
        <section className="space-y-5">
          {posts.length > 0 ? (
            posts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
              />
            ))
          ) : (
            <div className="rounded-3xl border border-slate-200 bg-white px-6 py-12 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-violet-100 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
                <Sparkles size={24} />
              </div>

              <h2 className="font-bold text-slate-900 dark:text-white">
                No posts yet
              </h2>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Create your first post and start sharing.
              </p>
            </div>
          )}
        </section>

      </div>
    </main>
  );
}