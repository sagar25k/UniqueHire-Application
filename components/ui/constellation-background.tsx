"use client"

import { useEffect, useRef } from "react"
import { motion, useReducedMotion } from "framer-motion"

/**
 * Site-wide animated background — Aurora mesh + constellation network.
 * A clearly-tinted (not white) base, large flowing blue/orange gradient
 * blobs that drift + breathe (aurora), and a constellation canvas of
 * drifting linked nodes that react to the cursor, layered on top.
 * Brand palette only. Perf: transform-animated blobs (GPU), DPR-capped
 * canvas, pauses when hidden, static for prefers-reduced-motion.
 */

// large flowing aurora blobs
const blobs = [
  { color: "rgba(4,59,115,0.55)",  size: "46vw", x: "-6%", y: "-8%",  mx: ["0%", "26%", "8%", "0%"],  my: ["0%", "18%", "-10%", "0%"], dur: 18 },
  { color: "rgba(255,107,0,0.45)", size: "44vw", x: "70%", y: "55%",  mx: ["0%", "-24%", "8%", "0%"], my: ["0%", "-22%", "10%", "0%"], dur: 22 },
  { color: "rgba(56,189,248,0.40)",size: "38vw", x: "55%", y: "-12%", mx: ["0%", "-18%", "10%", "0%"],my: ["0%", "22%", "6%", "0%"],  dur: 20 },
  { color: "rgba(255,107,0,0.35)", size: "34vw", x: "8%",  y: "62%",  mx: ["0%", "18%", "-10%", "0%"],my: ["0%", "-16%", "8%", "0%"], dur: 24 },
  { color: "rgba(4,59,115,0.40)",  size: "40vw", x: "82%", y: "8%",   mx: ["0%", "-14%", "6%", "0%"], my: ["0%", "20%", "-8%", "0%"], dur: 26 },
]

export function ConstellationBackground() {
  const reduce = useReducedMotion()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    const DPR = Math.min(window.devicePixelRatio || 1, 1.5)
    const BLUE = [4, 59, 115]
    const ORANGE = [255, 107, 0]
    const LINK_DIST = 150
    const MOUSE_DIST = 190

    type Node = { x: number; y: number; vx: number; vy: number; r: number; c: number[]; ph: number }
    let nodes: Node[] = []
    let w = 0, h = 0
    const mouse = { x: -9999, y: -9999 }
    const rand = (a: number, b: number) => a + Math.random() * (b - a)

    const build = () => {
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = Math.floor(w * DPR)
      canvas.height = Math.floor(h * DPR)
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
      const count = Math.min(110, Math.max(36, Math.floor((w * h) / 18000)))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: rand(-0.25, 0.25),
        vy: rand(-0.25, 0.25),
        r: rand(1.4, 3),
        c: Math.random() > 0.5 ? ORANGE : BLUE,
        ph: Math.random() * Math.PI * 2,
      }))
    }

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h)
      for (const n of nodes) {
        if (!reduceMotion) {
          n.x += n.vx; n.y += n.vy
          if (n.x < 0 || n.x > w) n.vx *= -1
          if (n.y < 0 || n.y > h) n.vy *= -1
          const dx = mouse.x - n.x, dy = mouse.y - n.y
          const d = Math.hypot(dx, dy)
          if (d < MOUSE_DIST && d > 0.1) {
            const f = (1 - d / MOUSE_DIST) * 0.5
            n.x += (dx / d) * f; n.y += (dy / d) * f
          }
        }
      }
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const d = Math.hypot(dx, dy)
          if (d < LINK_DIST) {
            const c = a.c
            ctx.strokeStyle = `rgba(${c[0]},${c[1]},${c[2]},${(1 - d / LINK_DIST) * 0.7})`
            ctx.lineWidth = 1
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
          }
        }
        const md = Math.hypot(a.x - mouse.x, a.y - mouse.y)
        if (md < MOUSE_DIST) {
          ctx.strokeStyle = `rgba(255,107,0,${(1 - md / MOUSE_DIST) * 0.75})`
          ctx.lineWidth = 1.2
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke()
        }
      }
      for (const n of nodes) {
        const pulse = reduceMotion ? 1 : 0.7 + Math.sin(t / 850 + n.ph) * 0.3
        ctx.fillStyle = `rgba(${n.c[0]},${n.c[1]},${n.c[2]},${0.75 * pulse})`
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill()
      }
    }

    let raf = 0
    const loop = (t: number) => { draw(t); raf = requestAnimationFrame(loop) }
    const onResize = () => build()
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left; mouse.y = e.clientY - rect.top
    }
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999 }
    const onVis = () => {
      if (document.hidden) cancelAnimationFrame(raf)
      else if (!reduceMotion) raf = requestAnimationFrame(loop)
    }

    build()
    if (reduceMotion) draw(0)
    else raf = requestAnimationFrame(loop)
    window.addEventListener("resize", onResize)
    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseout", onLeave)
    document.addEventListener("visibilitychange", onVis)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", onResize)
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseout", onLeave)
      document.removeEventListener("visibilitychange", onVis)
    }
  }, [])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* tinted base — clearly not pure white */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e8f0fb] via-[#f4f7fc] to-[#fdeede]" />

      {/* flowing aurora blobs */}
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: b.size,
            height: b.size,
            left: b.x,
            top: b.y,
            background: `radial-gradient(circle, ${b.color} 0%, transparent 68%)`,
            filter: "blur(60px) saturate(1.2)",
            mixBlendMode: "multiply",
            willChange: "transform",
          }}
          animate={reduce ? {} : { x: b.mx, y: b.my, scale: [1, 1.12, 0.95, 1] }}
          transition={reduce ? {} : { duration: b.dur, ease: "easeInOut", repeat: Infinity }}
        />
      ))}

      {/* constellation network on top */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  )
}

export default ConstellationBackground
