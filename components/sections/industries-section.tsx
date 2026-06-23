"use client"

import { motion } from "framer-motion"
import {
  Brain,
  Cloud,
  Shield,
  Building2,
  Cpu,
  Database,
} from "lucide-react"
import { GlassTiltCard } from "@/components/ui/glass-tilt-card"

const industries = [
  {
    icon: Brain,
    title: "AI / Data Science",
    description: "Machine learning, data analytics, and AI-powered solutions",
    accent: "blue" as const,
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Cloud migration, infrastructure automation, and CI/CD",
    accent: "orange" as const,
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Security assessments, compliance, and threat protection",
    accent: "blue" as const,
  },
  {
    icon: Building2,
    title: "Enterprise IT",
    description: "End-to-end enterprise solutions and digital transformation",
    accent: "orange" as const,
  },
  {
    icon: Cpu,
    title: "IoT Solutions",
    description: "Connected devices, edge computing, and smart systems",
    accent: "blue" as const,
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Data pipelines, warehousing, and big data solutions",
    accent: "orange" as const,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
}

export function IndustriesSection() {
  return (
    <section className="bg-secondary/30 py-24 lg:py-32">
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
            GCC &amp; Industries
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl text-balance">
            Technology Expertise
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            UniqueHire supports organizations across various technology domains with specialized talent and solutions.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {industries.map((industry) => (
            <motion.div key={industry.title} variants={itemVariants} className="h-full">
              <GlassTiltCard
                icon={industry.icon}
                title={industry.title}
                description={industry.description}
                accent={industry.accent}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}