"use client"

import React from "react"
import { motion, useReducedMotion, type Variants } from "framer-motion"

interface WordRevealProps {
  text: string
  /** number of trailing words to render with the blue→orange shimmer */
  shimmerWords?: number
  className?: string
}

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const word: Variants = {
  hidden: { opacity: 0, y: 14, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
}

/**
 * Word-by-word blur-up reveal. Each word fades in, un-blurs and rises in
 * sequence. The last `shimmerWords` words get an animated blue→orange
 * gradient shimmer. Reduced-motion -> plain static text.
 */
export function WordReveal({ text, shimmerWords = 0, className = "" }: WordRevealProps) {
  const reduce = useReducedMotion()
  const words = text.split(" ")
  const shimmerStart = words.length - shimmerWords

  if (reduce) {
    return (
      <h1 className={className}>
        {words.map((w, i) =>
          i >= shimmerStart && shimmerWords > 0 ? (
            <span key={i} className="text-[#FF6B00]">
              {w}{i < words.length - 1 ? " " : ""}
            </span>
          ) : (
            <span key={i}>{w}{i < words.length - 1 ? " " : ""}</span>
          )
        )}
      </h1>
    )
  }

  return (
    <motion.h1
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
      aria-label={text}
    >
      {words.map((w, i) => {
        const isShimmer = shimmerWords > 0 && i >= shimmerStart
        return (
          <motion.span
            key={i}
            variants={word}
            aria-hidden
            className="inline-block"
            style={{ marginRight: i < words.length - 1 ? "0.25em" : 0 }}
          >
            {isShimmer ? (
              <motion.span
                className="inline-block bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(110deg, #043b73 0%, #043b73 30%, #FF6B00 50%, #043b73 70%, #043b73 100%)",
                  backgroundSize: "200% 100%",
                }}
                animate={{ backgroundPosition: ["200% 0%", "-200% 0%"] }}
                transition={{ duration: 6, ease: "linear", repeat: Infinity }}
              >
                {w}
              </motion.span>
            ) : (
              w
            )}
          </motion.span>
        )
      })}
    </motion.h1>
  )
}

export default WordReveal
