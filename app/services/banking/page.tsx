"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { 
  Building2,
  Landmark,
  Wallet,
  Users,
  Laptop,
  Target,
  FileText,
  Briefcase,
  CheckCircle,
  Globe,
  Award
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const bankingSectors = [
  { name: "Retail and Commercial Banks", icon: Landmark },
  { name: "Digital Banks and Neo Banks", icon: Laptop },
  { name: "Credit Unions", icon: Users },
  { name: "Fintech", icon: Wallet },
]

const consultingServices = [
  {
    title: "Talent Management Lifecycle",
    description: "End-to-end talent management from acquisition to retention",
    icon: Users,
  },
  {
    title: "Digital First Approach",
    description: "Embracing digital transformation in all aspects of banking technology",
    icon: Laptop,
  },
  {
    title: "Strategic Consulting",
    description: "Expert guidance for strategic business decisions",
    icon: Target,
  },
  {
    title: "Transition Tool kits / Framework",
    description: "Comprehensive frameworks for seamless transitions",
    icon: FileText,
  },
  {
    title: "Efficient Workspace",
    description: "Optimized workplace solutions for maximum productivity",
    icon: Briefcase,
  },
]

const services = [
  "Technology staffing (onsite / offshore)",
  "Advisory and consulting",
  "Application development and modernization",
  "Implementation & integration services",
  "Quality assurance",
  "Digital enablement",
  "Data Analytics",
]

const stats = [
  { value: "11+", label: "Years Experience" },
  { value: "500+", label: "Employees & Associates" },
  { value: "4+", label: "Global Geographies" },
  { value: "Fortune 500", label: "Client Portfolio" },
]

export default function BankingPage() {
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
                <Building2 className="h-5 w-5 text-[#043b73]" />
                <span className="text-sm font-medium text-[#043b73]">Banking & Financial Services</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Banking & <span className="text-[#043b73]">Financial</span> Services
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Our specialized banking and financial IT services turn disruption into growth and unlock new 
                opportunities with reimagined customer experiences, business models, and tech landscapes.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#043b73] text-white hover:bg-[#043b73]/90">
                    Partner With Us
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

        {/* Stats Section */}
        <section className="py-16 bg-[#043b73]">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center text-white"
                >
                  <p className="text-4xl font-bold">{stat.value}</p>
                  <p className="mt-2 text-sm opacity-90">{stat.label}</p>
                </motion.div>
              ))}
            </div>
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
                  Trusted Partner in <span className="text-[#FF6B00]">BFSI Space</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Uniquehire Services is trusted partner with leading names for its agile services right from 
                  technology staffing (onsite / offshore) to executing advisory and consulting, application 
                  development and modernization, and implementation & integration services.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  With over 11+ years of experience, Uniquehire is a globally trusted and highly esteemed 
                  tech-enabled services partner in the BFSI space with leading Fortune 500 names in its 
                  trusted client portfolio.
                </p>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#043b73]/5 border border-[#043b73]/20">
                  <Globe className="h-10 w-10 text-[#043b73]" />
                  <div>
                    <p className="font-semibold">Global Operations</p>
                    <p className="text-sm text-muted-foreground">Spanning 4+ Geographies with 500+ Associates</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold mb-4">Services We Offer:</h3>
                {services.map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-card border hover:border-[#043b73]/30 transition-colors"
                  >
                    <CheckCircle className="h-5 w-5 text-[#043b73]" />
                    <span>{service}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Banking Sectors */}
        <section className="py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold sm:text-4xl">
                The Banking Sectors <span className="text-[#043b73]">We Serve</span>
              </h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {bankingSectors.map((sector, index) => (
                <motion.div
                  key={sector.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-2xl border bg-card p-8 text-center transition-all hover:shadow-xl"
                >
                  <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#043b73]/5 transition-transform group-hover:scale-150" />
                  <div className="relative">
                    <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#043b73] to-[#043b73]/70 text-white shadow-lg">
                      <sector.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold">{sector.name}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Consulting Services */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold sm:text-4xl">
                UniqueHire <span className="text-[#FF6B00]">Consulting Services</span>
              </h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {consultingServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all hover:shadow-lg hover:border-[#FF6B00]/30"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF6B00]/10">
                    <service.icon className="h-6 w-6 text-[#FF6B00]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-[#043b73] to-[#043b73]/80">
          <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Award className="mx-auto h-16 w-16 text-white/80 mb-6" />
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Transform Your Banking Operations
              </h2>
              <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
                Partner with UniqueHire to turn disruption into growth and unlock new opportunities 
                in the banking and financial services sector.
              </p>
              <div className="mt-8">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-[#043b73] hover:bg-white/90">
                    Get Started Today
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
