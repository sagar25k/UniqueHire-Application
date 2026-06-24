"use client"

import { motion, useReducedMotion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  "Digital Transformation Experts",
  "Global Talent Network",
  "AI-Driven Solutions",
  "Agile Methodologies",
]

// continuous celebration sparkles scattered across the panel
const sparkles = [
  { left: "22%", top: "20%", delay: 0, color: "#ffffff", size: 6 },
  { left: "78%", top: "24%", delay: 0.5, color: "#FF6B00", size: 5 },
  { left: "30%", top: "30%", delay: 1.0, color: "#ffffff", size: 4 },
  { left: "70%", top: "38%", delay: 1.5, color: "#043b73", size: 5 },
  { left: "18%", top: "52%", delay: 0.8, color: "#FF6B00", size: 4 },
  { left: "82%", top: "58%", delay: 2.0, color: "#ffffff", size: 6 },
  { left: "34%", top: "70%", delay: 1.2, color: "#043b73", size: 5 },
  { left: "66%", top: "74%", delay: 2.4, color: "#ffffff", size: 4 },
  { left: "50%", top: "16%", delay: 1.8, color: "#FF6B00", size: 5 },
  { left: "48%", top: "84%", delay: 0.3, color: "#043b73", size: 4 },
]

export function AboutSection() {
  const reduce = useReducedMotion()

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
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/40 bg-gradient-to-br from-[#043b73]/10 to-[#FF6B00]/10 p-8 shadow-[0_20px_60px_-22px_rgba(4,59,115,0.4)] lg:p-12">
              {/* Abstract shapes — gentle continuous float + rotate */}
              <motion.div
                className="absolute left-8 top-8 h-32 w-32 rounded-2xl bg-gradient-to-br from-[#043b73] to-[#0a4f8f] opacity-90 shadow-lg"
                animate={reduce ? {} : { y: [0, -14, 0], x: [0, 8, 0], rotate: [0, 7, 0] }}
                transition={reduce ? {} : { duration: 7, ease: "easeInOut", repeat: Infinity }}
              />
              <motion.div
                className="absolute right-12 top-16 h-24 w-24 rounded-full bg-gradient-to-br from-[#FF6B00] to-[#ff8a33] opacity-90 shadow-lg"
                animate={reduce ? {} : { y: [0, 12, 0], x: [0, -10, 0] }}
                transition={reduce ? {} : { duration: 8.5, ease: "easeInOut", repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-16 left-16 h-20 w-20 rounded-xl bg-gradient-to-br from-[#3f6796] to-[#5b7fa8] shadow-md"
                animate={reduce ? {} : { y: [0, 10, 0], rotate: [0, 10, 0] }}
                transition={reduce ? {} : { duration: 9.5, ease: "easeInOut", repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-8 right-8 h-28 w-28 rounded-3xl bg-gradient-to-br from-[#FF6B00] to-[#ffa05c] opacity-90 shadow-lg"
                animate={reduce ? {} : { y: [0, -12, 0], x: [0, -8, 0], rotate: [0, -8, 0] }}
                transition={reduce ? {} : { duration: 7.8, ease: "easeInOut", repeat: Infinity }}
              />

              {/* continuous celebration sparkles */}
              {!reduce &&
                sparkles.map((sp, i) => (
                  <motion.div
                    key={i}
                    aria-hidden
                    className="absolute z-20 rounded-full"
                    style={{
                      left: sp.left,
                      top: sp.top,
                      height: sp.size,
                      width: sp.size,
                      background: sp.color,
                      boxShadow: `0 0 8px 2px ${sp.color}`,
                    }}
                    animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.8, delay: sp.delay, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.6 }}
                  />
                ))}

              {/* Center glass card with glossy shine + glow pulse */}
              <div className="relative z-10 flex h-full items-center justify-center">
                <motion.div
                  className="relative overflow-hidden rounded-2xl border border-white/70 bg-white/55 p-8 text-center backdrop-blur-2xl"
                  animate={
                    reduce
                      ? {}
                      : {
                          boxShadow: [
                            "0 12px 34px -8px rgba(4,59,115,0.30)",
                            "0 22px 56px -8px rgba(255,107,0,0.42)",
                            "0 12px 34px -8px rgba(4,59,115,0.30)",
                          ],
                        }
                  }
                  transition={reduce ? {} : { duration: 4, ease: "easeInOut", repeat: Infinity }}
                >
                  {/* glossy top sheen */}
                  <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                  <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/55 to-transparent" />
                  {/* sweeping shine */}
                  {!reduce && (
                    <motion.div
                      aria-hidden
                      className="pointer-events-none absolute top-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/55 to-transparent"
                      initial={{ x: "-200%" }}
                      animate={{ x: ["-200%", "400%"] }}
                      transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity, repeatDelay: 2.5 }}
                    />
                  )}
                  <p className="relative text-6xl font-black text-[#043b73]">10+</p>
                  <p className="relative mt-2 text-lg font-semibold text-muted-foreground">
                    Years of Excellence
                  </p>
                </motion.div>
              </div>
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
