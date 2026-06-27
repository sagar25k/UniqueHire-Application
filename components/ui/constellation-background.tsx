"use client"

import { useEffect, useRef } from "react"

/**
 * Site-wide animated background: a living constellation network.
 * Nodes drift, link with thin lines when near, and gently react to the
 * cursor; links + nodes pulse. Brand colors only (blue / orange) over a
 * white base with a faint gradient wash. Canvas + rAF, DPR-capped,
 * pauses when the tab is hidden, and renders a single static frame for
 * prefers-reduced-motion.
 */
export function ConstellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    const DPR = Math.min(window.devicePixelRatio || 1, 1.5)

    const BLUE = [4, 59, 115]
    const ORANGE = [255, 107, 0]
    const LINK_DIST = 140
    const MOUSE_DIST = 170

    type Node = { x: number; y: number; vx: number; vy: number; r: number; c: number[]; ph: number }
    let nodes: Node[] = []
    let w = 0
    let h = 0
    const mouse = { x: -9999, y: -9999 }

    const rand = (a: number, b: number) => a + Math.random() * (b - a)

    const build = () => {
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = Math.floor(w * DPR)
      canvas.height = Math.floor(h * DPR)
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
      const count = Math.min(90, Math.max(28, Math.floor((w * h) / 24000)))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: rand(-0.22, 0.22),
        vy: rand(-0.22, 0.22),
        r: rand(1.3, 2.8),
        c: Math.random() > 0.55 ? ORANGE : BLUE,
        ph: Math.random() * Math.PI * 2,
      }))
    }

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h)

      // move
      for (const n of nodes) {
        if (!reduce) {
          n.x += n.vx
          n.y += n.vy
          if (n.x < 0 || n.x > w) n.vx *= -1
          if (n.y < 0 || n.y > h) n.vy *= -1
          // gentle cursor attraction
          const dx = mouse.x - n.x
          const dy = mouse.y - n.y
          const d = Math.hypot(dx, dy)
          if (d < MOUSE_DIST && d > 0.1) {
            const f = (1 - d / MOUSE_DIST) * 0.4
            n.x += (dx / d) * f
            n.y += (dy / d) * f
          }
        }
      }

      // links
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.hypot(dx, dy)
          if (d < LINK_DIST) {
            const alpha = (1 - d / LINK_DIST) * 0.5
            const c = a.c
            ctx.strokeStyle = `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
        // link to cursor
        const mdx = a.x - mouse.x
        const mdy = a.y - mouse.y
        const md = Math.hypot(mdx, mdy)
        if (md < MOUSE_DIST) {
          ctx.strokeStyle = `rgba(255, 107, 0, ${(1 - md / MOUSE_DIST) * 0.55})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
        }
      }

      // nodes (with pulse)
      for (const n of nodes) {
        const pulse = reduce ? 1 : 0.7 + Math.sin(t / 900 + n.ph) * 0.3
        ctx.fillStyle = `rgba(${n.c[0]}, ${n.c[1]}, ${n.c[2]}, ${0.55 * pulse})`
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    let raf = 0
    const loop = (t: number) => {
      draw(t)
      raf = requestAnimationFrame(loop)
    }

    const onResize = () => build()
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }
    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf)
      } else if (!reduce) {
        raf = requestAnimationFrame(loop)
      }
    }

    build()
    if (reduce) {
      draw(0)
    } else {
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener("resize", onResize)
    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseout", onLeave)
    document.addEventListener("visibilitychange", onVisibility)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", onResize)
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseout", onLeave)
      document.removeEventListener("visibilitychange", onVisibility)
    }
  }, [])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      {/* white base + faint brand wash */}
      <div className="absolute inset-0 bg-white" />
      <div
        className="absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 55% 50% at 82% 12%, rgba(4,59,115,0.10), transparent 70%)",
            "radial-gradient(ellipse 50% 45% at 14% 85%, rgba(255,107,0,0.09), transparent 70%)",
            "radial-gradient(ellipse 40% 40% at 50% 50%, rgba(147,197,253,0.07), transparent 75%)",
          ].join(", "),
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  )
}

export default ConstellationBackground
