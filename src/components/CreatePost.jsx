import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Warm Editorial Community: the composer should feel like opening a fresh page—low pressure, specific prompts, and a clear terracotta action.
import { ImagePlus, MapPin, Send, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { useApp } from "../context/AppContext";
import { Avatar } from "./Avatar";
export function CreatePost() {
    const { currentUser, composerDraft, setComposerDraft, publishPost } = useApp();
    const submit = () => {
        if (!composerDraft.trim()) {
            toast("Start with a sentence", { description: "What caught your eye today?" });
            return;
        }
        publishPost(composerDraft);
        toast("Note shared", { description: "Your small wonder is now part of the commonplace." });
    };
    return _jsxs("section", { className: "composer-card", "aria-labelledby": "composer-heading", children: [_jsxs("div", { className: "composer-top", children: [_jsx(Avatar, { src: currentUser.avatar, initials: currentUser.initials, alt: currentUser.name, size: "md" }), _jsxs("div", { children: [_jsx("span", { className: "eyebrow", children: "A blank space" }), _jsx("h2", { id: "composer-heading", children: "What are you noticing?" })] })] }), _jsx("textarea", { value: composerDraft, onChange: (event) => setComposerDraft(event.target.value), placeholder: "A thought, a view, a question worth carrying...", rows: 3, "aria-label": "Write a new note" }), _jsxs("div", { className: "composer-bottom", children: [_jsxs("div", { className: "composer-tools", children: [_jsxs("button", { className: "tool-button", onClick: () => toast("Photo picker is coming soon", { description: "For now, let the words lead." }), children: [_jsx(ImagePlus, { size: 17 }), " ", _jsx("span", { children: "Photo" })] }), _jsxs("button", { className: "tool-button", onClick: () => toast("Location is coming soon", { description: "Your note can stay right where it is." }), children: [_jsx(MapPin, { size: 17 }), " ", _jsx("span", { children: "Place" })] }), _jsxs("button", { className: "tool-button", onClick: () => setComposerDraft("Today I’m making room for "), children: [_jsx(Sparkles, { size: 17 }), " ", _jsx("span", { children: "Prompt" })] })] }), _jsxs("button", { className: "primary-button compose-submit", onClick: submit, children: [_jsx(Send, { size: 15 }), " Share note"] })] })] });
}
