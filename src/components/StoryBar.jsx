// Warm Editorial Community: the story bar is a horizontal contact sheet of small observations, with a clear own-story affordance.

import { useState } from "react";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import { stories } from "../data/mockData";
import StoryViewer from "./StoryViewer";

const fallbackImage = "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=500&q=80";

export default function StoryBar() {
  const [activeStory, setActiveStory] = useState(null);
  return <><section className="stories-card" aria-labelledby="stories-heading"><div className="section-heading compact-heading"><div><span className="eyebrow">A few moments</span><h2 id="stories-heading">Stories</h2></div><button className="quiet-link" onClick={() => toast("You’re all caught up", { description: "New stories will gather here." })}>See all</button></div><div className="stories-scroll">{stories.map((story) => <button className="story-item" key={story.id} onClick={() => story.isOwn ? toast("Add to your story", { description: "A little corner for today’s view." }) : setActiveStory(story)}><span className={`story-image ${story.hasNew ? "has-new" : ""} ${story.isOwn ? "is-own" : ""}`}><img src={story.image} alt="" onError={(event) => { event.currentTarget.src = fallbackImage; }} />{story.isOwn && <span className="story-add"><Plus size={14} /></span>}</span><span>{story.name}</span></button>)}</div></section><StoryViewer story={activeStory} onClose={() => setActiveStory(null)} onChange={setActiveStory} /></>;
}
