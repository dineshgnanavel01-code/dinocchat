import {
  ImagePlus,
  X,
  Smile,
  Send,
  Sparkles,
  Camera,
} from "lucide-react";
import { useRef, useState } from "react";
import { useApp } from "../context/AppContext";
import { useAuth } from "../context/AuthContext";

export default function CreatePost() {
  const { user } = useAuth();
  const { addPost } = useApp();

  const fileInput = useRef(null);

  const [caption, setCaption] = useState("");
  const [preview, setPreview] = useState("");
  const [error, setError] = useState("");

  const avatar =
    user?.avatar || "https://i.pravatar.cc/150?img=12";

  const handleImageSelect = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image.");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setError("Image must be smaller than 10MB.");
      return;
    }

    if (preview) {
      URL.revokeObjectURL(preview);
    }

    setError("");
    setPreview(URL.createObjectURL(file));
  };

  const removeImage = () => {
    if (preview) {
      URL.revokeObjectURL(preview);
    }

    setPreview("");
    setError("");

    if (fileInput.current) {
      fileInput.current.value = "";
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!preview) {
      setError("Please select a photo before posting.");
      return;
    }

    const newPost = {
      id: Date.now(),

      user:
        user || {
          id: Date.now(),
          name: "Dinesh",
          username: "dinesh",
          avatar,
          bio: "Building ideas, sharing moments ✨",
        },

      caption: caption.trim() || "New post ✨",
      image: preview,
      likes: 0,
      liked: false,
      createdAt: "Just now",
      comments: [],
    };

    addPost(newPost);

    setCaption("");
    setPreview("");
    setError("");

    if (fileInput.current) {
      fileInput.current.value = "";
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition
        duration-300
        hover:border-violet-200
        hover:shadow-xl
        dark:border-slate-800
        dark:bg-slate-900
        dark:hover:border-violet-900
      "
    >
      {/* TOP HEADER */}
      <div className="flex items-center gap-3 border-b border-slate-100 px-4 py-4 dark:border-slate-800 sm:px-5">

        {/* Avatar */}
        <div className="relative shrink-0">
          <div className="rounded-full border-2 border-violet-500 p-0.5">
            <img
              src={avatar}
              alt={user?.username || "Profile"}
              className="
                h-11
                w-11
                rounded-full
                object-cover
              "
            />
          </div>

          <span
            className="
              absolute
              bottom-0
              right-0
              h-3
              w-3
              rounded-full
              border-2
              border-white
              bg-emerald-500
              dark:border-slate-900
            "
          />
        </div>

        {/* User */}
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-bold text-slate-900 dark:text-white">
            {user?.name || "Dinesh"}
          </p>

          <p className="text-xs text-slate-400">
            Create something new
          </p>
        </div>

        {/* Status */}
        <div
          className="
            hidden
            items-center
            gap-2
            rounded-full
            border
            border-violet-100
            px-3
            py-1.5
            text-xs
            font-semibold
            text-violet-600
            sm:flex
            dark:border-violet-900
            dark:text-violet-400
          "
        >
          <Sparkles size={14} />
          <span>New post</span>
        </div>
      </div>

      {/* TEXT AREA */}
      <div className="p-4 sm:p-5">
        <div
          className="
            rounded-2xl
            border
            border-slate-200
            bg-slate-50
            p-1
            transition
            focus-within:border-violet-400
            focus-within:bg-white
            dark:border-slate-700
            dark:bg-slate-800
            dark:focus-within:border-violet-600
            dark:focus-within:bg-slate-800
          "
        >
          <textarea
            value={caption}
            onChange={(event) => setCaption(event.target.value)}
            placeholder="Share what's on your mind..."
            maxLength={500}
            className="
              min-h-24
              w-full
              resize-none
              bg-transparent
              px-3
              py-3
              text-sm
              leading-6
              text-slate-800
              outline-none
              placeholder:text-slate-400
              dark:text-white
              dark:placeholder:text-slate-500
            "
          />

          <div className="flex items-center justify-between px-3 pb-2">
            <div className="flex items-center gap-1 text-slate-400">
              <Smile size={16} />
              <span className="text-xs">Express yourself</span>
            </div>

            <span className="text-xs text-slate-400">
              {caption.length}/500
            </span>
          </div>
        </div>

        {/* IMAGE PREVIEW */}
        {preview && (
          <div
            className="
              relative
              mt-4
              overflow-hidden
              rounded-2xl
              border
              border-slate-200
              bg-slate-100
              dark:border-slate-700
              dark:bg-slate-800
            "
          >
            <img
              src={preview}
              alt="Selected post"
              className="
                block
                max-h-96
                w-full
                object-cover
              "
            />

            {/* Remove */}
            <button
              type="button"
              onClick={removeImage}
              aria-label="Remove image"
              className="
                absolute
                right-3
                top-3
                grid
                h-9
                w-9
                place-items-center
                rounded-full
                bg-black/70
                text-white
                transition
                hover:bg-red-500
              "
            >
              <X size={18} />
            </button>

            {/* Preview Label */}
            <div
              className="
                absolute
                bottom-3
                left-3
                flex
                items-center
                gap-2
                rounded-full
                border
                border-white/20
                bg-black/60
                px-3
                py-1.5
                text-xs
                font-semibold
                text-white
              "
            >
              <Camera size={14} />
              Photo preview
            </div>
          </div>
        )}

        {/* ERROR */}
        {error && (
          <div
            className="
              mt-3
              rounded-xl
              border
              border-red-200
              bg-red-50
              px-3
              py-2
              text-sm
              font-medium
              text-red-600
              dark:border-red-900
              dark:bg-red-950
              dark:text-red-400
            "
          >
            {error}
          </div>
        )}
      </div>

      {/* BOTTOM ACTION BAR */}
      <div
        className="
          flex
          items-center
          justify-between
          border-t
          border-slate-100
          px-4
          py-3
          dark:border-slate-800
          sm:px-5
        "
      >
        <div className="flex items-center gap-1">

          {/* Photo */}
          <button
            type="button"
            onClick={() => fileInput.current?.click()}
            className="
              flex
              items-center
              gap-2
              rounded-xl
              px-3
              py-2
              text-sm
              font-semibold
              text-violet-600
              transition
              hover:bg-violet-50
              dark:text-violet-400
              dark:hover:bg-violet-950
            "
          >
            <ImagePlus size={19} />
            <span className="hidden sm:inline">
              Photo
            </span>
          </button>

          {/* Emoji */}
          <button
            type="button"
            onClick={() =>
              setCaption((value) =>
                value ? `${value} ✨` : "✨"
              )
            }
            className="
              flex
              items-center
              gap-2
              rounded-xl
              px-3
              py-2
              text-sm
              font-semibold
              text-slate-500
              transition
              hover:bg-slate-100
              hover:text-violet-600
              dark:text-slate-400
              dark:hover:bg-slate-800
              dark:hover:text-violet-400
            "
          >
            <Smile size={19} />
            <span className="hidden sm:inline">
              Feeling
            </span>
          </button>

          <input
            ref={fileInput}
            type="file"
            accept="image/*"
            onChange={handleImageSelect}
            className="hidden"
          />
        </div>

        {/* Post */}
        <button
          type="submit"
          disabled={!preview}
          className="
            flex
            items-center
            gap-2
            rounded-xl
            bg-violet-600
            px-4
            py-2.5
            text-sm
            font-bold
            text-white
            shadow-sm
            transition
            hover:bg-violet-700
            hover:shadow-md
            disabled:cursor-not-allowed
            disabled:bg-slate-300
            disabled:text-slate-500
            disabled:shadow-none
            dark:disabled:bg-slate-700
            dark:disabled:text-slate-500
            sm:px-5
          "
        >
          <span>Post</span>
          <Send size={16} />
        </button>
      </div>
    </form>
  );
}