"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import dynamic from "next/dynamic"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RevealText } from "@/components/ui/reveal-text"

// Lazy-load the canvas globe so it doesn't block the hero text from painting
const AnimatedGlobe = dynamic(
  () => import("@/components/animated-globe").then((m) => ({ default: m.AnimatedGlobe })),
  { ssr: false, loading: () => <div className="h-full w-full" /> }
)

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20 border-b border-border shadow-sm">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="h-full w-full object-cover"
          suppressHydrationWarning
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-globe-of-the-world-spinning-in-space-11-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/80 dark:bg-background/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col items-center justify-center gap-8 px-4 lg:flex-row lg:gap-16 lg:px-8">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#043b73]/20 bg-[#043b73]/10 px-4 py-2 text-sm font-medium text-[#043b73]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#FF6B00]" />
              Established 2014 • Global Presence
            </span>
          </motion.div>

          <div className="mt-8 mb-4 w-full text-center lg:text-left">
            <RevealText
              text="Empowering GCCs in India with UniqueHire's Expertise in Talent Acquisition"
              textColor="text-foreground"
              overlayColor="text-[#043b73]"
              fontSize="text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:leading-tight"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed lg:text-xl"
          >
            We provide cutting-edge IT consulting and professional services to global clients. Build strong teams, scale globally, and compete in modern markets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-[#043b73] px-8 text-white shadow-lg shadow-[#043b73]/20 hover:bg-[#022d58] hover:shadow-[#043b73]/40 transition-all rounded-full h-12"
              >
                <span className="relative z-10 flex items-center font-semibold text-base">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="group relative px-8 border-border hover:bg-muted/50 hover:border-[#043b73]/50 transition-all rounded-full shadow-sm h-12"
              >
                <Play className="mr-2 h-4 w-4 text-[#FF6B00] group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-base">Learn More</span>
              </Button>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
            className="mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:justify-start"
          >
            <div className="flex flex-col items-center lg:items-start">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#043b73]">500+</p>
              <p className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-[0.2em] mt-1">Employees</p>
            </div>
            <div className="h-10 sm:h-12 w-px bg-border/50 hidden md:block" />
            <div className="flex flex-col items-center lg:items-start">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#FF6B00]">10+</p>
              <p className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-[0.2em] mt-1">Years Exp.</p>
            </div>
            <div className="h-10 sm:h-12 w-px bg-border/50 hidden md:block" />
            <div className="flex flex-col items-center lg:items-start">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#043b73]">5</p>
              <p className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-[0.2em] mt-1">Global Loc.</p>
            </div>
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
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
