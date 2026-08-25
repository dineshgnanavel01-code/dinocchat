import { Bookmark } from "lucide-react";

export default function Saved() {
  return (
    <main className="min-h-screen bg-slate-50 p-6 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-violet-600 text-white">
            <Bookmark size={24} />
          </div>

          <div>
            <h1 className="text-2xl font-black text-slate-900 dark:text-white">
              Saved
            </h1>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Posts you saved will appear here.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <Bookmark
            size={40}
            className="mx-auto mb-4 text-slate-400"
          />

          <h2 className="text-lg font-bold text-slate-800 dark:text-white">
            No saved posts yet
          </h2>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Save posts to find them here later.
          </p>
        </div>
      </div>
    </main>
  );
}