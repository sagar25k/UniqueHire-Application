"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { 
  Briefcase, 
  Target, 
  TrendingUp,
  Users,
  Database,
  Smartphone,
  Cloud,
  BarChart3,
  CheckCircle,
  Award,
  Clock,
  Shield
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const valuePropositions = [
  {
    title: "Industry Experience",
    description: "Applying our industry experience to key business functions",
    icon: Award,
  },
  {
    title: "Business Impact Recognition",
    description: "Recognizing the areas of business impact and value",
    icon: Target,
  },
  {
    title: "Process & Technical Expertise",
    description: "Applying process and technical expertise",
    icon: TrendingUp,
  },
  {
    title: "Shared Ownership",
    description: "Sharing ownership of the final business outcomes of the client",
    icon: Users,
  },
]

const staffingHighlights = [
  "Dedicated Technical and Domains knowledge Recruiters work on account for sourcing",
  "Strong Technical screeners for screening resume",
  "Large In-house database & Bench Resources",
  "Specialized Team for sourcing on emerging technologies like Mobile, Digital and Social Media, Cloud, Big Data and Analytics and Internet of things",
  "Faster Turnaround, lower renege, Lower cost, better quality, lower attrition and better resource management is success key factors at UHC",
  "Key Account Management team work with deployed resources at client for better delivery and experience as a program",
]

const technologies = [
  { name: "Mobile", icon: Smartphone },
  { name: "Cloud", icon: Cloud },
  { name: "Big Data", icon: Database },
  { name: "Analytics", icon: BarChart3 },
]

const clientBenefits = [
  {
    title: "Expert Evaluation",
    description: "We evaluate each candidate by our internal Technical team with 15+ years of experience in different skills & domains",
  },
  {
    title: "High Selection Ratio",
    description: "We maintain 1:3 ratio for profile to selection & above 75% as offer to joining ratio",
  },
  {
    title: "Quality & TAT Priority",
    description: "Quality & TAT are our priority in every engagement",
  },
  {
    title: "Statutory Compliance",
    description: "Statutory obligations are done by UniqueHire & are no longer a client's responsibility",
  },
]

export default function ConsultingPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 min-h-[600px] flex items-center">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url(/images/consulting_2.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px] z-0" />
          
          <div className="absolute inset-0 opacity-40 z-0">
            <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-[#043b73]/20 blur-3xl" />
            <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-[#FF6B00]/20 blur-3xl" />
          </div>
          
          <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8 w-full">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl lg:max-w-none"
              >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#043b73]/10 px-4 py-2">
                <Briefcase className="h-5 w-5 text-[#043b73]" />
                <span className="text-sm font-medium text-[#043b73]">Professional Consulting</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Professional <span className="text-[#043b73]">Consulting</span> Services
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                UniqueHire delivers value to clients through our deep industry experience, process expertise, 
                and commitment to shared business outcomes. We partner with you to drive meaningful results.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#043b73] text-white hover:bg-[#043b73]/90">
                    Start Consulting
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline">
                    View All Services
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[450px]"
            >
              <Image 
                src="/images/png11.png" 
                alt="Consulting Services Graphic"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

        {/* Value Propositions */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold sm:text-4xl">
                How We Deliver <span className="text-[#043b73]">Value</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                UniqueHire delivers value to clients by:
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {valuePropositions.map((prop, index) => (
                <motion.div
                  key={prop.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border bg-card p-6 text-center transition-all hover:shadow-xl hover:border-[#043b73]/30"
                >
                  <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#043b73]/5 transition-transform group-hover:scale-150" />
                  <div className="relative">
                    <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#043b73]/10">
                      <prop.icon className="h-7 w-7 text-[#043b73]" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{prop.title}</h3>
                    <p className="text-sm text-muted-foreground">{prop.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Staffing Section */}
        <section className="py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold sm:text-4xl mb-6">
                  Staffing <span className="text-[#FF6B00]">Excellence</span>
                </h2>
                <div className="space-y-4">
                  {staffingHighlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="h-5 w-5 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">{highlight}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="rounded-2xl border bg-card p-6 text-center transition-all hover:shadow-lg"
                  >
                    <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#043b73]/10">
                      <tech.icon className="h-6 w-6 text-[#043b73]" />
                    </div>
                    <p className="font-semibold">{tech.name}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Client Benefits */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold sm:text-4xl">
                Benefits to <span className="text-[#043b73]">Clients</span>
              </h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              {clientBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#043b73]/10">
                        <CheckCircle className="h-6 w-6 text-[#043b73]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Banner */}
        <section className="py-16 bg-[#043b73]">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <p className="text-4xl font-bold">15+</p>
                <p className="mt-2 text-sm opacity-90">Years Experience</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center text-white"
              >
                <p className="text-4xl font-bold">1:3</p>
                <p className="mt-2 text-sm opacity-90">Profile to Selection</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center text-white"
              >
                <p className="text-4xl font-bold">75%+</p>
                <p className="mt-2 text-sm opacity-90">Offer to Joining</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center text-white"
              >
                <p className="text-4xl font-bold">100%</p>
                <p className="mt-2 text-sm opacity-90">Compliance</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-gradient-to-br from-[#043b73] to-[#043b73]/80 p-12"
            >
              <Briefcase className="mx-auto h-16 w-16 text-white/80 mb-6" />
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Ready to Partner With Us?
              </h2>
              <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
                Let UniqueHire be your trusted consulting partner for all your staffing and business transformation needs.
              </p>
              <div className="mt-8">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-[#043b73] hover:bg-white/90">
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
