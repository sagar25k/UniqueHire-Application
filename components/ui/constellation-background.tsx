"use client"

import { useEffect, useRef } from "react"

/**
 * Background — Animated dot-grid ripple (site-wide).
 * A full-page matrix of dots. Concentric ripple waves sweep across the
 * whole page, tinting dots orange on the crest fading to blue in the
 * troughs (orange leads, blue follows). A circular "lens" around the
 * cursor zooms + brightens the dots it passes over.
 * Brand palette only. Canvas, DPR-capped, pauses when hidden,
 * static frame for prefers-reduced-motion.
 */
const BLUE = [4, 59, 115]
const ORANGE = [255, 107, 0]
const GAP = 30
const LENS = 150 // cursor zoom radius

export function ConstellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    const DPR = Math.min(window.devicePixelRatio || 1, 1.5)
    let w = 0, h = 0
    const mouse = { x: -9999, y: -9999 }

    const build = () => {
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = Math.floor(w * DPR)
      canvas.height = Math.floor(h * DPR)
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
    }

    // total cycle: orange fades in->bright->out, then blue fades in->bright->out
    const CYCLE = 7000

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h)

      // one global colour + brightness for the WHOLE grid (no spatial mixing)
      const phase = reduce ? 0.25 : (t % CYCLE) / CYCLE // 0..1
      const firstHalf = phase < 0.5
      const local = firstHalf ? phase / 0.5 : (phase - 0.5) / 0.5 // 0..1 within the colour
      const brightness = Math.sin(local * Math.PI) // 0 -> 1 -> 0 (in then out)
      const base = firstHalf ? ORANGE : BLUE
      const baseAlpha = 0.08 + brightness * 0.62
      const baseSize = 1.2 + brightness * 1.5

      for (let x = GAP / 2; x < w; x += GAP) {
        for (let y = GAP / 2; y < h; y += GAP) {
          // circular cursor lens — local zoom + brighten (same colour)
          const dm = Math.hypot(x - mouse.x, y - mouse.y)
          const lens = dm < LENS ? Math.cos((dm / LENS) * (Math.PI / 2)) : 0

          const size = baseSize + lens * 4.4
          const alpha = Math.min(1, baseAlpha + lens * 0.5)

          ctx.fillStyle = `rgba(${base[0]},${base[1]},${base[2]},${alpha})`
          ctx.beginPath()
          ctx.arc(x, y, size, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    let raf = 0
    const loop = (t: number) => { draw(t); raf = requestAnimationFrame(loop) }
    const onResize = () => build()
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999 }
    const onVis = () => {
      if (document.hidden) cancelAnimationFrame(raf)
      else if (!reduce) raf = requestAnimationFrame(loop)
    }

    build()
    if (reduce) draw(0)
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
      {/* near-neutral light base so both orange and blue read */}
      <div className="absolute inset-0 bg-[#f7f9fc]" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  )
}

export default ConstellationBackground
