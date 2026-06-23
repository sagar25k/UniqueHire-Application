"use client"

import React from "react"
import { motion, useReducedMotion } from "framer-motion"

interface AuroraBackgroundProps {
  /** optional content rendered above the aurora */
  children?: React.ReactNode
  className?: string
  /** overall blob opacity (0-1) — tune per section */
  intensity?: number
}

// Brand-only palette: blue #043b73 + orange #FF6B00 over transparent.
const blobs = [
  { color: "rgba(4, 59, 115, 0.40)", size: 600, x: "12%", y: "18%", dx: ["0%", "18%", "4%", "0%"], dy: ["0%", "22%", "-8%", "0%"], duration: 26 },
  { color: "rgba(255, 107, 0, 0.32)", size: 700, x: "78%", y: "62%", dx: ["0%", "-20%", "6%", "0%"], dy: ["0%", "-28%", "10%", "0%"], duration: 31 },
  { color: "rgba(4, 59, 115, 0.28)", size: 540, x: "48%", y: "82%", dx: ["0%", "12%", "-12%", "0%"], dy: ["0%", "-18%", "6%", "0%"], duration: 29 },
  { color: "rgba(255, 107, 0, 0.22)", size: 640, x: "88%", y: "12%", dx: ["0%", "-12%", "6%", "0%"], dy: ["0%", "20%", "-6%", "0%"], duration: 34 },
]

export function AuroraBackground({ children, className = "", intensity = 1 }: AuroraBackgroundProps) {
  const reduce = useReducedMotion()

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ opacity: intensity }}
      >
        {blobs.map((b, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: b.size,
              height: b.size,
              left: b.x,
              top: b.y,
              transform: "translate(-50%, -50%)",
              background: `radial-gradient(circle, ${b.color} 0%, transparent 70%)`,
              filter: "blur(80px)",
              willChange: "transform",
            }}
            animate={reduce ? {} : { x: b.dx, y: b.dy }}
            transition={reduce ? {} : { duration: b.duration, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>
      {children != null && <div className="relative z-10">{children}</div>}
    </div>
  )
}

export default AuroraBackground
