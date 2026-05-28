## What's happening

Your live site `sonoransystemsai.com/industries` is throwing:

```
Failed to fetch dynamically imported module:
.../assets/industries-CyXnvZG0.js
```

That chunk filename (`industries-CyXnvZG0.js`) is from an **older published build**. Since then we've edited the industry demos (real-estate, restaurants, salons-wellness) and added auth/portal routes, so the new build produces different chunk hashes. Browsers loading a cached `index.html` from the old deploy still ask for the old chunk name, which no longer exists → 404 → "Try again" error boundary.

The dev preview is healthy (no Vite errors, all imports resolve), so this is purely a stale-publish issue, not a code bug.

## Plan

1. Republish the site so the live `index.html` references the current chunk hashes.
2. After republish, hard-refresh `sonoransystemsai.com/industries` once to clear the cached HTML.

No code changes needed. If after republishing the same error returns with a *different* chunk hash, that would indicate a real build/runtime issue and I'll dig into the industries route imports next.

## Action

Approve this plan and I'll surface the Publish button — clicking Publish will rebuild and redeploy.
