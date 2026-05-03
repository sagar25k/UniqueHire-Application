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
import BorderGlow from "@/components/BorderGlow"

const industries = [
  {
    icon: Brain,
    title: "AI / Data Science",
    description: "Machine learning, data analytics, and AI-powered solutions",
    glowColor: "217 87 53",       // #043b73 blue
    colors: ["#043b73", "#1a6fe0", "#0847a8"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Cloud migration, infrastructure automation, and CI/CD",
    glowColor: "25 100 50",       // #FF6B00 orange
    colors: ["#FF6B00", "#ff8533", "#cc5500"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Security assessments, compliance, and threat protection",
    glowColor: "217 87 53",
    colors: ["#043b73", "#1a6fe0", "#0847a8"],
  },
  {
    icon: Building2,
    title: "Enterprise IT",
    description: "End-to-end enterprise solutions and digital transformation",
    glowColor: "25 100 50",
    colors: ["#FF6B00", "#ff8533", "#cc5500"],
  },
  {
    icon: Cpu,
    title: "IoT Solutions",
    description: "Connected devices, edge computing, and smart systems",
    glowColor: "217 87 53",
    colors: ["#043b73", "#1a6fe0", "#0847a8"],
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Data pipelines, warehousing, and big data solutions",
    glowColor: "25 100 50",
    colors: ["#FF6B00", "#ff8533", "#cc5500"],
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
          {industries.map((industry, index) => (
            <motion.div key={industry.title} variants={itemVariants} className="h-full">
              <BorderGlow
                glowColor={industry.glowColor}
                colors={industry.colors}
                backgroundColor="var(--card)"
                borderRadius={16}
                glowIntensity={1.8}
                coneSpread={30}
                fillOpacity={0.06}
                className="h-full w-full"
              >
                <div className="flex items-start gap-4 p-6">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                      index % 2 === 0 ? "bg-[#043b73]/10" : "bg-[#FF6B00]/10"
                    }`}
                  >
                    <industry.icon
                      className={`h-6 w-6 ${
                        index % 2 === 0 ? "text-[#043b73]" : "text-[#FF6B00]"
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{industry.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </BorderGlow>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}