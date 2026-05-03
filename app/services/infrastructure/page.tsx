"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { 
  Server, 
  Database,
  Users,
  Bot,
  Network,
  Cloud,
  Shield,
  Cog,
  CheckCircle,
  TrendingUp,
  Clock,
  Headphones
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  { name: "Data-center Services", icon: Database, description: "Comprehensive data center management and optimization" },
  { name: "End-user Support", icon: Users, description: "24/7 technical support for your workforce" },
  { name: "AI-led Automation", icon: Bot, description: "Intelligent automation for operational efficiency" },
  { name: "Network and Communication", icon: Network, description: "Robust network infrastructure solutions" },
  { name: "Cloud Services", icon: Cloud, description: "Scalable cloud computing and migration" },
  { name: "Security", icon: Shield, description: "Enterprise-grade security solutions" },
  { name: "Digital Operations", icon: Cog, description: "Streamlined digital transformation services" },
]

const benefits = [
  {
    title: "Improved Efficiency",
    description: "Optimize your infrastructure for maximum performance",
    icon: TrendingUp,
  },
  {
    title: "Maximum Uptime",
    description: "Ensure business continuity with reliable systems",
    icon: Clock,
  },
  {
    title: "Minimized Costs",
    description: "Reduce operational expenses through optimization",
    icon: TrendingUp,
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical assistance and monitoring",
    icon: Headphones,
  },
]

const commitments = [
  "Full responsibility for your remote network support",
  "Day-to-day operations management",
  "Proactive maintenance and monitoring",
  "Dedicated technology partnership",
  "Investment optimization",
  "Increased effectiveness and productivity",
]

export default function InfrastructurePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#043b73]/10 via-background to-[#FF6B00]/5 py-24">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-[#043b73]/20 blur-3xl" />
            <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-[#FF6B00]/20 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#043b73]/10 px-4 py-2">
                <Server className="h-5 w-5 text-[#043b73]" />
                <span className="text-sm font-medium text-[#043b73]">Infrastructure Services</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="text-[#043b73]">Infrastructure</span> Services
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                UniqueHire&apos;s Infrastructure services are designed to resolve and meet the requirements of 
                global enterprises. With a comprehensive bouquet of infrastructure management services, we 
                manage your infrastructure seamlessly and with unmatched efficiency.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#043b73] text-white hover:bg-[#043b73]/90">
                    Get Infrastructure Support
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline">
                    All Services
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold sm:text-4xl">
                Comprehensive <span className="text-[#FF6B00]">Service Offerings</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Our comprehensive bouquet of infrastructure management services
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all hover:shadow-xl hover:border-[#043b73]/30"
                >
                  <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#043b73]/5 transition-transform group-hover:scale-150" />
                  <div className="relative">
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#043b73] to-[#043b73]/70 text-white shadow-lg">
                      <service.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold sm:text-4xl">
                How We <span className="text-[#043b73]">Help You</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Our offerings will help you to improve efficiency and uptime, while minimizing costs
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#FF6B00]/10">
                    <benefit.icon className="h-8 w-8 text-[#FF6B00]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Commitments Section */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold sm:text-4xl mb-6">
                  Your Dedicated <span className="text-[#043b73]">Technology Partner</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We work with you closely to optimize your investment, as well as increase the effectiveness 
                  and productivity. As your dedicated technology partner, we assure full responsibility for 
                  your infrastructure needs.
                </p>
                <div className="space-y-4">
                  {commitments.map((commitment, index) => (
                    <motion.div
                      key={commitment}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="h-5 w-5 text-[#043b73] flex-shrink-0" />
                      <span>{commitment}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="rounded-3xl bg-gradient-to-br from-[#043b73] to-[#043b73]/80 p-8 text-white">
                  <Server className="h-16 w-16 mb-6 opacity-80" />
                  <h3 className="text-2xl font-bold mb-4">Seamless Infrastructure Management</h3>
                  <p className="text-white/90 leading-relaxed">
                    We manage your infrastructure seamlessly and with unmatched efficiency, allowing you 
                    to focus on your core business operations.
                  </p>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="text-center p-4 rounded-xl bg-white/10">
                      <p className="text-3xl font-bold">24/7</p>
                      <p className="text-sm opacity-80">Support</p>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-white/10">
                      <p className="text-3xl font-bold">99.9%</p>
                      <p className="text-sm opacity-80">Uptime</p>
                    </div>
                  </div>
                </div>
              </motion.div>
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
              <Server className="mx-auto h-16 w-16 text-white/80 mb-6" />
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Transform Your Infrastructure
              </h2>
              <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
                Partner with UniqueHire for comprehensive infrastructure services that ensure efficiency, 
                uptime, and cost optimization.
              </p>
              <div className="mt-8">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-[#FF6B00] hover:bg-white/90">
                    Contact Us Today
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
