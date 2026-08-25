# Dinoc mobile alignment findings

The mobile Home view originally showed an oversized blank area below the fixed top navigation because both `.app-body` and `.route-content` reserved the 68px mobile navbar height. The correction keeps the clearance on `.app-body` and sets `.route-content` top padding to zero on mobile.

The mobile Home layout now uses a compact top rhythm: the kicker sits directly under the navbar, the heading and filter control share an aligned intro row, the city metrics wrap into a readable two-column strip, and the Stories card appears before the fixed bottom navigation with sufficient clearance. Messages uses the same corrected shell offset and now starts immediately below the top bar.

The mobile screenshot pass at 458x752 showed no duplicated top gap, readable heading wrapping, aligned story circles, a stable fixed bottom nav, and no visible scrollbar chrome. A final production build and desktop/tablet smoke check remain before checkpointing.
