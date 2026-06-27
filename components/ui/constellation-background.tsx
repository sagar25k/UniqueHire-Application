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
          // concentric ripple (orange crest -> blue trough), travels outward
          const dc = Math.hypot(x - cx, y - cy)
          const ripple = reduce ? 0.5 : (Math.sin(dc / 55 - t / 650) + 1) / 2

          // circular cursor lens — smooth zoom + brighten
          const dm = Math.hypot(x - mouse.x, y - mouse.y)
          const lens = dm < LENS ? Math.cos((dm / LENS) * (Math.PI / 2)) : 0 // 1 at center -> 0 at edge

          // colour: lerp blue -> orange by ripple (orange on crest), lens pushes orange
          const mix = Math.min(1, ripple + lens * 0.6)
          const r = Math.round(BLUE[0] + (ORANGE[0] - BLUE[0]) * mix)
          const g = Math.round(BLUE[1] + (ORANGE[1] - BLUE[1]) * mix)
          const b = Math.round(BLUE[2] + (ORANGE[2] - BLUE[2]) * mix)

          // size: visible baseline across whole page + ripple + strong lens zoom
          const size = 1.1 + ripple * 1.3 + lens * 4.2
          const alpha = 0.2 + ripple * 0.3 + lens * 0.55

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
      {/* light base with a faint orange->blue wash (orange first) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fdf0e6] via-white to-[#eaf1fb]" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  )
}

export default ConstellationBackground
