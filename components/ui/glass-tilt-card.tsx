"use client"

import React, { useRef, useState } from "react"
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion"
import type { LucideIcon } from "lucide-react"

export interface GlassTiltCardProps {
  icon: LucideIcon
  title: string
  description: string
  /** "blue" | "orange" — drives accent wash, icon tile and spotlight colour */
  accent?: "blue" | "orange"
  className?: string
}

const ACCENTS = {
  blue: {
    rgb: "4, 59, 115", // #043b73
    text: "text-[#043b73]",
    tile: "bg-[#043b73]/10",
  },
  orange: {
    rgb: "255, 107, 0", // #FF6B00
    text: "text-[#FF6B00]",
    tile: "bg-[#FF6B00]/10",
  },
} as const

const MAX_TILT = 9 // degrees

export function GlassTiltCard({
  icon: Icon,
  title,
  description,
  accent = "blue",
  className = "",
}: GlassTiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const [hovered, setHovered] = useState(false)
  const a = ACCENTS[accent]

  // pointer position 0..1 within the card
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)

  // springs for smooth settle
  const sx = useSpring(px, { stiffness: 220, damping: 18 })
  const sy = useSpring(py, { stiffness: 220, damping: 18 })

  const rotateY = useTransform(sx, [0, 1], [-MAX_TILT, MAX_TILT])
  const rotateX = useTransform(sy, [0, 1], [MAX_TILT, -MAX_TILT])

  // cursor spotlight as a single background gradient motion value
  const spotlight = useTransform(
    [px, py] as const,
    ([x, y]: number[]) =>
      `radial-gradient(220px circle at ${x * 100}% ${y * 100}%, rgba(${a.rgb}, 0.16), transparent 65%)`
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

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      style={{
        rotateX: reduceMotion ? 0 : rotateX,
        rotateY: reduceMotion ? 0 : rotateY,
        transformPerspective: 900,
      }}
      whileHover={reduceMotion ? undefined : { scale: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={`group relative h-full w-full rounded-2xl [transform-style:preserve-3d] ${className}`}
    >
      {/* Glass surface */}
      <div className="relative h-full overflow-hidden rounded-2xl border border-white/50 bg-white/55 shadow-[0_8px_30px_rgba(2,23,53,0.08)] backdrop-blur-xl transition-shadow duration-500 group-hover:shadow-[0_18px_50px_rgba(2,23,53,0.16)]">
        {/* Accent corner wash */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle, rgba(${a.rgb}, 0.20), transparent 70%)`,
            opacity: hovered ? 0.9 : 0.5,
          }}
        />

        {/* Cursor spotlight */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: hovered && !reduceMotion ? 1 : 0,
            background: spotlight,
          }}
        />

        {/* Glossy top sheen */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/40 to-transparent"
        />

        {/* Content (lifted on a closer plane for parallax) */}
        <div
          className="relative flex items-start gap-4 p-6"
          style={{ transform: "translateZ(40px)" }}
        >
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/60 ${a.tile} shadow-sm`}
          >
            <Icon className={`h-6 w-6 ${a.text}`} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default GlassTiltCard
