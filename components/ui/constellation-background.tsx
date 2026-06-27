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

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h)
      const cx = w / 2, cy = h / 2
      for (let x = GAP / 2; x < w; x += GAP) {
        for (let y = GAP / 2; y < h; y += GAP) {
          // travelling ring that sweeps the WHOLE page from the centre out
          const dc = Math.hypot(x - cx, y - cy)
          const cyc = reduce ? 0.5 : (Math.sin(dc / 70 - t / 700) + 1) / 2 // 0..1

          // intensity peaks at pure colour, dips to 0 (white) at the midpoint
          const intensity = Math.abs(cyc - 0.5) * 2
          // first half of the wave = orange, second half = blue
          const base = cyc < 0.5 ? ORANGE : BLUE

          // circular cursor lens — smooth zoom + brighten
          const dm = Math.hypot(x - mouse.x, y - mouse.y)
          const lens = dm < LENS ? Math.cos((dm / LENS) * (Math.PI / 2)) : 0

          // fade colour toward white as intensity drops
          const k = Math.min(1, intensity + lens * 0.8)
          const r = Math.round(255 + (base[0] - 255) * k)
          const g = Math.round(255 + (base[1] - 255) * k)
          const b = Math.round(255 + (base[2] - 255) * k)

          const size = 1.4 + intensity * 1.6 + lens * 4.4
          const alpha = 0.18 + intensity * 0.6 + lens * 0.5

          ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`
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
