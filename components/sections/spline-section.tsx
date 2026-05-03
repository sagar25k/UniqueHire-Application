"use client"

import dynamic from "next/dynamic"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

// SSR-disabled — Spline uses browser-only WebGL APIs
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#020d1a]" />,
})

const SCENE = "https://prod.spline.design/Slk6b8kz3LRlKiyk/scene.splinecode"

export function SplineSection() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-[#020d1a]">

      {/* ── Spline 3D background ────────────────────────────────────────── */}
      <div className="absolute inset-0">
        <Spline scene={SCENE} className="w-full h-full" />
      </div>

      {/* ── Layered overlay — dark at bottom for text legibility,
              brand-blue glow mid-frame, transparent at top so the 3D
              scene breathes ──────────────────────────────────────────── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: [
            "linear-gradient(to top, #020d1a 0%, rgba(2,13,26,0.75) 28%, rgba(4,59,115,0.18) 55%, transparent 100%)",
            "radial-gradient(ellipse 70% 60% at 20% 90%, rgba(4,59,115,0.30) 0%, transparent 70%)",
          ].join(", "),
        }}
      />

      {/* ── Brand-orange subtle glow (bottom-left accent) ──────────────── */}
      <div
        className="absolute z-[1] pointer-events-none"
        style={{
          bottom: "-10%",
          left: "-5%",
          width: 400,
          height: 400,
          background: "rgba(255,107,0,0.12)",
          filter: "blur(90px)",
          borderRadius: "50%",
        }}
      />

      {/* ── Content — anchored bottom-left ─────────────────────────────── */}
      <div className="relative z-10 pointer-events-none w-full max-w-[90%] sm:max-w-md lg:max-w-2xl px-6 md:px-12 pb-12 md:pb-16 pt-32">

        {/* Badge */}
        <div
          className="opacity-0 animate-fade-up mb-5"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="font-sora inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 backdrop-blur-sm px-4 py-1.5 text-[11px] font-medium text-white/75 uppercase tracking-[0.18em]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B00] shrink-0" />
            IT Consulting &amp; Talent Solutions Since 2014
          </span>
        </div>

        {/* Main heading — "UNIQUE" white, "HIRE" orange */}
        <h2
          className="font-sora opacity-0 animate-fade-up font-bold uppercase leading-[1.0] tracking-[-0.04em] text-white mb-3 md:mb-4"
          style={{
            fontSize: "clamp(3rem, 8vw, 5.5rem)",
            animationDelay: "0.2s",
          }}
        >
          UNIQUE<span className="text-[#FF6B00]">HIRE</span>
        </h2>

        {/* Subheading */}
        <p
          className="font-sora opacity-0 animate-fade-up font-light text-white/80 mb-4 md:mb-5"
          style={{
            fontSize: "clamp(1.125rem, 2.5vw, 1.75rem)",
            lineHeight: 1.35,
            animationDelay: "0.4s",
          }}
        >
          We build teams that win.
        </p>

        {/* Description */}
        <p
          className="font-sora opacity-0 animate-fade-up font-light text-white/50 mb-7 md:mb-9 max-w-lg"
          style={{
            fontSize: "clamp(0.875rem, 1.4vw, 1.125rem)",
            lineHeight: 1.7,
            animationDelay: "0.55s",
          }}
        >
          Expert IT staffing, GCC setup &amp; product engineering for global enterprises.
          Hire the right talent, scale with zero compromise, and compete across 5 global
          locations — all delivered at speed.
        </p>

        {/* CTA buttons — pointer-events-auto re-enables clicks inside the
            pointer-events-none content wrapper */}
        <div
          className="font-sora opacity-0 animate-fade-up flex flex-wrap items-center gap-3"
          style={{ animationDelay: "0.7s" }}
        >
          {/* Primary — brand orange pill */}
          <Link href="/contact" className="pointer-events-auto">
            <button className="group flex items-center gap-2 bg-[#FF6B00] text-white font-semibold uppercase tracking-wide text-sm px-6 py-3 md:px-8 md:py-4 rounded-sm cursor-pointer hover:brightness-110 active:scale-[0.97] transition-all duration-200">
              Get Started Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </Link>

          {/* Secondary — white with brand-blue text */}
          <Link href="/services" className="pointer-events-auto">
            <button className="bg-white text-[#043b73] font-semibold uppercase tracking-wide text-sm px-6 py-3 md:px-8 md:py-4 rounded-sm cursor-pointer hover:brightness-95 active:scale-[0.97] transition-all duration-200 border border-white/20">
              Our Services
            </button>
          </Link>
        </div>

        {/* Trust line */}
        <p
          className="font-sora opacity-0 animate-fade-up font-light text-white/35 text-xs mt-6"
          style={{ animationDelay: "0.85s", letterSpacing: "0.04em" }}
        >
          Trusted staffing partner &nbsp;·&nbsp; Bangalore, Hyderabad, USA, Canada, UAE &nbsp;·&nbsp; 500+ placements
        </p>
      </div>

      {/* ── Subtle bottom border to visually separate from next section ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-px bg-gradient-to-r from-transparent via-[#043b73]/40 to-transparent" />
    </section>
  )
}
