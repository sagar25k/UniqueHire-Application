"use client"

// Rendered client-side only (via dynamic ssr:false in hero-section) so that
// browser extensions injecting child nodes into <video> never cause a React 19
// hydration mismatch.
export function HeroVideo() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      className="h-full w-full object-cover"
    >
      <source
        src="https://assets.mixkit.co/videos/preview/mixkit-globe-of-the-world-spinning-in-space-11-large.mp4"
        type="video/mp4"
      />
    </video>
  )
}
