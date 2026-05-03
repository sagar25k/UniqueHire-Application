"use client"

import { motion } from "framer-motion"
import { Sparkles, Zap, Heart, Trophy } from "lucide-react"
import CardSwap, { Card } from "@/components/ui/card-swap"

const reasons = [
  {
    icon: Sparkles,
    title: "Experienced Consultants",
    description:
      "Our team consists of industry veterans with deep expertise across multiple technology domains and business verticals.",
    color: "#043b73",
  },
  {
    icon: Zap,
    title: "AI-Driven Hiring",
    description:
      "Leveraging advanced AI and machine learning to match the right talent with the right opportunities efficiently.",
    color: "#FF6B00",
  },
  {
    icon: Trophy,
    title: "Fast Recruitment Process",
    description:
      "Streamlined processes and dedicated teams ensure rapid placement without compromising on quality.",
    color: "#043b73",
  },
  {
    icon: Heart,
    title: "Strong Client Relationships",
    description:
      "Building lasting partnerships through transparency, trust, and consistent delivery of exceptional results.",
    color: "#FF6B00",
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium uppercase tracking-wider text-[#FF6B00]">
              Why Choose Us
            </span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl text-balance">
              Your Trusted Partner in{" "}
              <span className="text-[#043b73]">Digital Growth</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We combine deep industry knowledge with cutting-edge technology to deliver transformative solutions that drive real business value.
            </p>

            {/* Visual element - Enhanced Stats Cards */}
            <div className="mt-12 relative flex justify-center items-center min-h-[400px]">
              <CardSwap width={280} height={280} delay={4000}>
                {/* Card 1 - Client Satisfaction */}
                <Card
                  customClass="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#043b73] via-[#043b73] to-[#0847a8] p-6 text-white shadow-lg cursor-pointer transition-shadow hover:shadow-2xl hover:shadow-[#043b73]/40"
                >
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/30 blur-2xl transition-transform duration-700 group-hover:scale-150" />
                    <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-white/20 blur-xl transition-transform duration-700 group-hover:scale-150" />
                  </div>
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm transition-transform duration-500 group-hover:rotate-[360deg]">
                      <Trophy className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-6xl font-bold tracking-tight">
                        98%
                      </p>
                      <p className="mt-2 text-lg font-medium opacity-90">Client Satisfaction</p>
                    </div>
                  </div>
                </Card>

                {/* Card 2 - Response Time */}
                <Card
                  customClass="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#FF6B00] via-[#FF6B00] to-[#cc5500] p-6 text-white shadow-lg cursor-pointer transition-shadow hover:shadow-2xl hover:shadow-[#FF6B00]/40"
                >
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/30 blur-2xl transition-transform duration-700 group-hover:scale-150" />
                    <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-white/20 blur-xl transition-transform duration-700 group-hover:scale-150" />
                  </div>
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm transition-transform duration-500 group-hover:rotate-[360deg]">
                      <Zap className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-6xl font-bold tracking-tight">
                        24h
                      </p>
                      <p className="mt-2 text-lg font-medium opacity-90">Response Time</p>
                    </div>
                  </div>
                </Card>

                {/* Card 3 - Technologies */}
                <Card
                  customClass="group relative overflow-hidden rounded-3xl border-2 border-[#043b73]/20 bg-gradient-to-br from-[#043b73]/10 via-[#043b73]/5 to-white/5 p-6 shadow-lg backdrop-blur-md cursor-pointer transition-all duration-300 hover:border-[#043b73]/40 hover:bg-[#043b73]/15 hover:shadow-2xl hover:shadow-[#043b73]/20"
                >
                  {/* Animated dots pattern */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute right-3 top-3 h-2 w-2 rounded-full bg-[#043b73] animate-pulse" />
                    <div className="absolute right-8 top-6 h-1.5 w-1.5 rounded-full bg-[#043b73]/60 animate-pulse" style={{ animationDelay: "0.2s" }} />
                    <div className="absolute right-5 top-10 h-1 w-1 rounded-full bg-[#043b73]/40 animate-pulse" style={{ animationDelay: "0.4s" }} />
                  </div>
                  {/* Glow effect */}
                  <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-[#043b73]/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#043b73]/15 transition-transform duration-500 group-hover:rotate-[360deg]">
                      <Sparkles className="h-6 w-6 text-[#043b73]" />
                    </div>
                    <div>
                      <p className="text-6xl font-bold tracking-tight text-[#043b73]">
                        50+
                      </p>
                      <p className="mt-2 text-lg font-medium text-muted-foreground">Technologies</p>
                    </div>
                  </div>
                </Card>

                {/* Card 4 - Industries */}
                <Card
                  customClass="group relative overflow-hidden rounded-3xl border-2 border-[#FF6B00]/20 bg-gradient-to-br from-[#FF6B00]/10 via-[#FF6B00]/5 to-white/5 p-6 shadow-lg backdrop-blur-md cursor-pointer transition-all duration-300 hover:border-[#FF6B00]/40 hover:bg-[#FF6B00]/15 hover:shadow-2xl hover:shadow-[#FF6B00]/20"
                >
                  {/* Animated dots pattern */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute right-3 top-3 h-2 w-2 rounded-full bg-[#FF6B00] animate-pulse" />
                    <div className="absolute right-8 top-6 h-1.5 w-1.5 rounded-full bg-[#FF6B00]/60 animate-pulse" style={{ animationDelay: "0.3s" }} />
                    <div className="absolute right-5 top-10 h-1 w-1 rounded-full bg-[#FF6B00]/40 animate-pulse" style={{ animationDelay: "0.5s" }} />
                  </div>
                  {/* Glow effect */}
                  <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-[#FF6B00]/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF6B00]/15 transition-transform duration-500 group-hover:rotate-[360deg]">
                      <Heart className="h-6 w-6 text-[#FF6B00]" />
                    </div>
                    <div>
                      <p className="text-6xl font-bold tracking-tight text-[#FF6B00]">
                        15+
                      </p>
                      <p className="mt-2 text-lg font-medium text-muted-foreground">Industries</p>
                    </div>
                  </div>
                </Card>
              </CardSwap>
            </div>
          </motion.div>

          {/* Right - Reasons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group flex gap-5 rounded-2xl border bg-card p-6 transition-all duration-300 hover:shadow-lg"
              >
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${reason.color}15` }}
                >
                  <reason.icon
                    className="h-7 w-7"
                    style={{ color: reason.color }}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{reason.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
