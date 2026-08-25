import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Warm Editorial Community: Home is the reading room—an asymmetric editorial column with a small margin of prompts and people.
import { Filter, SlidersHorizontal } from "lucide-react";
import { toast } from "sonner";
import { CreatePost } from "../components/CreatePost";
import { PostCard } from "../components/PostCard";
import { RightRail } from "../components/RightRail";
import { Stories } from "../components/Stories";
import { useApp } from "../context/AppContext";
export default function Home() {
    const { posts } = useApp();
    return _jsxs("div", { className: "page-grid home-grid", children: [_jsxs("main", { className: "feed-column", children: [_jsxs("div", { className: "page-intro", children: [_jsxs("div", { children: [_jsx("span", { className: "eyebrow", children: "Monday \u00B7 September 14, 2026" }), _jsx("h1", { children: "Make room for what caught your eye." })] }), _jsx("button", { className: "icon-button filter-button", onClick: () => toast("Feed preferences are coming soon"), "aria-label": "Feed preferences", children: _jsx(SlidersHorizontal, { size: 18 }) })] }), _jsx(Stories, {}), _jsx(CreatePost, {}), _jsxs("div", { className: "feed-toolbar", children: [_jsxs("div", { className: "feed-tabs", children: [_jsx("button", { className: "feed-tab is-active", children: "For you" }), _jsx("button", { className: "feed-tab", onClick: () => toast("Following feed is coming soon"), children: "Following" }), _jsx("button", { className: "feed-tab", onClick: () => toast("Latest feed is coming soon"), children: "Latest" })] }), _jsxs("button", { className: "sort-button", onClick: () => toast("Feed sorted by thoughtful"), children: ["Thoughtful ", _jsx(Filter, { size: 14 })] })] }), _jsx("div", { className: "post-list", children: posts.map((post, index) => _jsx(PostCard, { post: post }, post.id)) })] }), _jsx(RightRail, {})] });
}
