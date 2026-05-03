"use client"

import { motion } from "framer-motion"

// Organic blob morphing via border-radius keyframes
const CSS = `
  @keyframes blob-morph {
    0%, 100% { border-radius: 58% 42% 35% 65% / 55% 35% 65% 45%; }
    33%       { border-radius: 35% 65% 65% 35% / 45% 65% 35% 55%; }
    66%       { border-radius: 65% 35% 45% 55% / 35% 55% 65% 45%; }
  }
  .blob-a { animation: blob-morph 14s ease-in-out 0s  infinite; }
  .blob-b { animation: blob-morph 18s ease-in-out 4s  infinite reverse; }
  .blob-c { animation: blob-morph 11s ease-in-out 7s  infinite; }
  .blob-d { animation: blob-morph 16s ease-in-out 2s  infinite reverse; }
`

// Floating bubble — solid or outlined
function Bubble({ x, y, sz, color, dur, delay = 0, outline = false }: {
  x: string; y: string; sz: number; color: string; dur: number; delay?: number; outline?: boolean
}) {
  return (
    <motion.div
      style={{
        position: "absolute",
        left: x, top: y,
        width: sz, height: sz,
        borderRadius: "50%",
        background: outline ? "transparent" : color,
        border: outline ? `2px solid ${color}` : "none",
        pointerEvents: "none",
      }}
      animate={{
        y: [0, -20, 0],
        scale: [1, 1.07, 1],
        opacity: outline ? [0.22, 0.42, 0.22] : [0.55, 0.9, 0.55],
      }}
      transition={{ duration: dur, repeat: Infinity, ease: "easeInOut", delay }}
    />
  )
}

// Dashed rotating ring
function Ring({ x, y, r, color, dur, ccw = false }: {
  x: string; y: string; r: number; color: string; dur: number; ccw?: boolean
}) {
  const d = r * 2 + 8
  return (
    <motion.div
      style={{ position: "absolute", left: x, top: y, pointerEvents: "none" }}
      animate={{ rotate: ccw ? -360 : 360 }}
      transition={{ duration: dur, repeat: Infinity, ease: "linear" }}
    >
      <svg width={d} height={d} viewBox={`0 0 ${d} ${d}`}>
        <circle cx={d / 2} cy={d / 2} r={r} fill="none"
          stroke={color} strokeWidth="1.5" strokeDasharray="7 5" opacity="0.28" />
      </svg>
    </motion.div>
  )
}

export function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <style>{CSS}</style>

      {/* ── White canvas ──────────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-white" />

      {/* ── Soft colour wash (large radial zones, no hard edges) ──────── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: [
          "radial-gradient(ellipse 55% 50% at 82% 14%, rgba(4,59,115,0.11) 0%, transparent 100%)",
          "radial-gradient(ellipse 50% 45% at 14% 82%, rgba(255,107,0,0.10) 0%, transparent 100%)",
          "radial-gradient(ellipse 38% 38% at 50% 48%, rgba(147,197,253,0.08) 0%, transparent 100%)",
          "radial-gradient(ellipse 30% 35% at 70% 70%, rgba(255,107,0,0.06) 0%, transparent 100%)",
        ].join(", ")
      }} />

      {/* ── Morphing blobs (large, blurred, add colour depth) ─────────── */}
      {/* Blue blob — top right */}
      <div className="blob-a absolute pointer-events-none" style={{
        width: 420, height: 420, top: "-12%", right: "-8%",
        background: "radial-gradient(circle, rgba(4,59,115,0.16) 0%, rgba(4,59,115,0.04) 55%, transparent 80%)",
        filter: "blur(48px)",
      }} />
      {/* Orange blob — bottom left */}
      <div className="blob-b absolute pointer-events-none" style={{
        width: 360, height: 360, bottom: "-8%", left: "-6%",
        background: "radial-gradient(circle, rgba(255,107,0,0.15) 0%, rgba(255,107,0,0.04) 55%, transparent 80%)",
        filter: "blur(42px)",
      }} />
      {/* Sky-blue accent — centre */}
      <div className="blob-c absolute pointer-events-none" style={{
        width: 260, height: 260, top: "30%", left: "36%",
        background: "radial-gradient(circle, rgba(56,189,248,0.10) 0%, transparent 75%)",
        filter: "blur(36px)",
      }} />
      {/* Orange accent — top left */}
      <div className="blob-d absolute pointer-events-none" style={{
        width: 200, height: 200, top: "5%", left: "5%",
        background: "radial-gradient(circle, rgba(255,107,0,0.09) 0%, transparent 75%)",
        filter: "blur(30px)",
      }} />

      {/* ── Motion bubbles — BLUE ─────────────────────────────────────── */}
      <Bubble x="7%"  y="10%" sz={60} color="rgba(4,59,115,0.17)"  dur={4.5} delay={0}   />
      <Bubble x="13%" y="52%" sz={32} color="rgba(4,59,115,0.22)"  dur={5.5} delay={1}   />
      <Bubble x="4%"  y="35%" sz={20} color="rgba(4,59,115,0.28)"  dur={3.8} delay={2}   />
      <Bubble x="72%" y="74%" sz={44} color="rgba(4,59,115,0.15)"  dur={6}   delay={0.5} />
      <Bubble x="84%" y="48%" sz={24} color="rgba(4,59,115,0.20)"  dur={4}   delay={1.5} />
      <Bubble x="30%" y="82%" sz={16} color="rgba(4,59,115,0.26)"  dur={3.5} delay={2.5} />

      {/* ── Motion bubbles — ORANGE ───────────────────────────────────── */}
      <Bubble x="87%" y="16%" sz={54} color="rgba(255,107,0,0.17)" dur={5}   delay={0.8} />
      <Bubble x="77%" y="33%" sz={30} color="rgba(255,107,0,0.22)" dur={4.2} delay={1.8} />
      <Bubble x="91%" y="64%" sz={18} color="rgba(255,107,0,0.28)" dur={3.5} delay={0.3} />
      <Bubble x="54%" y="86%" sz={38} color="rgba(255,107,0,0.15)" dur={5.5} delay={2.2} />

      {/* ── Outlined bubble rings ─────────────────────────────────────── */}
      <Bubble x="19%" y="22%"  sz={76} color="rgba(4,59,115,0.30)"  dur={6.5} delay={1}   outline />
      <Bubble x="63%" y="8%"   sz={54} color="rgba(255,107,0,0.32)" dur={7}   delay={2}   outline />
      <Bubble x="38%" y="62%"  sz={48} color="rgba(4,59,115,0.25)"  dur={5.2} delay={0.5} outline />
      <Bubble x="80%" y="80%"  sz={64} color="rgba(255,107,0,0.25)" dur={6}   delay={1.5} outline />

      {/* ── Dashed rotating rings ─────────────────────────────────────── */}
      <Ring x="59%"  y="4%"  r={72}  color="#043b73" dur={26}      />
      <Ring x="-4%"  y="20%" r={108} color="#FF6B00" dur={34} ccw  />
      <Ring x="75%"  y="66%" r={58}  color="#043b73" dur={20}      />
      <Ring x="26%"  y="70%" r={40}  color="#FF6B00" dur={16} ccw  />
    </div>
  )
}
