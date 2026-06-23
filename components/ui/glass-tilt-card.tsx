"use client"

import React, { useRef, useState } from "react"
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface GlassTiltCardProps {
  icon: LucideIcon
  title: string
  description: string
  /** "blue" | "orange" — drives the frame beam, glow ring and spotlight */
  accent?: "blue" | "orange"
  /** shown as a large faded watermark in the corner */
  index?: number
  className?: string
}

const ACCENTS = {
  blue: {
    rgb: "4, 59, 115", // #043b73
    hex: "#043b73",
    text: "text-[#043b73]",
  },
  orange: {
    rgb: "255, 107, 0", // #FF6B00
    hex: "#FF6B00",
    text: "text-[#FF6B00]",
  },
} as const

const MAX_TILT = 10 // degrees
// Beveled "HUD" frame — cut top-right + bottom-left corners (non-rectangular)
const CLIP =
  "polygon(0 0, calc(100% - 26px) 0, 100% 26px, 100% 100%, 26px 100%, 0 calc(100% - 26px))"

export function GlassTiltCard({
  icon: Icon,
  title,
  description,
  accent = "blue",
  index,
  className = "",
}: GlassTiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const [hovered, setHovered] = useState(false)
  const a = ACCENTS[accent]

  // pointer position 0..1 within the card
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const sx = useSpring(px, { stiffness: 220, damping: 18 })
  const sy = useSpring(py, { stiffness: 220, damping: 18 })

  const rotateY = useTransform(sx, [0, 1], [-MAX_TILT, MAX_TILT])
  const rotateX = useTransform(sy, [0, 1], [MAX_TILT, -MAX_TILT])

  // cursor spotlight gradient
  const spotlight = useTransform(
    [px, py] as const,
    ([x, y]: number[]) =>
      `radial-gradient(240px circle at ${x * 100}% ${y * 100}%, rgba(${a.rgb}, 0.18), transparent 65%)`
  )

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    px.set((e.clientX - rect.left) / rect.width)
    py.set((e.clientY - rect.top) / rect.height)
  }

  const handleLeave = () => {
    setHovered(false)
    px.set(0.5)
    py.set(0.5)
  }

  // traveling beam around the frame (rotated as a whole)
  const beam = `conic-gradient(from 0deg, transparent 0deg, rgba(${a.rgb},0.05) 60deg, ${a.hex} 95deg, rgba(${a.rgb},0.05) 130deg, transparent 190deg, transparent 360deg)`

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      style={{
        rotateX: reduceMotion ? 0 : rotateX,
        rotateY: reduceMotion ? 0 : rotateY,
        transformPerspective: 1000,
      }}
      whileHover={reduceMotion ? undefined : { scale: 1.03 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={`group relative h-full w-full [transform-style:preserve-3d] ${className}`}
    >
      {/* Outer frame: rotating beam clipped to the bevel shape (the hyperframe) */}
      <div
        className="relative flex h-full min-h-[170px] w-full overflow-hidden"
        style={{ clipPath: CLIP }}
      >
        {/* rotating beam layer */}
        <motion.div
          aria-hidden
          className="absolute -inset-[60%]"
          style={{ background: beam }}
          initial={false}
          animate={reduceMotion ? {} : { rotate: 360 }}
          transition={{ duration: hovered ? 4 : 9, ease: "linear", repeat: Infinity }}
        />
        {/* static soft frame tint so the beam reads even at rest */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: `rgba(${a.rgb}, 0.18)` }}
        />

        {/* Inner glass panel — in-flow flex child, margin reveals the beam as a thin frame */}
        <div
          className="relative z-[1] m-[1.5px] flex-1 overflow-hidden bg-white/65 backdrop-blur-xl"
          style={{ clipPath: CLIP }}
        >
          {/* accent corner wash */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full blur-3xl transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle, rgba(${a.rgb},0.22), transparent 70%)`,
              opacity: hovered ? 1 : 0.55,
            }}
          />

          {/* cursor spotlight */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 transition-opacity duration-300"
            style={{ opacity: hovered && !reduceMotion ? 1 : 0, background: spotlight }}
          />

          {/* glossy top sheen */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/55 to-transparent"
          />

          {/* big index watermark */}
          {index != null && (
            <span
              aria-hidden
              className="pointer-events-none absolute right-3 top-1 select-none text-6xl font-black leading-none tracking-tighter transition-opacity duration-500"
              style={{ color: `rgba(${a.rgb}, ${hovered ? 0.1 : 0.06})` }}
            >
              {String(index).padStart(2, "0")}
            </span>
          )}

          {/* content, lifted on a closer plane for parallax */}
          <div
            className="relative flex h-full flex-col p-6"
            style={{ transform: "translateZ(45px)" }}
          >
            {/* icon in a glowing well with a rotating conic ring */}
            <div className="relative mb-5 h-14 w-14">
              <motion.div
                aria-hidden
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: `conic-gradient(from 0deg, transparent, ${a.hex}, transparent 60%)`,
                  opacity: 0.7,
                }}
                animate={reduceMotion ? {} : { rotate: 360 }}
                transition={{ duration: hovered ? 3 : 8, ease: "linear", repeat: Infinity }}
              />
              <div
                className="absolute inset-[2px] flex items-center justify-center rounded-2xl border border-white/70 bg-white/85 shadow-sm backdrop-blur-sm"
              >
                <Icon className={`h-6 w-6 ${a.text}`} />
              </div>
            </div>

            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>

            {/* hover-reveal explore affordance */}
            <div className="mt-4 flex items-center gap-1.5 overflow-hidden">
              <span
                className={`text-xs font-bold uppercase tracking-widest ${a.text} translate-y-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100`}
              >
                Explore
              </span>
              <ArrowUpRight
                className={`h-4 w-4 ${a.text} translate-y-5 opacity-0 transition-all delay-75 duration-300 group-hover:translate-y-0 group-hover:opacity-100`}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default GlassTiltCard
