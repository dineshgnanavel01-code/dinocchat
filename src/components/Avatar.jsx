// Warm Editorial Community: avatars are small human signals, framed with restrained terracotta or moss accents rather than glossy UI effects.

const sizes = {
  sm: "avatar-size-sm",
  md: "avatar-size-md",
  lg: "avatar-size-lg",
  xl: "avatar-size-xl",
};

export function Avatar({ src, initials, alt, size = "md", ring = false, online = false, className = "" }) {
  return (
    <span className={`relative inline-flex shrink-0 ${className}`}>
      <span className={`avatar-shell ${sizes[size]} ${ring ? "avatar-ring" : ""}`}>
        {src ? <img src={src} alt={alt} /> : <span aria-hidden="true">{initials}</span>}
      </span>
      {online && <span className="status-dot" aria-label="Online" />}
    </span>
  );
}
