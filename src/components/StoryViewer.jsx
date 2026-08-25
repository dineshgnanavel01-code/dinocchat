import { X, MoreHorizontal } from "lucide-react";

export default function StoryViewer({
  story,
  onClose,
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-2 backdrop-blur-sm sm:p-4"
      onClick={onClose}
    >
      {/* Story Container */}
      <div
        className="relative h-screen w-full max-w-md overflow-hidden rounded-3xl bg-black shadow-2xl sm:h-5/6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Story Image */}
        <img
          src={story.image}
          alt={`${story.username} story`}
          className="h-full w-full object-cover"
        />

        {/* Top Overlay */}
        <div className="pointer-events-none absolute left-0 right-0 top-0 h-32 bg-black/40" />

        {/* Bottom Overlay */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-black/40" />

        {/* Progress Bar */}
        <div className="absolute left-3 right-3 top-3 z-10">
          <div className="h-1 overflow-hidden rounded-full bg-white/30">
            <div className="h-full w-full rounded-full bg-white" />
          </div>
        </div>

        {/* Header */}
        <div className="absolute left-3 right-3 top-7 z-10 flex items-center justify-between">
          <div className="flex min-w-0 items-center gap-3">
            {/* Avatar */}
            <div className="rounded-full bg-violet-600 p-0.5">
              <img
                src={story.avatar}
                alt={story.username}
                className="h-10 w-10 rounded-full border-2 border-black object-cover"
              />
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-white">
                {story.username}
              </p>

              <p className="text-xs text-white/70">
                Just now
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full text-white transition hover:bg-white/20"
              aria-label="More options"
            >
              <MoreHorizontal size={21} />
            </button>

            <button
              type="button"
              onClick={onClose}
              className="grid h-10 w-10 place-items-center rounded-full bg-black/30 text-white transition hover:bg-white/20"
              aria-label="Close story"
            >
              <X size={21} />
            </button>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="absolute bottom-5 left-4 right-4 z-10">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-md">
            <p className="text-sm font-medium text-white">
              Enjoying the moment ✨
            </p>

            <p className="mt-1 text-xs text-white/60">
              Tap outside to close
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}