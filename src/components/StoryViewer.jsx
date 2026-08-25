// Warm Editorial Community: a story is a short lived page—full attention, strong image framing, and a gentle exit.

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { stories } from "../data/mockData";

export default function StoryViewer({ story, onClose, onChange }) {
  if (!story) return null;
  const index = stories.findIndex((item) => item.id === story.id);
  return <div className="story-viewer-backdrop"><section className="story-viewer" role="dialog" aria-modal="true" aria-label={`${story.name}'s story`}><button className="story-close icon-button" onClick={onClose} aria-label="Close story"><X size={20} /></button><img src={story.image} alt="" /><div className="story-viewer-scrim" /><div className="story-viewer-meta"><span className="eyebrow">A moment from</span><h2>{story.name}</h2><p>Somewhere worth looking twice.</p></div><button className="story-next story-arrow" disabled={index === 0} onClick={() => onChange(stories[index - 1])} aria-label="Previous story"><ChevronLeft size={22} /></button><button className="story-next story-arrow right" disabled={index === stories.length - 1} onClick={() => onChange(stories[index + 1])} aria-label="Next story"><ChevronRight size={22} /></button></section></div>;
}
