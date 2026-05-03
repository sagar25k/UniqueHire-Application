"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  "Digital Transformation Experts",
  "Global Talent Network",
  "AI-Driven Solutions",
  "Agile Methodologies",
]

export function AboutSection() {
  return (
    <section className="relative bg-secondary/30 py-24 lg:py-32 overflow-hidden">

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-[#043b73]/10 to-[#FF6B00]/10 p-8 lg:p-12">
              {/* Abstract shapes */}
              <div className="absolute left-8 top-8 h-32 w-32 rounded-2xl bg-[#043b73] opacity-80" />
              <div className="absolute right-12 top-16 h-24 w-24 rounded-full bg-[#FF6B00] opacity-80" />
              <div className="absolute bottom-16 left-16 h-20 w-20 rounded-xl bg-[#043b73]/60" />
              <div className="absolute bottom-8 right-8 h-28 w-28 rounded-3xl bg-[#FF6B00]/60" />
              
              {/* Center content */}
              <div className="relative flex h-full items-center justify-center">
                <div className="rounded-2xl bg-background/90 p-8 text-center shadow-2xl backdrop-blur-sm">
                  <p className="text-6xl font-bold text-[#043b73]">10+</p>
                  <p className="mt-2 text-lg font-medium text-muted-foreground">
                    Years of Excellence
                  </p>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-1/4 top-1/3 h-4 w-4 rounded-full bg-[#043b73]"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-1/4 bottom-1/3 h-3 w-3 rounded-full bg-[#FF6B00]"
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium uppercase tracking-wider text-[#FF6B00]">
              About Us
            </span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl text-balance">
              Building the Future of{" "}
              <span className="text-[#043b73]">Digital Excellence</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              UniqueHire is a digital transformation IT consulting & services company established in 2014 by recruitment leaders with strong corporate and consulting experience.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              We help organizations build strong teams, scale globally, and compete in modern markets through technology and talent solutions.
            </p>

            {/* Highlights */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#043b73]" />
                  <span className="font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10"
            >
              <Link href="/about">
                <Button
                  size="lg"
                  className="group bg-[#043b73] text-white hover:bg-[#043b73]/90"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
