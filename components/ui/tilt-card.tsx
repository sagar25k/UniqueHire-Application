"use client"

import React, { useRef, useState } from "react"
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion"

interface TiltCardProps {
  children: React.ReactNode
  accent?: "blue" | "orange"
  className?: string
  /** inner padding utility, default p-6 */
  padding?: string
  maxTilt?: number
}

const RGB = { blue: "4, 59, 115", orange: "255, 107, 0" } as const

/**
 * Generic glass card with 3D pointer tilt + cursor spotlight.
 * Wraps arbitrary content. Brand colors only. Respects reduced motion.
 */
export function TiltCard({
  children,
  accent = "blue",
  className = "",
  padding = "p-6",
  maxTilt = 8,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const [hovered, setHovered] = useState(false)
  const rgb = RGB[accent]

  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const sx = useSpring(px, { stiffness: 220, damping: 18 })
  const sy = useSpring(py, { stiffness: 220, damping: 18 })
  const rotateY = useTransform(sx, [0, 1], [-maxTilt, maxTilt])
  const rotateX = useTransform(sy, [0, 1], [maxTilt, -maxTilt])
  const spotlight = useTransform(
    [px, py] as const,
    ([x, y]: number[]) =>
      `radial-gradient(240px circle at ${x * 100}% ${y * 100}%, rgba(${rgb}, 0.16), transparent 65%)`
  )

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    px.set((e.clientX - r.left) / r.width)
    py.set((e.clientY - r.top) / r.height)
  }
  const onLeave = () => {
    setHovered(false)
    px.set(0.5)
    py.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onLeave}
      style={{
        rotateX: reduce ? 0 : rotateX,
        rotateY: reduce ? 0 : rotateY,
        transformPerspective: 1000,
      }}
      whileHover={reduce ? undefined : { scale: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={`group relative h-full overflow-hidden rounded-2xl border border-white/50 bg-white/60 shadow-[0_8px_30px_rgba(2,23,53,0.08)] backdrop-blur-xl transition-shadow duration-500 [transform-style:preserve-3d] group-hover:shadow-[0_18px_50px_rgba(2,23,53,0.16)] ${className}`}
    >
      {/* accent corner wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full blur-3xl transition-opacity duration-500"
        style={{ background: `radial-gradient(circle, rgba(${rgb},0.20), transparent 70%)`, opacity: hovered ? 0.9 : 0.5 }}
      />
      {/* cursor spotlight */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{ opacity: hovered && !reduce ? 1 : 0, background: spotlight }}
      />
      {/* glossy top sheen */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/45 to-transparent" />
      <div className={`relative ${padding}`} style={{ transform: "translateZ(40px)" }}>
        {children}
      </div>
    </motion.div>
  )
}

export default TiltCard
