"use client"

import { useRef } from "react"
import {
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion"

/**
 * Scroll-driven parallax. Maps an element's progress through the viewport
 * to a vertical offset. Returns a ref to attach and a `y` MotionValue.
 * Returns y = 0 (static) under prefers-reduced-motion.
 */
export function useScrollParallax(distance = 60): {
  ref: React.RefObject<HTMLDivElement | null>
  y: MotionValue<number>
} {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [distance, -distance])
  return { ref, y }
}
