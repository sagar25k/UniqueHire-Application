"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion"
import { Linkedin, Mail, Check, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

export interface LeadershipCardProps {
  name: string
  designation: string
  src: string
  bio: string
  accent?: "blue" | "orange"
  linkedinUrl?: string
  email?: string
  index?: number
  className?: string
}

const ACCENT = {
  blue: { hex: "#043b73", rgb: "4, 59, 115" },
  orange: { hex: "#FF6B00", rgb: "255, 107, 0" },
} as const

export function LeadershipCard({
  name,
  designation,
  src,
  bio,
  accent = "blue",
  linkedinUrl = "#",
  email = "info@uniquehire.com",
  index = 0,
  className,
}: LeadershipCardProps) {
  const a = ACCENT[accent]
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const [copied, setCopied] = useState(false)
  const [hovered, setHovered] = useState(false)

  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const sx = useSpring(px, { stiffness: 200, damping: 18 })
  const sy = useSpring(py, { stiffness: 200, damping: 18 })
  const rotateY = useTransform(sx, [0, 1], [7, -7])
  const rotateX = useTransform(sy, [0, 1], [-7, 7])
  const spotlight = useTransform(
    [px, py] as const,
    ([x, y]: number[]) =>
      `radial-gradient(200px circle at ${x * 100}% ${y * 100}%, rgba(${a.rgb},0.20), transparent 60%)`,
  )

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    px.set((e.clientX - r.left) / r.width)
    py.set((e.clientY - r.top) / r.height)
  }
  const onLeave = () => {
    setHovered(false)
    px.set(0.5)
    py.set(0.5)
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {}
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn("group relative h-full [perspective:1200px]", className)}
    >
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={onLeave}
        style={{ rotateX: reduce ? 0 : rotateX, rotateY: reduce ? 0 : rotateY, transformPerspective: 1200 }}
        whileHover={reduce ? undefined : { y: -8 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className="relative h-full [transform-style:preserve-3d]"
      >
        {/* animated gradient border */}
        <div className="relative h-full overflow-hidden rounded-[26px] p-[1.5px]">
          <motion.div
            aria-hidden
            className="absolute -inset-[40%]"
            style={{
              background: `conic-gradient(from 0deg, transparent, ${a.hex}, rgba(${a.rgb},0.15), ${a.hex}, transparent 60%)`,
            }}
            animate={reduce ? {} : { rotate: 360 }}
            transition={reduce ? {} : { duration: hovered ? 5 : 12, ease: "linear", repeat: Infinity }}
          />

          {/* inner card */}
          <div className="relative h-full overflow-hidden rounded-[24px] bg-neutral-900">
            {/* portrait */}
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={src}
                alt={name}
                fill
                sizes="(max-width:768px) 100vw, 320px"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.06]"
              />
              {/* grade + scrim */}
              <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, transparent 30%, rgba(8,15,30,0.55) 62%, rgba(8,15,30,0.95) 100%)` }} />
              {/* cursor spotlight */}
              <motion.div aria-hidden className="pointer-events-none absolute inset-0 transition-opacity duration-300" style={{ opacity: hovered && !reduce ? 1 : 0, background: spotlight }} />
              {/* designation chip */}
              <span
                className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur-md"
                style={{ transform: "translateZ(40px)" }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: a.hex }} />
                {designation}
              </span>
            </div>

            {/* overlaid content */}
            <div className="absolute inset-x-0 bottom-0 p-5" style={{ transform: "translateZ(55px)" }}>
              <h3 className="text-2xl font-bold tracking-tight text-white">{name}</h3>
              <p className="mt-0.5 text-sm font-semibold" style={{ color: accent === "orange" ? "#ffb37a" : "#7fb3ff" }}>
                {designation}
              </p>

              {/* bio — revealed on hover */}
              <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100">
                <p className="mt-0 overflow-hidden text-sm leading-relaxed text-white/80 group-hover:mt-3 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:5]">
                  {bio}
                </p>
              </div>

              {/* actions */}
              <div className="mt-4 flex items-center gap-2">
                <a
                  href={linkedinUrl}
                  target={linkedinUrl !== "#" ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={`${name} on LinkedIn`}
                  className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-xl text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
                  style={{ backgroundColor: a.hex }}
                >
                  <Linkedin className="h-4 w-4" /> Connect
                  <ArrowUpRight className="h-4 w-4 opacity-70" />
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label={`Copy email for ${name}`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/25 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
                >
                  {copied ? <Check className="h-4 w-4 text-green-400" /> : <Mail className="h-4 w-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default LeadershipCard
