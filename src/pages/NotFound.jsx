// Warm Editorial Community: even an empty page keeps the journal’s tone—clear direction, soft paper, and an easy way back.

import { ArrowLeft, Sun } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return <main className="not-found-page"><span className="brand-symbol large-symbol"><Sun size={25} /></span><span className="eyebrow">A page left blank</span><h1>Nothing here yet.</h1><p>The note you’re looking for may have moved, or it may still be taking shape.</p><Link href="/" className="primary-button"><ArrowLeft size={16} /> Return to the feed</Link></main>;
}
