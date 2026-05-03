"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { 
  Globe, 
  Brain, 
  Clock, 
  Users, 
  Award, 
  Shield, 
  Rocket, 
  Target,
  CheckCircle,
  TrendingUp,
  Building2,
  Zap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline"

const challenges = [
  {
    title: "Niche Skill Availability",
    description: "The need for high-end skills like AI/ML, cybersecurity, cloud computing, and RPA is growing, but finding the right talent pool remains difficult.",
    icon: Brain,
  },
  {
    title: "Time to Hire",
    description: "Delayed hiring impacts project timelines and operational efficiency, making fast, reliable recruitment essential.",
    icon: Clock,
  },
  {
    title: "Attrition and Retention Issues",
    description: "High attrition rates in GCCs create a constant need for resource replenishment, causing disruptions.",
    icon: Users,
  },
  {
    title: "Employer Branding",
    description: "GCCs often compete with local companies and start-ups for top talent, necessitating strong recruitment strategies.",
    icon: Award,
  },
  {
    title: "Compliance and Scalability",
    description: "Meeting local employment laws and scaling teams quickly for new projects can be challenging without the right hiring partner.",
    icon: Shield,
  },
]

const offerings = [
  {
    title: "Niche Talent Acquisition",
    points: [
      "Access to a vast network of pre-vetted candidates across emerging technologies",
      "Expertise in hiring for roles in AI, Data Science, DevOps, Cybersecurity, and Cloud Platforms",
    ],
    icon: Target,
  },
  {
    title: "Faster Time-to-Hire",
    points: [
      "AI-driven recruitment processes that streamline candidate sourcing, screening, and onboarding",
      "Flexible staffing models: Permanent, contract, and project-based hiring",
    ],
    icon: Rocket,
  },
  {
    title: "Resource Fulfillment & Pipeline Management",
    points: [
      "Build and manage talent pipelines for sustained business continuity",
      "Proactive support for resource planning and demand forecasting",
    ],
    icon: Users,
  },
  {
    title: "Strategic Employer Branding",
    points: [
      "Enhance GCCs' brand positioning to attract the right talent with customized recruitment marketing campaigns",
      "Offer candidate experience management solutions to reduce offer-dropouts",
    ],
    icon: Award,
  },
  {
    title: "Compliance and Scalability",
    points: [
      "Adherence to local labor laws and statutory requirements",
      "On-demand talent augmentation to quickly ramp up operations for new projects",
    ],
    icon: Shield,
  },
]

const whyUs = [
  { title: "Proven Expertise", description: "Trusted by several leading GCCs for recruitment excellence in India", icon: Award },
  { title: "Domain-Focused Recruiters", description: "Specialists with in-depth industry knowledge to match the right talent", icon: Users },
  { title: "Technology-Driven Hiring", description: "Leveraging the latest AI and recruitment tools for speed and efficiency", icon: Zap },
  { title: "Transparent Engagement", description: "Clear KPIs, regular reports, and seamless collaboration throughout the lifecycle", icon: Target },
]

const stats = [
  { value: "90%", label: "Offer-to-Joining Ratio" },
  { value: "30-40%", label: "Reduction in Time-to-Hire" },
  { value: "500+", label: "Annual Placements for GCCs" },
  { value: "1,500+", label: "GCCs in India" },
]

const challengesTimeline = challenges.map((c, i) => ({
  id: i + 1,
  title: c.title,
  date: "Ongoing",
  content: c.description,
  category: "Challenge",
  icon: c.icon,
  relatedIds: i < challenges.length - 1 ? [i + 2] : [1],
  status: "in-progress" as const,
  energy: 90 - (i * 10),
}))

export default function GCCsPage() {
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
                <Globe className="h-5 w-5 text-[#043b73]" />
                <span className="text-sm font-medium text-[#043b73]">Global Capability Centers</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Empowering <span className="text-[#043b73]">GCCs in India</span> with UniqueHire&apos;s Expertise
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Global Capability Centers (GCCs) in India are integral to global enterprises, driving innovation, 
                cost optimization, and operational efficiency. India is home to over 1,500 GCCs, contributing 
                approximately $35 billion annually to the economy.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#043b73] text-white hover:bg-[#043b73]/90">
                    Partner With Us
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline">
                    Explore Services
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

        {/* Challenges Section */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold sm:text-4xl">
                Challenges in <span className="text-[#FF6B00]">Recruitment</span> for GCCs
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Despite their growth, GCCs face several hiring challenges that can hinder their operational goals
              </p>
            </motion.div>

            <div className="mt-8">
              <RadialOrbitalTimeline timelineData={challengesTimeline} />
            </div>
          </div>
        </section>

        {/* Offerings Section */}
        <section className="py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold sm:text-4xl">
                UniqueHire&apos;s <span className="text-[#043b73]">Tailored Solutions</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                At UniqueHire, we specialize in helping GCCs solve complex recruitment challenges through agile, end-to-end staffing solutions
              </p>
            </motion.div>

            <div className="space-y-6">
              {offerings.map((offering, index) => (
                <motion.div
                  key={offering.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-xl"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#043b73] to-[#043b73]/70 text-white shadow-lg">
                        <offering.icon className="h-7 w-7" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-4">{offering.title}</h3>
                      <ul className="space-y-3">
                        {offering.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-[#043b73] flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why UniqueHire Section */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold sm:text-4xl">
                Why <span className="text-[#043b73]">UniqueHire</span>?
              </h2>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {whyUs.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#043b73]/10">
                    <item.icon className="h-8 w-8 text-[#043b73]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
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
              <Building2 className="mx-auto h-16 w-16 text-white/80 mb-6" />
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Let Us Power Your Talent Strategy
              </h2>
              <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
                Partnering with UniqueHire ensures that your GCC stays ahead of talent challenges with scalable, 
                efficient, and compliant recruitment solutions.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
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
