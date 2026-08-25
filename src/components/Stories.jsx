// Warm Editorial Community: stories borrow from a printed contact sheet—small framed moments with a tactile ring and no noisy chrome.

import { Plus } from "lucide-react";
import { toast } from "sonner";
import { stories } from "../data/mockData";

const fallbackImages = [
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=500&q=80",
];

export function Stories() {
  return (
    <section className="stories-card" aria-labelledby="stories-heading">
      <div className="section-heading compact-heading">
        <div><span className="eyebrow">A few moments</span><h2 id="stories-heading">Stories</h2></div>
        <button className="quiet-link" onClick={() => toast("You’re all caught up", { description: "New stories will gather here." })}>See all</button>
      </div>
      <div className="stories-scroll">
        {stories.map((story, index) => (
          <button className="story-item" key={story.id} onClick={() => toast(story.isOwn ? "Add to your story" : `Opening ${story.name}'s story`, { description: story.isOwn ? "A little corner for today’s view." : "Stories are short notes from the people you follow." })}>
            <span className={`story-image ${story.hasNew ? "has-new" : ""} ${story.isOwn ? "is-own" : ""}`}>
              <img src={story.image} alt="" onError={(event) => { event.currentTarget.src = fallbackImages[index % fallbackImages.length]; }} />
              {story.isOwn && <span className="story-add"><Plus size={14} /></span>}
            </span>
            <span>{story.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
