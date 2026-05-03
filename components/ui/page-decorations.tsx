"use client"

import { motion } from "framer-motion"

function Bubble({ x, y, sz, color, dur, delay = 0 }: {
  x: string; y: string; sz: number; color: string; dur: number; delay?: number
}) {
  return (
    <motion.div
      style={{
        position: "absolute", left: x, top: y,
        width: sz, height: sz, borderRadius: "50%",
        background: color, filter: "blur(1px)", pointerEvents: "none",
      }}
      animate={{ y: [0, -14, 0], scale: [1, 1.08, 1], opacity: [0.45, 0.75, 0.45] }}
      transition={{ duration: dur, repeat: Infinity, ease: "easeInOut", delay }}
    />
  )
}

// Subtle bubbles along the left and right margins so the sections
// feel alive without competing with section content.
export function PageDecorations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      {/* Left edge */}
      <Bubble x="1%"  y="6%"  sz={30} color="rgba(4,59,115,0.14)"  dur={4.5} delay={0}   />
      <Bubble x="0%"  y="28%" sz={20} color="rgba(255,107,0,0.13)" dur={5}   delay={1.5} />
      <Bubble x="1%"  y="52%" sz={26} color="rgba(4,59,115,0.12)"  dur={4}   delay={0.8} />
      <Bubble x="0%"  y="74%" sz={18} color="rgba(255,107,0,0.13)" dur={5.5} delay={2}   />
      <Bubble x="1%"  y="90%" sz={22} color="rgba(4,59,115,0.11)"  dur={4.2} delay={1}   />

      {/* Right edge */}
      <Bubble x="97%" y="10%" sz={28} color="rgba(255,107,0,0.13)" dur={5}   delay={0.3} />
      <Bubble x="98%" y="34%" sz={22} color="rgba(4,59,115,0.13)"  dur={4.5} delay={1}   />
      <Bubble x="97%" y="60%" sz={32} color="rgba(255,107,0,0.12)" dur={6}   delay={2.2} />
      <Bubble x="98%" y="82%" sz={18} color="rgba(4,59,115,0.14)"  dur={3.8} delay={0.5} />
    </div>
  )
}
