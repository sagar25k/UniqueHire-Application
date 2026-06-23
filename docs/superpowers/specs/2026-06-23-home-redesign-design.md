# Home Page Redesign — Design Spec

Date: 2026-06-23
Status: approved (scope + hero direction); detailed plan pending final sign-off after restart.

## Goal
Make the home (landing) page impressive, exotic, rich — premium UI with 3D effects and
animation. Full cohesive transform across every section, one shared design language.

## Hard constraints
- Colors locked to theme only: blue `#043b73`, orange `#FF6B00`, white. No other hues.
  (ui-ux-pro-max suggested navy/gold — overridden per user.)
- Font: Inter (confirmed by ui-ux-pro-max typography search).
- Preserve the navigation-latency work: routes stay static, no new WebGL, CSS/transform +
  framer motion values only. Re-measure nav after.
- `prefers-reduced-motion` respected everywhere.
- Anti-patterns to avoid (ui-ux-pro-max): AI purple/pink gradients, emoji icons, hover
  states that cause layout shift, glass too transparent in light mode (use >= bg-white/55).

## Approved decisions
- Scope: **full cohesive transform** of all home sections.
- Hero centerpiece: **keep the 3D node globe** (lazy-loaded), elevate around it; **drop the
  external Mixkit video** (latency + off-theme).
- Tooling: use **21st.dev Magic MCP** to generate component bases (requires Claude Code
  restart to load its tools) + **ui-ux-pro-max** skill guidance (CLI, already pulled).

## Shared design language
- **Ambient aurora**: slow-drifting blue/orange mesh-gradient blobs behind sections
  (CSS-only, no canvas), layered under existing OGL particles. New `AuroraBackground`.
- **Glass + beam + tilt + spotlight** vocabulary (from the new `GlassTiltCard` / industry
  HUD cards) reused for Services, Stats, Why-Choose surfaces. Glass >= bg-white/55,
  backdrop-blur 10-20px, 1px light border, layered shadow.
- **Scroll choreography**: header + cards reveal with depth (framer `useScroll` parallax
  y/scale), staggered. Smooth-scroll already enabled.
- **Magnetic CTAs**: primary buttons pull subtly toward cursor + sheen. New `MagneticButton`.
- Effects folded from ui-ux-pro-max: metric pulse, smooth stat reveal, badge hover.

## New reusable components / hooks
- `AuroraBackground` — ambient animated mesh background.
- `MagneticButton` — cursor-magnetic CTA with sheen.
- `ShimmerText` — animated gradient headline (blue→orange shimmer).
- `TiltCard` — generalized tilt/glass/spotlight primitive (from GlassTiltCard).
- `useScrollParallax` — small hook for scroll-driven y/scale.

## Per-section plan
1. **Hero** — drop video; aurora mesh + faint perspective grid floor; ShimmerText headline;
   replace plain stat row with floating glass stat chips (tilt); magnetic CTAs; keep globe.
2. **Services** — keep FlippingCards; set on glass + tilt/spotlight + accent beam to match
   industry cards.
3. **About** — layered parallax glass panels for the abstract shapes; animated checklist.
4. **Stats** — counters in glass tilt cards with accent glow rings (unify with industries).
5. **Industries** — DONE (HUD beveled glass cards) — the language anchor.
6. **Why Choose Us** — keep CardSwap; restyle reason cards as glass tilt + spotlight.
7. **Partners** — 3D perspective marquee (slight rotateX, depth fade) instead of flat scroll.
8. **CTA** — keep dark blue; aurora glow + animated beam border + magnetic button.

## Build order
Primitives (AuroraBackground, MagneticButton, ShimmerText, TiltCard, useScrollParallax)
→ Hero → section by section, committing + screenshotting each for approval.

## Verification
- `npm run build` clean each step (0 TS errors, routes static).
- chrome-devtools screenshots per section; confirm theme + interactions fire.
- Re-measure nav latency at the end; must not regress the static-route speed.

## Open items (unrelated, deferred)
- Footer social URLs + developer LinkedIn/GitHub (need real data).
- `.claude/skills/` commit-or-ignore decision.
