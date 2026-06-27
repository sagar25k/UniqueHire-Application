"use client"

import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import { ArrowRight, Play } from "lucide-react"
import { WordReveal } from "@/components/ui/word-reveal"
import { MagneticButton } from "@/components/ui/magnetic-button"

// Lazy-load the canvas globe so it doesn't block the hero text from painting
const AnimatedGlobe = dynamic(
  () => import("@/components/animated-globe").then((m) => ({ default: m.AnimatedGlobe })),
  { ssr: false, loading: () => <div className="h-full w-full" /> }
)

const stats = [
  { value: "500+", label: "Employees", accent: "#043b73" },
  { value: "10+", label: "Years Exp.", accent: "#FF6B00" },
  { value: "5", label: "Global Loc.", accent: "#043b73" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28 sm:pt-32">
      {/* Perspective grid floor (global aurora background shows through) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(4,59,115,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(4,59,115,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 100%, black 0%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 100%, black 0%, transparent 75%)",
          transform: "perspective(600px) rotateX(60deg) translateY(40%) scale(1.6)",
          transformOrigin: "center bottom",
        }}
      />
      {/* soft readability scrim behind the left text column only */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 60% 70% at 28% 45%, rgba(255,255,255,0.75), transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-9rem)] max-w-7xl flex-col items-center justify-center gap-8 px-4 lg:flex-row lg:gap-16 lg:px-8">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#043b73]/20 bg-white/60 px-4 py-2 text-sm font-medium text-[#043b73] backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#FF6B00]" />
              Established 2014 • Global Presence
            </span>
          </motion.div>

          <div className="mt-8 mb-4 w-full text-center lg:text-left">
            <WordReveal
              text="Empowering GCCs in India with UniqueHire's Expertise in Talent Acquisition"
              shimmerWords={2}
              className="text-2xl font-bold text-foreground sm:text-3xl md:text-4xl lg:text-5xl lg:leading-tight text-balance"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground lg:text-xl"
          >
            We provide cutting-edge IT consulting and professional services to global clients. Build strong teams, scale globally, and compete in modern markets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
          >
            <MagneticButton href="/contact" variant="primary">
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton href="/about" variant="outline">
              <Play className="h-4 w-4 text-[#FF6B00] transition-transform group-hover:scale-110" />
              Learn More
            </MagneticButton>
          </motion.div>

          {/* Floating glass stat chips */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
            className="mt-14 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                whileHover={{ y: -4, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="flex flex-col items-center rounded-2xl border border-white/50 bg-white/55 px-5 py-3 shadow-[0_8px_24px_rgba(2,23,53,0.08)] backdrop-blur-xl lg:items-start"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <p className="text-2xl font-extrabold sm:text-3xl" style={{ color: s.accent }}>
                  {s.value}
                </p>
                <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right — 3D Globe */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-[400px] w-full flex-1 lg:h-[600px]"
        >
          <AnimatedGlobe />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground">Scroll to explore</span>
          <div className="h-10 w-6 rounded-full border-2 border-muted-foreground/30 p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-2 w-2 rounded-full bg-[#043b73]"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
