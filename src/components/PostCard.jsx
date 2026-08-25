import {
  Heart,
  MessageCircle,
  Send,
  MoreHorizontal,
  Bookmark,
} from "lucide-react";
import { useState } from "react";
import { useApp } from "../context/AppContext";
import { useAuth } from "../context/AuthContext";

export default function PostCard({ post }) {
  const { toggleLike, addComment } = useApp();
  const { user } = useAuth();

  const [text, setText] = useState("");
  const [showComments, setShowComments] = useState(false);
  const [saved, setSaved] = useState(false);

  const submit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    addComment(post.id, text.trim(), user);
    setText("");
    setShowComments(true);
  };

  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">

      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-4 sm:px-5">

        <div className="rounded-full bg-violet-500 p-0.5">
          <img
            src={post.user.avatar}
            alt={post.user.username}
            className="h-11 w-11 rounded-full border-2 border-white object-cover dark:border-slate-900"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1">
            <b className="truncate text-sm font-bold text-slate-900 dark:text-white">
              {post.user.username}
            </b>

            <span className="text-xs font-bold text-violet-500">
              ✓
            </span>
          </div>

          <p className="text-xs text-slate-400">
            {post.createdAt}
          </p>
        </div>

        <button
          type="button"
          aria-label="More options"
          className="grid h-9 w-9 place-items-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-white"
        >
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Post Image */}
      <div className="overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={post.image}
          alt={post.caption || "Post"}
          className="max-h-screen w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Post Content */}
      <div className="px-4 py-4 sm:px-5">

        {/* Actions */}
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-1">

            {/* Like */}
            <button
              type="button"
              onClick={() => toggleLike(post.id)}
              aria-label="Like post"
              className={`grid h-10 w-10 place-items-center rounded-full transition duration-200 hover:bg-slate-100 dark:hover:bg-slate-800 ${
                post.liked
                  ? "text-rose-500"
                  : "text-slate-600 dark:text-slate-300"
              }`}
            >
              <Heart
                size={23}
                fill={post.liked ? "currentColor" : "none"}
                className="transition-transform duration-200 hover:scale-110"
              />
            </button>

            {/* Comment */}
            <button
              type="button"
              onClick={() => setShowComments((value) => !value)}
              aria-label="Comments"
              className="grid h-10 w-10 place-items-center rounded-full text-slate-600 transition hover:bg-slate-100 hover:text-violet-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-violet-400"
            >
              <MessageCircle size={23} />
            </button>

            {/* Share */}
            <button
              type="button"
              aria-label="Share post"
              className="grid h-10 w-10 place-items-center rounded-full text-slate-600 transition hover:bg-slate-100 hover:text-violet-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-violet-400"
            >
              <Send size={22} />
            </button>
          </div>

          {/* Save */}
          <button
            type="button"
            onClick={() => setSaved((value) => !value)}
            aria-label="Save post"
            className={`grid h-10 w-10 place-items-center rounded-full transition hover:bg-slate-100 dark:hover:bg-slate-800 ${
              saved
                ? "text-violet-600"
                : "text-slate-600 dark:text-slate-300"
            }`}
          >
            <Bookmark
              size={22}
              fill={saved ? "currentColor" : "none"}
            />
          </button>
        </div>

        {/* Likes */}
        <p className="mt-2 text-sm font-bold text-slate-900 dark:text-white">
          {post.likes.toLocaleString()} likes
        </p>

        {/* Caption */}
        <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
          <b className="mr-1 font-bold text-slate-900 dark:text-white">
            {post.user.username}
          </b>

          {post.caption}
        </p>

        {/* Comments Button */}
        {post.comments.length > 0 && (
          <button
            type="button"
            onClick={() => setShowComments((value) => !value)}
            className="mt-3 text-sm font-medium text-slate-400 transition hover:text-violet-600"
          >
            {showComments
              ? "Hide comments"
              : `View all ${post.comments.length} comments`}
          </button>
        )}

        {/* Comments */}
        {showComments && post.comments.length > 0 && (
          <div className="mt-4 space-y-3 border-t border-slate-100 pt-4 dark:border-slate-800">

            {post.comments.map((comment) => (
              <div
                key={comment.id}
                className="flex items-start gap-3"
              >
                <img
                  src={comment.user.avatar}
                  alt={comment.user.username}
                  className="h-8 w-8 rounded-full object-cover"
                />

                <div className="min-w-0 flex-1 rounded-2xl bg-slate-50 px-3 py-2 dark:bg-slate-800">
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    <b className="mr-1 text-slate-900 dark:text-white">
                      {comment.user.username}
                    </b>

                    {comment.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Add Comment */}
        <form
          onSubmit={submit}
          className="mt-4 flex items-center gap-3 border-t border-slate-100 pt-4 dark:border-slate-800"
        >
          <img
            src={user?.avatar || "https://i.pravatar.cc/100?img=12"}
            alt="You"
            className="h-8 w-8 shrink-0 rounded-full object-cover"
          />

          <div className="flex min-w-0 flex-1 items-center rounded-2xl bg-slate-100 px-3 dark:bg-slate-800">

            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Add a comment..."
              className="h-10 min-w-0 flex-1 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400 dark:text-white"
            />

            <button
              type="submit"
              disabled={!text.trim()}
              className="ml-2 text-sm font-bold text-violet-600 transition hover:text-violet-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </article>
  );
}