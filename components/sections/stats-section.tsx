"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Building2, Globe2, Users2, Calendar } from "lucide-react"
import ScrollCardLayout from "@/components/ui/scroll-card"

const stats = [
  {
    icon: Calendar,
    value: 2014,
    suffix: "",
    label: "Founded",
    description: "Established with a vision",
    color: "#043b73",
    isYear: true,
  },
  {
    icon: Users2,
    value: 500,
    suffix: "+",
    label: "Employees",
    description: "Growing team worldwide",
    color: "#FF6B00",
    isYear: false,
  },
  {
    icon: Globe2,
    value: 5,
    suffix: "",
    label: "Countries",
    description: "Global presence",
    color: "#043b73",
    isYear: false,
  },
  {
    icon: Building2,
    value: 100,
    suffix: "+",
    label: "Clients",
    description: "Trusted partnerships",
    color: "#FF6B00",
    isYear: false,
  },
]

function AnimatedCounter({
  value,
  suffix,
  isYear,
}: {
  value: number
  suffix: string
  isYear: boolean
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const stepValue = value / steps
      const stepDuration = duration / steps

      let current = 0
      const timer = setInterval(() => {
        current += stepValue
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, stepDuration)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref} className="tabular-nums">
      {isYear ? value : count}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-sm font-medium uppercase tracking-wider text-[#FF6B00]">
            Our Impact
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl text-balance">
            Numbers That Speak
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            A decade of excellence in digital transformation and talent solutions across the globe.
          </p>
        </motion.div>

        {/* Stats Scroll Layout */}
        <div className="mt-8">
          <ScrollCardLayout
            cards={stats.map((stat, i) => {
              const rotations = ['rotate-6', 'rotate-0', '-rotate-6', 'rotate-0'];
              return {
                title: stat.label,
                description: stat.description,
                color: stat.color,
                rotation: rotations[i % 4],
                value: stat.value,
                suffix: stat.suffix,
                isYear: stat.isYear,
                icon: stat.icon,
              };
            })}
          />
        </div>
      </div>
    </section>
  )
}
