"use client"

import React, { useRef } from "react"
import Link from "next/link"
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion"

interface MagneticButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  /** "primary" (filled blue) | "outline" */
  variant?: "primary" | "outline"
  className?: string
  /** how strongly the button follows the cursor (px) */
  strength?: number
}

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  strength = 14,
}: MagneticButtonProps) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 250, damping: 15 })
  const sy = useSpring(y, { stiffness: 250, damping: 15 })

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const mx = e.clientX - (rect.left + rect.width / 2)
    const my = e.clientY - (rect.top + rect.height / 2)
    x.set((mx / (rect.width / 2)) * strength)
    y.set((my / (rect.height / 2)) * strength)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  const base =
    "group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full px-8 text-base font-semibold transition-colors"
  const styles =
    variant === "primary"
      ? "bg-[#043b73] text-white shadow-lg shadow-[#043b73]/25 hover:bg-[#022d58]"
      : "border border-border bg-white/60 text-foreground backdrop-blur-sm hover:border-[#043b73]/50"

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={`${base} ${styles} ${className}`}
    >
      {/* sheen sweep */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]"
      />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.div>
  )

  if (href) {
    return (
      <Link href={href} onClick={onClick}>
        {inner}
      </Link>
    )
  }
  return (
    <button type="button" onClick={onClick} className="cursor-pointer">
      {inner}
    </button>
  )
}

export default MagneticButton
