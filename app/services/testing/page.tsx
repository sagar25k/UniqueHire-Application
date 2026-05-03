"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { 
  TestTube, 
  CheckCircle2, 
  Cog,
  RefreshCcw,
  Database,
  Zap,
  Shield,
  Clock,
  Award,
  Target
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  { name: "SIT (System Integration Testing)", icon: Cog },
  { name: "UAT (User Acceptance Testing)", icon: CheckCircle2 },
  { name: "Performance Testing", icon: Zap },
  { name: "Data Migration Testing", icon: Database },
  { name: "Reconciliation Testing", icon: RefreshCcw },
  { name: "Test Automation", icon: Shield },
]

const expertise = [
  {
    title: "Quality Engineering",
    description: "Comprehensive QA practices ensuring software quality",
    icon: Award,
  },
  {
    title: "Automation",
    description: "Advanced test automation for faster delivery",
    icon: Cog,
  },
  {
    title: "Continuous Testing",
    description: "Integrated testing in CI/CD pipelines",
    icon: RefreshCcw,
  },
  {
    title: "DevOps Integration",
    description: "Seamless integration with DevOps practices",
    icon: Zap,
  },
  {
    title: "Agile Testing",
    description: "Testing aligned with Agile methodologies",
    icon: Target,
  },
]

const domains = [
  "BFSI",
  "Core Banking",
  "Payments",
]

export default function TestingPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#FF6B00]/10 via-background to-[#043b73]/5 py-24">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-[#FF6B00]/20 blur-3xl" />
            <div className="absolute bottom-20 left-10 h-72 w-72 rounded-full bg-[#043b73]/20 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#FF6B00]/10 px-4 py-2">
                <TestTube className="h-5 w-5 text-[#FF6B00]" />
                <span className="text-sm font-medium text-[#FF6B00]">Testing Services</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="text-[#FF6B00]">Testing</span> Services
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                The financial services industry is undergoing a disruption cycle. Now surge in technology, 
                sector dynamism, regulatory initiatives, and behavioural shifts across customer demographics 
                are sparking a new landscape. All this means, a need to transform the technology infrastructure 
                and application ecosystem.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#FF6B00] text-white hover:bg-[#FF6B00]/90">
                    Get Testing Support
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline">
                    View All Services
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Banner */}
        <section className="py-16 bg-[#043b73]">
          <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-4 text-white">
                <Clock className="h-12 w-12" />
                <div className="text-left">
                  <p className="text-4xl font-bold">9+ Years</p>
                  <p className="text-white/90">of Quality Engineering Experience</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold sm:text-4xl mb-6">
                  Quality Engineering <span className="text-[#043b73]">Expertise</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The complexity of implementing and integrating the new technologies has increased by 
                  huge multiples. With 9+ years of experience, our quality engineering professionals bring 
                  diverse skills across QA, automation, continuous testing, DevOps, and Agile to clients globally.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We push the boundaries of what&apos;s possible with cutting-edge technologies, modern engineering 
                  practices, and proprietary assets.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {expertise.slice(0, 4).map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border bg-card p-5 text-center transition-all hover:shadow-lg hover:border-[#043b73]/30"
                  >
                    <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#043b73]/10">
                      <item.icon className="h-6 w-6 text-[#043b73]" />
                    </div>
                    <p className="font-semibold text-sm">{item.title}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold sm:text-4xl">
                Services <span className="text-[#FF6B00]">Rendered</span>
              </h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all hover:shadow-xl hover:border-[#FF6B00]/30"
                >
                  <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#FF6B00]/5 transition-transform group-hover:scale-150" />
                  <div className="relative flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF6B00] to-[#FF6B00]/70 text-white shadow-lg">
                        <service.icon className="h-7 w-7" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold">{service.name}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Domain Section */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold sm:text-4xl">
                Domain <span className="text-[#043b73]">Expertise</span>
              </h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4">
              {domains.map((domain, index) => (
                <motion.div
                  key={domain}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-full border-2 border-[#043b73]/20 bg-[#043b73]/5 px-8 py-4 text-lg font-semibold text-[#043b73] transition-all hover:bg-[#043b73] hover:text-white hover:border-[#043b73]"
                >
                  {domain}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-[#FF6B00] to-[#FF6B00]/80">
          <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <TestTube className="mx-auto h-16 w-16 text-white/80 mb-6" />
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Ensure Quality at Every Stage
              </h2>
              <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
                Partner with UniqueHire for comprehensive testing services that push the boundaries 
                of what&apos;s possible with cutting-edge technologies.
              </p>
              <div className="mt-8">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-[#FF6B00] hover:bg-white/90">
                    Start Testing Project
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
