"use client"

import { useRef } from "react"
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  "Digital Transformation Experts",
  "Global Talent Network",
  "AI-Driven Solutions",
  "Agile Methodologies",
]

// twinkling sparkle positions around the centre card
const sparkles = [
  { left: "32%", top: "28%", delay: 0 },
  { left: "68%", top: "32%", delay: 0.7 },
  { left: "64%", top: "68%", delay: 1.4 },
  { left: "34%", top: "66%", delay: 2.1 },
]

export function AboutSection() {
  const reduce = useReducedMotion()
  const panelRef = useRef<HTMLDivElement>(null)
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const sx = useSpring(px, { stiffness: 150, damping: 18 })
  const sy = useSpring(py, { stiffness: 150, damping: 18 })
  const rotateY = useTransform(sx, [0, 1], [9, -9])
  const rotateX = useTransform(sy, [0, 1], [-9, 9])

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return
    const r = panelRef.current?.getBoundingClientRect()
    if (!r) return
    px.set((e.clientX - r.left) / r.width)
    py.set((e.clientY - r.top) / r.height)
  }
  const onLeave = () => {
    px.set(0.5)
    py.set(0.5)
  }

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
            <motion.div
              ref={panelRef}
              onMouseMove={onMove}
              onMouseLeave={onLeave}
              style={{
                rotateX: reduce ? 0 : rotateX,
                rotateY: reduce ? 0 : rotateY,
                transformPerspective: 1000,
              }}
              className="relative aspect-square overflow-hidden rounded-3xl border border-white/40 bg-gradient-to-br from-[#043b73]/10 to-[#FF6B00]/10 p-8 shadow-[0_20px_60px_-22px_rgba(4,59,115,0.4)] [transform-style:preserve-3d] lg:p-12"
            >
              {/* Abstract shapes — float + rotate at different depths */}
              <motion.div
                className="absolute left-8 top-8 h-32 w-32 rounded-2xl bg-gradient-to-br from-[#043b73] to-[#0a4f8f] opacity-90 shadow-lg"
                style={{ transform: "translateZ(55px)" }}
                animate={reduce ? {} : { y: [0, -14, 0], x: [0, 8, 0], rotate: [0, 7, 0] }}
                transition={reduce ? {} : { duration: 7, ease: "easeInOut", repeat: Infinity }}
              />
              <motion.div
                className="absolute right-12 top-16 h-24 w-24 rounded-full bg-gradient-to-br from-[#FF6B00] to-[#ff8a33] opacity-90 shadow-lg"
                style={{ transform: "translateZ(40px)" }}
                animate={reduce ? {} : { y: [0, 12, 0], x: [0, -10, 0] }}
                transition={reduce ? {} : { duration: 8.5, ease: "easeInOut", repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-16 left-16 h-20 w-20 rounded-xl bg-gradient-to-br from-[#3f6796] to-[#5b7fa8] shadow-md"
                style={{ transform: "translateZ(30px)" }}
                animate={reduce ? {} : { y: [0, 10, 0], rotate: [0, 10, 0] }}
                transition={reduce ? {} : { duration: 9.5, ease: "easeInOut", repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-8 right-8 h-28 w-28 rounded-3xl bg-gradient-to-br from-[#FF6B00] to-[#ffa05c] opacity-90 shadow-lg"
                style={{ transform: "translateZ(50px)" }}
                animate={reduce ? {} : { y: [0, -12, 0], x: [0, -8, 0], rotate: [0, -8, 0] }}
                transition={reduce ? {} : { duration: 7.8, ease: "easeInOut", repeat: Infinity }}
              />

              {/* small accent dots */}
              <motion.div
                className="absolute left-1/4 top-1/3 h-4 w-4 rounded-full bg-[#043b73]"
                style={{ transform: "translateZ(70px)" }}
                animate={reduce ? {} : { y: [0, -10, 0], opacity: [0.7, 1, 0.7] }}
                transition={reduce ? {} : { duration: 4.5, ease: "easeInOut", repeat: Infinity }}
              />
              <motion.div
                className="absolute right-1/4 bottom-1/3 h-3 w-3 rounded-full bg-[#FF6B00]"
                style={{ transform: "translateZ(70px)" }}
                animate={reduce ? {} : { y: [0, 10, 0], opacity: [0.7, 1, 0.7] }}
                transition={reduce ? {} : { duration: 5.2, ease: "easeInOut", repeat: Infinity }}
              />

              {/* twinkling sparkles */}
              {!reduce &&
                sparkles.map((sp, i) => (
                  <motion.div
                    key={i}
                    aria-hidden
                    className="absolute h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_2px_rgba(255,255,255,0.9)]"
                    style={{ left: sp.left, top: sp.top, transform: "translateZ(85px)" }}
                    animate={{ scale: [0, 1.4, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 2.4, delay: sp.delay, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
                  />
                ))}

              {/* Center card with glow pulse */}
              <div className="relative flex h-full items-center justify-center">
                <motion.div
                  className="rounded-2xl border border-white/60 bg-background/90 p-8 text-center backdrop-blur-sm"
                  style={{ transform: "translateZ(95px)" }}
                  animate={
                    reduce
                      ? {}
                      : {
                          boxShadow: [
                            "0 12px 34px -8px rgba(4,59,115,0.28)",
                            "0 20px 54px -8px rgba(255,107,0,0.38)",
                            "0 12px 34px -8px rgba(4,59,115,0.28)",
                          ],
                        }
                  }
                  transition={reduce ? {} : { duration: 4, ease: "easeInOut", repeat: Infinity }}
                >
                  <p className="text-6xl font-black text-[#043b73]">10+</p>
                  <p className="mt-2 text-lg font-medium text-muted-foreground">
                    Years of Excellence
                  </p>
                </motion.div>
              </div>
            </motion.div>
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
