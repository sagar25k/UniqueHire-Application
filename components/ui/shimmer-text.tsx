"use client"

import React from "react"
import { motion, useReducedMotion } from "framer-motion"

interface ShimmerTextProps {
  children: React.ReactNode
  className?: string
  /** when true, render an animated blue→orange shimmer gradient fill */
  shimmer?: boolean
}

/**
 * Gradient headline with an animated light sweep across the text.
 * Brand colors only (blue #043b73 → orange #FF6B00). Falls back to a
 * static gradient under prefers-reduced-motion.
 */
export function ShimmerText({ children, className = "", shimmer = true }: ShimmerTextProps) {
  const reduce = useReducedMotion()

  return (
    <motion.span
      className={`inline-block bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(110deg, #043b73 0%, #043b73 35%, #FF6B00 50%, #043b73 65%, #043b73 100%)",
        backgroundSize: "200% 100%",
      }}
      animate={reduce || !shimmer ? { backgroundPosition: "0% 0%" } : { backgroundPosition: ["200% 0%", "-200% 0%"] }}
      transition={reduce || !shimmer ? undefined : { duration: 6, ease: "linear", repeat: Infinity }}
    >
      {children}
    </motion.span>
  )
}

export default ShimmerText
