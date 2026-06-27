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
  /** photo on the right (text on the left) for the zig-zag chain */
  reverse?: boolean
  className?: string
}

const ACCENT = {
  blue: { hex: "#043b73", rgb: "4, 59, 115", text: "text-[#043b73]", chip: "bg-[#043b73]/10 text-[#043b73]" },
  orange: { hex: "#FF6B00", rgb: "255, 107, 0", text: "text-[#FF6B00]", chip: "bg-[#FF6B00]/10 text-[#FF6B00]" },
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
  reverse = false,
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
  const rotateY = useTransform(sx, [0, 1], [8, -8])
  const rotateX = useTransform(sy, [0, 1], [-8, 8])
  const spotlight = useTransform(
    [px, py] as const,
    ([x, y]: number[]) =>
      `radial-gradient(220px circle at ${x * 100}% ${y * 100}%, rgba(${a.rgb},0.22), transparent 60%)`,
  )

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    px.set((e.clientX - r.left) / r.width)
    py.set((e.clientY - r.top) / r.height)
  }
  const onLeave = () => { setHovered(false); px.set(0.5); py.set(0.5) }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {}
  }

  return (
    <div
      className={cn(
        "grid items-center gap-8 lg:gap-14 lg:grid-cols-2",
        reverse && "lg:[direction:rtl]",
        className,
      )}
    >
      {/* PHOTO — thick animated gradient border + tilt */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-center [perspective:1200px] lg:[direction:ltr]"
      >
        <motion.div
          ref={ref}
          onMouseMove={onMove}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={onLeave}
          style={{ rotateX: reduce ? 0 : rotateX, rotateY: reduce ? 0 : rotateY, transformPerspective: 1200 }}
          whileHover={reduce ? undefined : { scale: 1.02 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="relative w-full max-w-sm [transform-style:preserve-3d]"
        >
          {/* thicker gradient border */}
          <div className="relative overflow-hidden rounded-[26px] p-[4px]">
            <motion.div
              aria-hidden
              className="absolute -inset-[45%]"
              style={{ background: `conic-gradient(from 0deg, transparent, ${a.hex}, rgba(${a.rgb},0.2), ${a.hex}, transparent 55%)` }}
              animate={reduce ? {} : { rotate: 360 }}
              transition={reduce ? {} : { duration: hovered ? 5 : 13, ease: "linear", repeat: Infinity }}
            />
            <div className="relative overflow-hidden rounded-[22px] bg-neutral-900">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={src}
                  alt={name}
                  fill
                  sizes="(max-width:1024px) 90vw, 400px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 55%, rgba(8,15,30,0.5) 100%)" }} />
                <motion.div aria-hidden className="pointer-events-none absolute inset-0 transition-opacity duration-300" style={{ opacity: hovered && !reduce ? 1 : 0, background: spotlight }} />
                <span className={cn("absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur-md")} style={{ transform: "translateZ(40px)" }}>
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: a.hex }} />
                  {designation}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* TEXT — beside the photo, outside the card */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={cn("lg:[direction:ltr]", reverse ? "lg:text-right" : "lg:text-left")}
      >
        <span className={cn("inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide", a.chip)}>
          Leadership
        </span>
        <h3 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{name}</h3>
        <p className={cn("mt-1 text-base font-semibold", a.text)}>{designation}</p>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground lg:inline-block">{bio}</p>

        <div className={cn("mt-6 flex flex-wrap items-center gap-3", reverse && "lg:justify-end")}>
          <a
            href={linkedinUrl}
            target={linkedinUrl !== "#" ? "_blank" : undefined}
            rel="noreferrer"
            aria-label={`${name} on LinkedIn`}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: a.hex }}
          >
            <Linkedin className="h-4 w-4" /> Connect <ArrowUpRight className="h-4 w-4 opacity-70" />
          </a>
          <button
            type="button"
            onClick={copyEmail}
            aria-label={`Copy email for ${name}`}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-black/10 bg-white/70 px-5 text-sm font-semibold text-foreground/80 backdrop-blur-sm transition-colors hover:bg-white"
          >
            {copied ? <Check className="h-4 w-4 text-green-600" /> : <Mail className="h-4 w-4" />}
            {copied ? "Copied" : "Email"}
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default LeadershipCard
