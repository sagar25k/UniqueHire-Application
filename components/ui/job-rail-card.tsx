"use client"

import React, { useRef, useState } from "react"
import { motion, useMotionValue, useReducedMotion } from "framer-motion"

interface JobRailCardProps {
  children: React.ReactNode
  accent?: "blue" | "orange"
  className?: string
}

const HEX = { blue: "#043b73", orange: "#FF6B00" } as const
const RGB = { blue: "4, 59, 115", orange: "255, 107, 0" } as const

/**
 * Glass job-listing row with an animated left accent rail and a
 * cursor-following sheen. Lifts on hover. Brand colors only,
 * reduced-motion safe. Wraps arbitrary row content.
 */
export function JobRailCard({ children, accent = "blue", className = "" }: JobRailCardProps) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const hex = HEX[accent]
  const rgb = RGB[accent]

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    mx.set(e.clientX - r.left)
    my.set(e.clientY - r.top)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={`group relative overflow-hidden rounded-2xl border border-white/50 bg-white/60 shadow-[0_8px_24px_rgba(2,23,53,0.06)] backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_18px_46px_rgba(2,23,53,0.15)] ${className}`}
    >
      {/* left accent rail — grows from top on hover */}
      <span aria-hidden className="pointer-events-none absolute left-0 top-0 h-full w-[3px] bg-black/5" />
      <motion.span
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 w-[3px] origin-top"
        style={{ background: `linear-gradient(to bottom, ${hex}, ${hex}00)`, height: "100%" }}
        initial={false}
        animate={{ scaleY: hovered && !reduce ? 1 : 0.18 }}
        transition={{ type: "spring", stiffness: 200, damping: 24 }}
      />
      {/* cursor sheen */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute h-48 w-48 rounded-full transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle, rgba(${rgb},0.14), transparent 65%)`,
          left: mx,
          top: my,
          translateX: "-50%",
          translateY: "-50%",
          opacity: hovered && !reduce ? 1 : 0,
        }}
      />
      <div className="relative">{children}</div>
    </motion.div>
  )
}

export default JobRailCard
