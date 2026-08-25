import { useState } from "react";
import { Plus } from "lucide-react";

import { stories } from "../data/mockData";
import { useAuth } from "../context/AuthContext";

import StoryViewer from "./StoryViewer";

export default function StoryBar() {
  const { user } = useAuth();

  const [list, setList] = useState(stories);
  const [selected, setSelected] = useState(null);

  const avatar =
    user?.avatar ||
    "https://i.pravatar.cc/150?img=12";

  const addStory = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const imageUrl = URL.createObjectURL(file);

    const newStory = {
      id: Date.now(),
      username: "Your story",
      avatar,
      image: imageUrl,
    };

    setList((current) => [
      newStory,
      ...current,
    ]);

    event.target.value = "";
  };

  return (
    <>
      {/* Story Bar */}
      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="flex gap-4 overflow-x-auto pb-1">

          {/* Your Story */}
          <label className="group min-w-20 cursor-pointer text-center">
            <input
              type="file"
              accept="image/*"
              onChange={addStory}
              className="hidden"
            />

            <div className="relative mx-auto h-16 w-16">
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-violet-400 transition duration-300 group-hover:scale-105 group-hover:border-violet-600" />

              {/* Avatar */}
              <div className="absolute inset-1 rounded-full bg-slate-100 p-0.5 dark:bg-slate-800">
                <img
                  src={avatar}
                  alt="Your story"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>

              {/* Add Button */}
              <span className="absolute bottom-0 right-0 grid h-6 w-6 place-items-center rounded-full border-2 border-white bg-violet-600 text-white shadow-md dark:border-slate-900">
                <Plus
                  size={13}
                  strokeWidth={3}
                />
              </span>
            </div>

            <p className="mt-2 truncate text-xs font-semibold text-slate-700 dark:text-slate-300">
              Your story
            </p>
          </label>

          {/* Stories */}
          {list.map((story) => (
            <button
              key={story.id}
              type="button"
              onClick={() => setSelected(story)}
              className="group min-w-20 text-center"
            >
              <div className="mx-auto h-16 w-16 rounded-full bg-violet-600 p-0.5 shadow-md transition duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-violet-500/20">
                <div className="h-full w-full rounded-full bg-white p-0.5 dark:bg-slate-900">
                  <img
                    src={story.avatar}
                    alt={story.username}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
              </div>

              <p className="mt-2 max-w-20 truncate text-xs font-semibold text-slate-600 transition group-hover:text-violet-600 dark:text-slate-400 dark:group-hover:text-violet-400">
                {story.username}
              </p>
            </button>
          ))}

        </div>
      </section>

      {/* Story Viewer */}
      {selected && (
        <StoryViewer
          story={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
}