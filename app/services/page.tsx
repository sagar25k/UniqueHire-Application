"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  Code2,
  Layers,
  Server,
  Users,
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  Cloud,
  Database,
  Cpu,
  GitBranch,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { CTASection } from "@/components/sections/cta-section"

const services = [
  {
    icon: Code2,
    title: "Product Development",
    description:
      "End-to-end product development services from ideation to deployment, using cutting-edge technologies and agile methodologies.",
    features: [
      "Custom Software Development",
      "Mobile App Development",
      "Web Application Development",
      "API Development & Integration",
      "UI/UX Design",
      "Quality Assurance & Testing",
    ],
    color: "#043b73",
  },
  {
    icon: Layers,
    title: "Application Management",
    description:
      "Comprehensive application lifecycle management, maintenance, and modernization services to keep your systems running smoothly.",
    features: [
      "Application Maintenance",
      "Legacy System Modernization",
      "Performance Optimization",
      "24/7 Support & Monitoring",
      "Security Patching",
      "Version Upgrades",
    ],
    color: "#FF6B00",
  },
  {
    icon: Server,
    title: "Infrastructure Services",
    description:
      "Robust cloud and on-premise infrastructure solutions designed for scalability, security, and optimal performance.",
    features: [
      "Cloud Migration (AWS, Azure, GCP)",
      "DevOps Implementation",
      "Infrastructure as Code",
      "Container Orchestration",
      "Network Architecture",
      "Disaster Recovery",
    ],
    color: "#043b73",
  },
  {
    icon: Users,
    title: "Staffing Solutions",
    description:
      "Access top-tier IT talent through our specialized recruitment services, tailored to your unique business needs.",
    features: [
      "Contract Staffing",
      "Permanent Placement",
      "Executive Search",
      "Team Augmentation",
      "Offshore Development Centers",
      "Managed Services",
    ],
    color: "#FF6B00",
  },
]

const technologies = [
  { name: "React", icon: Zap },
  { name: "Node.js", icon: GitBranch },
  { name: "Python", icon: Code2 },
  { name: "AWS", icon: Cloud },
  { name: "Azure", icon: Cloud },
  { name: "Kubernetes", icon: Cpu },
  { name: "PostgreSQL", icon: Database },
  { name: "MongoDB", icon: Database },
]

const process = [
  { step: "01", title: "Discovery", description: "Understanding your needs and objectives" },
  { step: "02", title: "Strategy", description: "Developing a tailored solution roadmap" },
  { step: "03", title: "Execution", description: "Implementing with agile methodologies" },
  { step: "04", title: "Delivery", description: "Deploying and supporting your solution" },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30 pt-32 pb-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <span className="text-sm font-medium uppercase tracking-wider text-[#FF6B00]">
                Our Services
              </span>
              <h1 className="mt-4 text-4xl font-bold sm:text-5xl lg:text-6xl text-balance">
                Comprehensive IT Solutions for{" "}
                <span className="gradient-text">Modern Businesses</span>
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground leading-relaxed">
                Our collection of tech services spans various needs at every stage of the transformation process. Explore how we help businesses transform.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="space-y-24">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                    index % 2 === 1 ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div
                      className="flex h-16 w-16 items-center justify-center rounded-2xl"
                      style={{ backgroundColor: `${service.color}15` }}
                    >
                      <service.icon
                        className="h-8 w-8"
                        style={{ color: service.color }}
                      />
                    </div>
                    <h2 className="mt-6 text-3xl font-bold">{service.title}</h2>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <CheckCircle2
                            className="h-5 w-5 shrink-0"
                            style={{ color: service.color }}
                          />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="mt-8 inline-block">
                      <Button
                        className="group"
                        style={{ backgroundColor: service.color }}
                      >
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>

                  <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                    <div
                      className="aspect-square rounded-3xl p-8"
                      style={{ backgroundColor: `${service.color}10` }}
                    >
                      <div className="relative h-full rounded-2xl bg-card p-8 shadow-xl">
                        <service.icon
                          className="mx-auto h-24 w-24"
                          style={{ color: `${service.color}30` }}
                        />
                        <div className="mt-8 space-y-4">
                          {service.features.slice(0, 3).map((feature, i) => (
                            <motion.div
                              key={feature}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 }}
                              className="rounded-lg bg-muted p-4"
                            >
                              <p className="text-sm font-medium">{feature}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="bg-secondary/30 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <span className="text-sm font-medium uppercase tracking-wider text-[#FF6B00]">
                Technology Stack
              </span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Technologies We Work With
              </h2>
            </motion.div>

            <div className="mt-16 flex flex-wrap justify-center gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group flex items-center gap-3 rounded-full border bg-card px-6 py-3 transition-all duration-300 hover:shadow-lg"
                >
                  <tech.icon className="h-5 w-5 text-[#043b73]" />
                  <span className="font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <span className="text-sm font-medium uppercase tracking-wider text-[#FF6B00]">
                Our Process
              </span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                How We Work
              </h2>
            </motion.div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="group relative overflow-hidden border-2 border-transparent bg-card text-center transition-all duration-300 hover:border-[#043b73]/20 hover:shadow-xl">
                    <CardContent className="p-8">
                      <span
                        className="text-6xl font-bold"
                        style={{
                          color: index % 2 === 0 ? "#043b73" : "#FF6B00",
                          opacity: 0.2,
                        }}
                      >
                        {item.step}
                      </span>
                      <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
