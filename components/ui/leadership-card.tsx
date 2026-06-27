"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Linkedin, Mail, Check, Briefcase } from "lucide-react"
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
  className,
}: LeadershipCardProps) {
  const a = ACCENT[accent]
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {}
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/50 bg-white/60 shadow-[0_10px_34px_-12px_rgba(2,23,53,0.22)] backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_22px_56px_-14px_rgba(2,23,53,0.30)]",
        className,
      )}
    >
      {/* accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `radial-gradient(circle, rgba(${a.rgb},0.30), transparent 70%)` }}
      />
      {/* top sheen */}
      <div aria-hidden className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

      {/* photo */}
      <div className="relative mx-5 mt-5 h-60 overflow-hidden rounded-2xl ring-1 ring-black/5">
        <Image
          src={src}
          alt={name}
          fill
          sizes="(max-width:768px) 100vw, 320px"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        {/* designation chip on photo */}
        <span className={cn("absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/60 px-3 py-1 text-xs font-semibold backdrop-blur-md", a.chip)}>
          <Briefcase className="h-3.5 w-3.5" />
          {designation}
        </span>
      </div>

      {/* content */}
      <div className="relative flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold tracking-tight text-foreground">{name}</h3>
        <p className={cn("mt-0.5 text-sm font-semibold", a.text)}>{designation}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{bio}</p>

        {/* actions */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <a
            href={linkedinUrl}
            target={linkedinUrl !== "#" ? "_blank" : undefined}
            rel="noreferrer"
            aria-label={`${name} on LinkedIn`}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: a.hex }}
          >
            <Linkedin className="h-4 w-4" /> Connect
          </a>
          <button
            type="button"
            onClick={copyEmail}
            aria-label={`Copy email for ${name}`}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-black/10 bg-white/70 text-sm font-semibold text-foreground/80 backdrop-blur-sm transition-colors hover:bg-white"
          >
            {copied ? <Check className="h-4 w-4 text-green-600" /> : <Mail className="h-4 w-4" />}
            {copied ? "Copied" : "Email"}
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default LeadershipCard
